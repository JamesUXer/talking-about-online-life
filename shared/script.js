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

  function addMessage(container, message) {
    const paragraph = document.createElement("p");
    paragraph.textContent = message;
    container.appendChild(paragraph);
  }

  function updateNoticeFeedback(buttons, feedback) {
    const selected = Array.from(buttons).filter(
      (button) => button.getAttribute("aria-pressed") === "true"
    );
    const hasSupportive = selected.some(
      (button) => button.dataset.noticeOption === "supportive"
    );
    const hasGentle = selected.some((button) => button.dataset.noticeOption === "gentle");

    feedback.replaceChildren();

    if (!selected.length) {
      feedback.hidden = true;
      return;
    }

    if (hasSupportive) {
      addMessage(
        feedback,
        "Yes - this is the kind of small moment that can help adults understand pupils' online worlds."
      );
    }

    if (hasGentle) {
      addMessage(
        feedback,
        "This might close the conversation too quickly. The aim is not to approve or disapprove of the game, but to keep a safe, curious conversation open."
      );
    }

    feedback.hidden = false;
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-scroll-target]").forEach(function (button) {
      button.addEventListener("click", function () {
        scrollToTarget(button);
      });
    });

    const noticeButtons = document.querySelectorAll("[data-notice-option]");
    const noticeFeedback = document.querySelector("[data-notice-feedback]");

    if (noticeButtons.length && noticeFeedback) {
      noticeButtons.forEach(function (button) {
        button.addEventListener("click", function () {
          const isPressed = button.getAttribute("aria-pressed") === "true";
          button.setAttribute("aria-pressed", String(!isPressed));
          updateNoticeFeedback(noticeButtons, noticeFeedback);
        });
      });
    }

    const revealButton = document.querySelector("[data-reveal-starters]");
    const starterList = document.querySelector("[data-starter-list]");

    if (revealButton && starterList) {
      revealButton.addEventListener("click", function () {
        starterList.hidden = false;
        revealButton.setAttribute("aria-expanded", "true");
        revealButton.textContent = "Conversation starters revealed";
      });
    }

    const reflectionButton = document.querySelector("[data-reflection-button]");
    const reflectionFeedback = document.querySelector("[data-reflection-feedback]");

    if (reflectionButton && reflectionFeedback) {
      reflectionButton.addEventListener("click", function () {
        reflectionFeedback.hidden = false;
      });
    }
  });
})();
