(function () {
  function scrollToTarget(button) {
    const selector = button.getAttribute("data-scroll-target");
    const target = selector ? document.querySelector(selector) : null;

    if (target) {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      target.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });
    }
  }

  function updateNoticeFeedback(button) {
    const item = button.closest(".notice-option-item");
    const response = item ? item.querySelector("[data-notice-response]") : null;

    if (response) {
      response.hidden = button.getAttribute("aria-pressed") !== "true";
    }
  }

  function showReflectionToolFeedback(feedback, message) {
    if (feedback) {
      feedback.textContent = message;
      feedback.hidden = false;
    }
  }

  function getReflectionText(textarea) {
    return textarea ? textarea.value.trim() : "";
  }

  function copyWithFallback(textarea, text) {
    function selectAndCopy() {
      textarea.focus();
      textarea.select();

      if (!document.execCommand("copy")) {
        throw new Error("Copy command failed");
      }
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text).catch(function () {
        selectAndCopy();
      });
    }

    selectAndCopy();
    return Promise.resolve();
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-scroll-target]").forEach(function (button) {
      button.addEventListener("click", function () {
        scrollToTarget(button);
      });
    });

    const noticeButtons = document.querySelectorAll("[data-notice-option]");

    if (noticeButtons.length) {
      noticeButtons.forEach(function (button) {
        button.addEventListener("click", function () {
          const isPressed = button.getAttribute("aria-pressed") === "true";
          button.setAttribute("aria-pressed", String(!isPressed));
          updateNoticeFeedback(button);
        });
      });
    }

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
          showReflectionToolFeedback(
            reflectionToolsFeedback,
            "Add a reflection first, then you can copy it."
          );
          return;
        }

        copyWithFallback(reflectionInput, reflectionText)
          .then(function () {
            showReflectionToolFeedback(
              reflectionToolsFeedback,
              "Copied. You can paste it wherever you keep notes."
            );
          })
          .catch(function () {
            showReflectionToolFeedback(
              reflectionToolsFeedback,
              "Copy did not work this time. You can select the text and copy it manually."
            );
          });
      });
    }

    if (reflectionInput && emailReflectionButton) {
      emailReflectionButton.addEventListener("click", function () {
        const reflectionText = getReflectionText(reflectionInput);

        if (!reflectionText) {
          showReflectionToolFeedback(
            reflectionToolsFeedback,
            "Add a reflection first, then you can email it to yourself."
          );
          return;
        }

        const subjectText =
          emailReflectionButton.getAttribute("data-email-subject") ||
          "Week 1 reflection: Talking About Online Life";
        const headingText =
          emailReflectionButton.getAttribute("data-email-heading") || "Week 1 reflection";
        const subject = encodeURIComponent(subjectText);
        const body = encodeURIComponent(
          headingText + "\n\n" + reflectionText + "\n\nTalking About Online Life"
        );

        showReflectionToolFeedback(
          reflectionToolsFeedback,
          "Opening an email draft. Add your own address before sending."
        );
        window.location.href = "mailto:?subject=" + subject + "&body=" + body;
      });
    }
  });
})();
