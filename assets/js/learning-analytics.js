(function () {
  "use strict";

  const weekId = document.body ? document.body.getAttribute("data-week-id") : "";

  if (!weekId) {
    return;
  }

  const sentEvents = new Set();
  const pageStartedAt = performance.now();
  let visibleTime = 0;
  let visibleSince = document.visibilityState === "visible" ? pageStartedAt : null;

  function sendEvent(eventName, params, uniqueKey) {
    const eventKey = uniqueKey || eventName;

    if (sentEvents.has(eventKey)) {
      return;
    }

    sentEvents.add(eventKey);

    if (typeof window.gtag !== "function") {
      return;
    }

    window.gtag(
      "event",
      eventName,
      Object.assign(
        {
          week_id: weekId,
        },
        params || {}
      )
    );
  }

  function getVisibleTime() {
    if (visibleSince === null) {
      return visibleTime;
    }

    return visibleTime + (performance.now() - visibleSince);
  }

  function updateVisibleTime() {
    const now = performance.now();

    if (document.visibilityState === "visible") {
      if (visibleSince === null) {
        visibleSince = now;
      }
      return;
    }

    if (visibleSince !== null) {
      visibleTime += now - visibleSince;
      visibleSince = null;
    }
  }

  function checkWeekStarted() {
    if (window.scrollY > 250) {
      sendEvent("week_started");
    }
  }

  function checkScrollDepth() {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress =
      scrollableHeight > 0 ? ((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight) * 100 : 100;

    [25, 50, 75, 90].forEach(function (milestone) {
      if (progress >= milestone) {
        sendEvent(
          "scroll_depth",
          {
            scroll_percent: milestone,
          },
          "scroll_depth_" + milestone
        );
      }
    });
  }

  function observeSections() {
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll("[data-section-id]").forEach(function (section) {
        const sectionId = section.getAttribute("data-section-id");

        sendEvent(
          "section_reached",
          {
            section_id: sectionId,
          },
          "section_reached_" + sectionId
        );

        if (sectionId === "reflection") {
          sendEvent("reflection_seen");
        }
      });
      return;
    }

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) {
            return;
          }

          const sectionId = entry.target.getAttribute("data-section-id");

          sendEvent(
            "section_reached",
            {
              section_id: sectionId,
            },
            "section_reached_" + sectionId
          );

          if (sectionId === "reflection") {
            sendEvent("reflection_seen");
          }

          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0,
      }
    );

    document.querySelectorAll("[data-section-id]").forEach(function (section) {
      observer.observe(section);
    });
  }

  function trackButtons() {
    document.addEventListener("click", function (event) {
      const button = event.target.closest("[data-button-id]");

      if (!button) {
        return;
      }

      const buttonId = button.getAttribute("data-button-id");

      sendEvent(
        "button_click",
        {
          button_id: buttonId,
        },
        "button_click_" + buttonId
      );
    });
  }

  function trackReflection() {
    const reflectionInput = document.querySelector(
      '#reflection, [data-reflection-input="true"]'
    );

    if (!reflectionInput) {
      return;
    }

    function checkCompletion() {
      if (
        reflectionInput.value.trim().length >= 80 &&
        getVisibleTime() >= 120000
      ) {
        sendEvent("reflection_completed", {
          content_type: "reflection",
          completion_rule: "80_chars_2_minutes",
        });
        sendEvent("week_completed", {
          completion_method: "reflection",
        });
      }
    }

    reflectionInput.addEventListener("input", function () {
      sendEvent("reflection_started");
      checkCompletion();
    });

    const completionTimer = window.setInterval(checkCompletion, 1000);

    window.addEventListener(
      "pagehide",
      function () {
        window.clearInterval(completionTimer);
      },
      { once: true }
    );
  }

  function handleScroll() {
    checkWeekStarted();
    checkScrollDepth();
  }

  document.addEventListener("visibilitychange", updateVisibleTime);
  window.addEventListener("scroll", handleScroll, { passive: true });
  window.addEventListener("resize", checkScrollDepth);

  observeSections();
  trackButtons();
  trackReflection();
  handleScroll();
})();
