(function () {
  "use strict";

  document.documentElement.classList.add("js");

  function prefersReducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function scrollToElement(target) {
    if (!target) {
      return;
    }

    target.scrollIntoView({
      behavior: prefersReducedMotion() ? "auto" : "smooth",
      block: "start",
    });
  }

  function scrollToTarget(button) {
    const selector = button.getAttribute("data-scroll-target");
    const target = selector ? document.querySelector(selector) : null;

    scrollToElement(target);
  }

  function updateNoticeFeedback(button) {
    const item = button.closest(".notice-option-item");
    const response = item ? item.querySelector("[data-notice-response]") : null;

    if (response) {
      response.hidden = button.getAttribute("aria-pressed") !== "true";
    }
  }

  function showFeedback(feedback, message) {
    if (feedback) {
      feedback.textContent = message;
      feedback.hidden = false;
    }
  }

  function getReflectionText(textarea) {
    return textarea ? textarea.value.trim() : "";
  }

  function copyText(text) {
    function copyWithTemporaryField() {
      const activeElement = document.activeElement;
      const temporaryField = document.createElement("textarea");

      temporaryField.value = text;
      temporaryField.setAttribute("readonly", "");
      temporaryField.style.position = "fixed";
      temporaryField.style.left = "-9999px";
      document.body.appendChild(temporaryField);
      temporaryField.select();

      const copied = document.execCommand("copy");

      temporaryField.remove();

      if (activeElement && typeof activeElement.focus === "function") {
        activeElement.focus();
      }

      if (!copied) {
        throw new Error("Copy command failed");
      }
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text).catch(function () {
        copyWithTemporaryField();
      });
    }

    copyWithTemporaryField();
    return Promise.resolve();
  }

  function initialiseScenarioActivity() {
    const activity = document.querySelector("[data-scenario-activity]");

    if (!activity) {
      return;
    }

    const cards = Array.from(activity.querySelectorAll("[data-scenario-card]"));
    const controls = activity.querySelector("[data-scenario-controls]");
    const previousButton = activity.querySelector("[data-scenario-previous]");
    const nextButton = activity.querySelector("[data-scenario-next]");
    const progress = activity.querySelector("[data-scenario-progress]");
    const status = activity.querySelector("[data-scenario-status]");
    let currentIndex = 0;

    if (!cards.length || !controls || !previousButton || !nextButton || !progress) {
      return;
    }

    function cardHasAnswer(card) {
      return Boolean(card.querySelector('[data-scenario-option][aria-pressed="true"]'));
    }

    function updateCard(moveFocus) {
      cards.forEach(function (card, index) {
        card.hidden = index !== currentIndex;
      });

      const currentCard = cards[currentIndex];
      const isLastCard = currentIndex === cards.length - 1;

      progress.textContent = "Moment " + (currentIndex + 1) + " of " + cards.length;
      previousButton.disabled = currentIndex === 0;
      nextButton.disabled = !cardHasAnswer(currentCard);
      nextButton.textContent = isLastCard ? "Finish activity" : "Next moment";

      if (moveFocus) {
        const heading = currentCard.querySelector("h3");

        if (heading) {
          heading.setAttribute("tabindex", "-1");
          heading.focus();
        }
      }
    }

    cards.forEach(function (card) {
      const options = Array.from(card.querySelectorAll("[data-scenario-option]"));

      options.forEach(function (button) {
        button.addEventListener("click", function () {
          options.forEach(function (option) {
            const feedbackId = option.getAttribute("aria-controls");
            const feedback = feedbackId ? document.getElementById(feedbackId) : null;

            option.setAttribute("aria-pressed", String(option === button));

            if (feedback) {
              feedback.hidden = option !== button;
            }
          });

          nextButton.disabled = false;
        });
      });
    });

    previousButton.addEventListener("click", function () {
      if (currentIndex > 0) {
        currentIndex -= 1;
        updateCard(true);
      }
    });

    nextButton.addEventListener("click", function () {
      if (currentIndex < cards.length - 1) {
        currentIndex += 1;
        updateCard(true);
        return;
      }

      if (status) {
        status.textContent = "All five moments completed. Continue to choose one conversation opener.";
      }

      scrollToElement(document.querySelector("#openers-heading"));
    });

    controls.hidden = false;
    updateCard(false);
  }

  function initialiseOpenerChoice() {
    const options = Array.from(document.querySelectorAll("[data-opener-option]"));
    const feedback = document.querySelector("[data-opener-feedback]");

    options.forEach(function (button) {
      button.addEventListener("click", function () {
        options.forEach(function (option) {
          option.setAttribute("aria-pressed", String(option === button));
        });

        if (feedback) {
          feedback.hidden = false;
        }
      });
    });
  }

  function initialiseCheckpoint() {
    const options = Array.from(document.querySelectorAll("[data-checkpoint-option]"));
    const debrief = document.querySelector("[data-checkpoint-debrief]");

    options.forEach(function (button) {
      button.addEventListener("click", function () {
        options.forEach(function (option) {
          const feedbackId = option.getAttribute("aria-controls");
          const feedback = feedbackId ? document.getElementById(feedbackId) : null;

          option.setAttribute("aria-pressed", String(option === button));

          if (feedback) {
            feedback.hidden = option !== button;
          }
        });

        if (debrief) {
          debrief.hidden = false;
        }
      });
    });
  }

  function initialiseActionPlan() {
    const plan = document.querySelector("[data-action-plan]");
    const roleSelector = document.querySelector("[data-role-selector]");

    if (!plan || !roleSelector) {
      return;
    }

    const roleButtons = Array.from(roleSelector.querySelectorAll("[data-role-option]"));
    const rolePanels = Array.from(roleSelector.querySelectorAll("[data-role-panel]"));
    const habitButtons = Array.from(roleSelector.querySelectorAll("[data-habit-option]"));
    const roleStatus = roleSelector.querySelector("[data-role-selection-status]");
    const habitFeedback = roleSelector.querySelector("[data-habit-feedback]");
    const selectedRoleOutput = plan.querySelector("[data-selected-role]");
    const changeRoleButton = plan.querySelector("[data-change-role]");
    const cueInput = plan.querySelector("[data-action-cue]");
    const actionInput = plan.querySelector("[data-action-text]");
    const actionError = plan.querySelector("[data-action-error]");
    const previewText = plan.querySelector("[data-plan-preview-text]");
    const copyButton = plan.querySelector("[data-copy-action]");
    const downloadButton = plan.querySelector("[data-download-action]");
    const emailButton = plan.querySelector("[data-email-action]");
    const toolsFeedback = plan.querySelector("[data-action-tools-feedback]");
    let selectedRole = "";

    function updatePreview() {
      const action = actionInput.value.trim();
      const cue = cueInput.value.trim();

      if (!action) {
        previewText.textContent = "Choose a role and habit, or write your own small action.";
        return;
      }

      const lines = ["Role or context: " + (selectedRole || "Not selected")];

      if (cue) {
        lines.push("When or where: " + cue);
      }

      lines.push("My small habit: " + action);
      previewText.textContent = lines.join("\n");
    }

    function getPlanText() {
      const action = actionInput.value.trim();
      const cue = cueInput.value.trim();

      if (!selectedRole) {
        roleStatus.textContent = "Choose a role or context before saving your plan.";
        roleStatus.classList.add("form-error");
        scrollToElement(document.querySelector("#role-habits-heading"));

        if (roleButtons.length) {
          roleButtons[0].focus({ preventScroll: true });
        }

        return "";
      }

      if (!action) {
        actionError.hidden = false;
        actionInput.setAttribute("aria-invalid", "true");
        actionInput.focus();
        return "";
      }

      actionError.hidden = true;
      actionInput.removeAttribute("aria-invalid");

      const lines = [
        "Talking About Online Life",
        "My online safety conversation habit",
        "",
        "Role or context: " + (selectedRole || "Not selected"),
      ];

      if (cue) {
        lines.push("When or where: " + cue);
      }

      lines.push(
        "My small habit: " + action,
        "",
        "Safeguarding reminder: If a concern emerges, follow the school's child protection procedure and report it through the school's safeguarding route without delay."
      );

      return lines.join("\n");
    }

    roleButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        const panelId = button.getAttribute("aria-controls");

        selectedRole = button.getAttribute("data-role-name") || "";

        roleButtons.forEach(function (roleButton) {
          roleButton.setAttribute("aria-pressed", String(roleButton === button));
        });

        rolePanels.forEach(function (panel) {
          panel.hidden = panel.id !== panelId;
        });

        habitButtons.forEach(function (habitButton) {
          habitButton.setAttribute("aria-pressed", "false");
        });

        if (actionInput.getAttribute("data-autofilled") === "true") {
          actionInput.value = "";
          actionInput.removeAttribute("data-autofilled");
        }

        selectedRoleOutput.textContent = selectedRole;
        roleStatus.classList.remove("form-error");
        roleStatus.textContent = "Showing three habits for " + selectedRole + ". Choose one, or write your own below.";
        habitFeedback.hidden = true;
        updatePreview();
      });
    });

    habitButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        const suggestion = button.getAttribute("data-habit-text") || button.textContent.trim();

        habitButtons.forEach(function (habitButton) {
          habitButton.setAttribute("aria-pressed", String(habitButton === button));
        });

        actionInput.value = suggestion;
        actionInput.setAttribute("data-autofilled", "true");
        actionError.hidden = true;
        actionInput.removeAttribute("aria-invalid");
        habitFeedback.hidden = false;
        updatePreview();
      });
    });

    actionInput.addEventListener("input", function () {
      actionInput.removeAttribute("data-autofilled");

      if (actionInput.value.trim()) {
        actionError.hidden = true;
        actionInput.removeAttribute("aria-invalid");
      }

      updatePreview();
    });

    cueInput.addEventListener("input", updatePreview);

    changeRoleButton.addEventListener("click", function () {
      scrollToElement(document.querySelector("#role-habits-heading"));

      if (roleButtons.length) {
        roleButtons[0].focus({ preventScroll: true });
      }
    });

    copyButton.addEventListener("click", function () {
      const text = getPlanText();

      if (!text) {
        showFeedback(
          toolsFeedback,
          selectedRole ? "Add one small habit before copying your plan." : "Choose a role or context before copying your plan."
        );
        return;
      }

      copyText(text)
        .then(function () {
          showFeedback(toolsFeedback, "Copied. You can paste your plan into your own notes.");
        })
        .catch(function () {
          showFeedback(toolsFeedback, "Copy did not work this time. Select the plan text and copy it manually.");
        });
    });

    downloadButton.addEventListener("click", function () {
      const text = getPlanText();

      if (!text) {
        showFeedback(
          toolsFeedback,
          selectedRole ? "Add one small habit before downloading your plan." : "Choose a role or context before downloading your plan."
        );
        return;
      }

      try {
        const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
        const objectUrl = URL.createObjectURL(blob);
        const downloadLink = document.createElement("a");

        downloadLink.href = objectUrl;
        downloadLink.download = "my-online-safety-conversation-habit.txt";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        downloadLink.remove();
        window.setTimeout(function () {
          URL.revokeObjectURL(objectUrl);
        }, 1000);
        showFeedback(toolsFeedback, "Your text file has been prepared for download.");
      } catch (error) {
        showFeedback(toolsFeedback, "The download did not work this time. Copy the plan instead.");
      }
    });

    emailButton.addEventListener("click", function () {
      const text = getPlanText();

      if (!text) {
        showFeedback(
          toolsFeedback,
          selectedRole ? "Add one small habit before opening an email draft." : "Choose a role or context before opening an email draft."
        );
        return;
      }

      const subject = encodeURIComponent("My online safety conversation habit");
      const body = encodeURIComponent(text);

      showFeedback(toolsFeedback, "Opening a draft in your email app. Add your own address before sending.");
      window.location.href = "mailto:?subject=" + subject + "&body=" + body;
    });

    updatePreview();
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-scroll-target]").forEach(function (button) {
      button.addEventListener("click", function () {
        scrollToTarget(button);
      });
    });

    document.querySelectorAll("[data-notice-option]").forEach(function (button) {
      button.addEventListener("click", function () {
        const isPressed = button.getAttribute("aria-pressed") === "true";
        button.setAttribute("aria-pressed", String(!isPressed));
        updateNoticeFeedback(button);
      });
    });

    const revealButton = document.querySelector("[data-reveal-starters]");
    const starterList = document.querySelector("[data-starter-list]");

    if (revealButton && starterList) {
      revealButton.addEventListener("click", function () {
        starterList.hidden = false;
        revealButton.setAttribute("aria-expanded", "true");
        revealButton.textContent = "Starters revealed";
      });
    }

    const reflectionButton = document.querySelector("[data-reflection-button]");
    const reflectionFeedback = document.querySelector("[data-reflection-feedback]");

    if (reflectionButton && reflectionFeedback) {
      reflectionButton.addEventListener("click", function () {
        reflectionFeedback.hidden = false;
      });
    }

    const reflectionInput = document.querySelector("#reflection-response");
    const copyReflectionButton = document.querySelector("[data-copy-reflection]");
    const emailReflectionButton = document.querySelector("[data-email-reflection]");
    const reflectionToolsFeedback = document.querySelector("[data-reflection-tools-feedback]");

    if (reflectionInput && copyReflectionButton) {
      copyReflectionButton.addEventListener("click", function () {
        const reflectionText = getReflectionText(reflectionInput);

        if (!reflectionText) {
          showFeedback(reflectionToolsFeedback, "Add a reflection first, then you can copy it.");
          return;
        }

        copyText(reflectionText)
          .then(function () {
            showFeedback(reflectionToolsFeedback, "Copied. You can paste it wherever you keep notes.");
          })
          .catch(function () {
            showFeedback(reflectionToolsFeedback, "Copy did not work this time. You can select the text and copy it manually.");
          });
      });
    }

    if (reflectionInput && emailReflectionButton) {
      emailReflectionButton.addEventListener("click", function () {
        const reflectionText = getReflectionText(reflectionInput);

        if (!reflectionText) {
          showFeedback(reflectionToolsFeedback, "Add a reflection first, then you can email it to yourself.");
          return;
        }

        const subjectText = emailReflectionButton.getAttribute("data-email-subject") || "Week 1 reflection: Talking About Online Life";
        const headingText = emailReflectionButton.getAttribute("data-email-heading") || "Week 1 reflection";
        const subject = encodeURIComponent(subjectText);
        const body = encodeURIComponent(headingText + "\n\n" + reflectionText + "\n\nTalking About Online Life");

        showFeedback(reflectionToolsFeedback, "Opening an email draft. Add your own address before sending.");
        window.location.href = "mailto:?subject=" + subject + "&body=" + body;
      });
    }

    initialiseScenarioActivity();
    initialiseOpenerChoice();
    initialiseCheckpoint();
    initialiseActionPlan();
  });
})();
