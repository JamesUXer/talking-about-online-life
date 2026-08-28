# Website QA Evidence and Testing Guide

## 1. Purpose

This guide prevents an expert or AI review from overclaiming what has been established. Inspection identifies strengths, defects and hypotheses. It does not by itself demonstrate real-world usability, accessibility, efficiency or satisfaction.

## 2. Evidence classifications

- **Observed:** directly seen, exercised or measured in the product.
- **Source-observed:** confirmed in supplied code, documentation, analytics or research.
- **Inferred:** a reasoned interpretation supported by evidence but not directly tested.
- **Not tested:** required access or evidence is unavailable.

Never silently convert Not tested into Pass or Fail.

## 3. Confidence

| Confidence | Meaning |
|---|---|
| **High** | Direct technical measurement, appropriate specialist evaluation, representative-user evidence or reliable production data. |
| **Medium** | Direct artifact inspection plus limited, proxy or partial testing. |
| **Low** | Assumption, incomplete access, synthetic review or unverified report. |

Use separate confidence for each finding or dimension. A polished screenshot may support high confidence about visible alignment but low confidence about keyboard access, responsive behaviour or task success.

## 4. Evidence required by claim

| Claim | Minimum credible evidence |
|---|---|
| Visual hierarchy is clear | Principles-based inspection across representative pages and states; user comprehension strengthens the claim. |
| A task is usable | Representative users attempt a realistic task; record success, errors, hesitation, assistance and recovery. |
| A task is efficient | Task completion plus time, steps, repeated entry, detours or interaction cost; compare with an appropriate baseline where possible. |
| Users are satisfied | Post-task evidence from representative users using a stated method; expert judgement alone is provisional. |
| The site is accessible | WCAG-informed technical and manual evaluation across critical paths; automated results alone are insufficient. |
| The site is responsive | Direct checks at supported widths, zoom levels and input methods; screenshots of one viewport are insufficient. |
| Performance is good | Measured loading, responsiveness and layout stability in relevant conditions; visual inspection is insufficient. |
| A release gate passes | Direct evidence covering the complete critical path and relevant risk. Missing evidence means Not demonstrated. |

## 5. Recommended audit sequence

### Pass 1 — Scope and critical tasks

Define audience, context, purpose, supported devices, critical tasks and consequential states. Identify what is live, prototype-only or unavailable.

### Pass 2 — Structural and automated inspection

Inventory pages, templates, components and states. Inspect headings, landmarks, names, roles, labels, contrast candidates, links, document metadata and obvious implementation inconsistencies. Treat automated results as leads, not proof of conformance.

### Pass 3 — Manual critical-path review

Exercise happy, alternate, error, interrupted and recovery routes. Check navigation, feedback, forms, validation, persistence and third-party failures.

### Pass 4 — Accessibility evaluation

For every critical route, check:

- Keyboard-only operation, logical order, no traps and visible/unobscured focus.
- Page title, language, landmarks and heading hierarchy.
- Accessible names, roles, states and values for controls.
- Form labels, instructions, errors and status announcements.
- Text and non-text contrast against applicable WCAG 2.2 criteria.
- 200% text enlargement, text-spacing overrides and 320 CSS pixel/400% zoom reflow.
- Meaning without colour or a single sensory cue.
- Image alternatives, captions/transcripts where relevant.
- Target size, alternatives to dragging and input flexibility.
- Reduced motion, timing and interruption where relevant.
- A screen-reader smoke test covering structure, controls, errors and dynamic feedback.

Accessibility tools cannot determine conformance alone; knowledgeable human evaluation is required. Involving disabled users reveals accessibility and general usability problems, but one participant or disability group does not establish complete conformance.

### Pass 5 — Responsive and technical review

Test narrow mobile, wider mobile/tablet and desktop layouts, plus zoomed desktop. Check content priority, navigation, touch, focus, sticky elements, images, clipping, overlap, horizontal scroll, loading states, broken links and degraded third-party behaviour.

### Pass 6 — Principles-based craft review

Review representative pages and complete component states against hierarchy, contrast, alignment, proximity, grouping, repetition, spacing, typography, colour, imagery, motion and system coherence. Explain user consequences; preference is not evidence.

### Pass 7 — Representative-user validation

Recruit people matching the intended audience, including varied digital confidence and relevant access needs where feasible. Give realistic goals rather than step-by-step instructions. Observe without rescuing unless safety or ethics requires intervention.

Capture:

- task completion and critical errors;
- hesitation, backtracking and abandoned routes;
- interpretation of hierarchy, labels and feedback;
- recovery from errors or interruption;
- time or interaction cost where useful;
- post-task confidence and satisfaction;
- unexpected strategies and unmet needs.

### Pass 8 — Prioritise, change and re-test

Prioritise by consequence, frequency, reach, gate impact and design value. Fix the smallest coherent set, then re-test affected and adjacent journeys. Do not close a finding solely because code changed.

## 6. Suggested measures

### Effectiveness

- Unassisted completion: completed, partially completed or failed.
- Critical errors and recoveries.
- Correct destination, submission or outcome.
- Ability to explain what happened and what comes next.

### Efficiency

- Time on a well-defined task.
- Number of steps, detours or repeated entries.
- Hesitation and backtracking.
- Moderator assistance required.

### Satisfaction and confidence

- A short post-task ease question with the scale recorded.
- Confidence in the result and next step.
- Qualitative comments linked to the task just attempted.
- A broader standardised questionnaire only when the study design supports it.

Do not present small-sample percentages as population estimates. Report participant count, recruitment, task, context and limitations.

## 7. Evidence rules for high scores

- **Usability 4–5:** representative users complete critical and recovery tasks; outcomes, errors and assistance are recorded.
- **Efficiency 4–5:** task evidence includes time or interaction cost and an appropriate comparator or target.
- **Satisfaction 4–5:** representative-user post-task evidence exists; expert impressions are not enough.
- **Accessibility 4–5:** critical paths receive technical and manual WCAG-informed evaluation; the strongest score also needs appropriate inclusive-user evidence or equivalent specialist evaluation.
- **Visual craft 4–5:** expert principles-based review covers pages, states and viewports; hierarchy and affordances are corroborated by user evidence for the strongest claims.
- **Responsive 4–5:** a documented viewport, zoom and input-method matrix passes.
- **Technical trust 4–5:** functional, resilience and performance evidence covers supported contexts.

## 8. Reporting uncertainty

Use plain language:

- “Observed on the supplied desktop page; mobile behaviour was not tested.”
- “The hierarchy is likely to support scanning, but this has not been validated with intended users.”
- “No keyboard barrier was observed in the tested journey; this is not a full accessibility audit.”
- “Release readiness cannot yet be demonstrated because privacy behaviour was unavailable.”

## 9. Primary accessibility references

- [Web Content Accessibility Guidelines (WCAG) 2.2](https://www.w3.org/TR/WCAG22/)
- [W3C Evaluating Web Accessibility](https://www.w3.org/WAI/test-evaluate/)
- [W3C Easy Checks](https://www.w3.org/WAI/test-evaluate/preliminary/)
- [W3C Involving Users in Evaluating Web Accessibility](https://www.w3.org/WAI/test-evaluate/involving-users/)

