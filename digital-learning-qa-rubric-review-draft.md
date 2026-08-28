# Digital Learning UI, Accessibility and Design QA Rubric

**Review draft:** v0.5  
**Date:** 26 August 2026  
**Initial application:** *Talking About Online Life*  
**Default quality bar:** Pilot ready  
**Status:** For review; the app has not yet been scored

## 1. Decision this rubric supports

This rubric is designed to answer a practical first question:

> Is this digital learning interface clear, accessible, coherent and usable enough for a limited pilot—and does it still support the intended learning and safety requirements?

The default target is **pilot ready**, not public release ready. A pilot-ready product may still contain non-blocking uncertainties and refinements, but it must pass every release gate, describe its limitations honestly and have a defined plan for learning from representative participants. Public release remains a higher subsequent threshold.

The current version deliberately places its main emphasis on **UI craft, accessibility, information architecture, interaction design, content design and technical experience**. Together, these account for 80% of the weighted score. Learning alignment, safety and evaluation remain protected by release gates and the remaining 20%.

This weighting reflects the current improvement goal. It does not imply that visual quality is more important than safeguarding or access: a product with a failed gate cannot be pilot ready, however polished it looks.

The rubric can be reused for interactive modules, apps, short courses, simulations and staff CPD. The evidence expected should be adapted to the format and risk of the product, while retaining the same core standard.

## 2. Context for the first application

*Talking About Online Life* is a phased primary-staff CPD experience. The overview and Weeks 1 and 2 are live; Weeks 3 and 4 are planned. Its central learning pattern is:

**Story → Notice → Guidance → Try → Reflect**

The intended experience is calm, human and non-alarmist. It aims to turn safeguarding guidance into small, repeatable professional actions without implying that curiosity replaces reporting procedures or professional judgement.

The first QA pass should assess only implemented content as complete. Planned weeks should be reviewed for coherence and dependency risk, but not scored as delivered learning.

## 3. How the rubric was iterated

### v0.1 — UX coverage pass

The first version focused on user research, information architecture, interaction design, accessibility, usability and visual consistency. It was strong as a product checklist but too weak on whether learning was aligned, practised and transferred into work.

### v0.2 — Digital-learning integration pass

The second version added observable outcomes, cognitive load, authentic practice, feedback, learner agency, reflection, transfer and evaluation. It still allowed a high average score to mask a serious accessibility, safeguarding or privacy failure.

### v0.3 — Evidence and release-decision pass

The current version adds non-negotiable release gates, weighted dimensions, evidence-confidence ratings and decision thresholds. It also separates engagement measures from comprehension, transfer and behaviour-change evidence.

### v0.4 — Reviewer-priority pass

The default decision has been set to pilot ready. Visual/UI craft is now a distinct, highly weighted dimension based on explicit design principles. The score-of-4 evidence rule now varies by dimension rather than requiring intended-learner testing for every kind of claim. A separate one-page assessor sheet is out of scope.

### v0.5 — UI, accessibility and design focus

The rubric now devotes 80 points to evidence-led design intent, information architecture, interaction design, accessibility, visual/UI craft, content design and technical experience. The three former broad design rows have been replaced by detailed, independently scorable subcriteria and concrete manual tests. This makes the rubric useful for identifying exactly what must change in an interface, not only whether a broad category feels strong or weak.

## 4. How to use it

1. Define the intended learners, their context, the product stage and the critical learning tasks.
2. Test the five release gates. A failed gate blocks release regardless of the weighted score.
3. Score each quality dimension from 0–4 and record evidence beside the judgement.
4. Calculate the weighted score: **dimension rating ÷ 4 × dimension weight**.
5. Assign an evidence-confidence rating of High, Medium or Low to each dimension.
6. Turn every score below 3 into a prioritised action, then re-test and re-score.

For the default pilot decision, the assessor must also define the pilot audience, duration, support and escalation route, evidence to collect, stopping conditions and post-pilot decision point. A pilot is a controlled learning activity, not a softer label for public release.

## 5. Non-negotiable release gates

A gate can pass for a pilot only when it has at least Medium-confidence evidence; an untested or Low-confidence gate is **not demonstrated**, not a pass. Public release requires High-confidence evidence for every gate.

| Gate | Pass requirement | Typical evidence | Automatic fail examples |
|---|---|---|---|
| **G1. Domain safety and content accuracy** | Content is current, traceable to authoritative sources and appropriate to the audience and risk. Safeguarding or reporting boundaries are explicit where relevant. | Source register; dates and owners; subject-matter or safeguarding review; version log. | Outdated statutory guidance; unsafe advice; missing reporting route; unverified statistics presented as fact. |
| **G2. Critical accessibility** | Every critical learning path can be perceived, understood and completed without a mouse or a single sensory cue. The product targets WCAG 2.2 AA and has been manually checked. | Keyboard, focus, screen-reader, zoom/reflow, contrast and mobile checks; issue log. | Keyboard trap; invisible focus; essential image-only content; unlabelled control; feedback unavailable to assistive technology. |
| **G3. Privacy and learner data** | Data collection is necessary, transparent and proportionate. Sensitive reflections and child-related data are not collected by default. | Data-flow map; analytics event list; privacy wording; retention and access decisions. | Hidden tracking; unnecessary personal data; reflection text transmitted without clear intent; individual staff surveillance. |
| **G4. Evidence honesty** | The product clearly distinguishes implemented features, contextual evidence, engagement data, learning evidence and impact. | Claims-to-evidence register; research limitations; product-status statement. | A prototype described as complete; contextual statistics described as impact; formal WCAG conformance claimed without an audit; synthetic feedback described as real user evidence. |
| **G5. Functional integrity** | Critical links, controls, feedback, progress and recovery paths work at supported sizes and input methods. | Critical-task test; device/browser matrix; console and link check; error and recovery test. | Broken primary CTA; misleading progress; lost work; unrecoverable error; unusable mobile layout. |

## 6. Scoring scale

| Rating | Meaning |
|---:|---|
| **0 — Harmful or absent** | The criterion is missing, contradicted or creates a material barrier or risk. |
| **1 — Weak** | Mostly assumption-led; serious gaps; little usable evidence. |
| **2 — Partial** | A reasonable design intent exists but is inconsistent, incomplete or weakly tested. |
| **3 — Strong** | Consistently implemented and supported by appropriate inspection or usability evidence. |
| **4 — Exemplary** | Demonstrably effective for intended and underserved learners, with direct evidence and iteration. |

Scores of 1 and 3 use the midpoint between the adjacent anchors below. A score of 4 requires the strongest evidence appropriate to that dimension. Direct intended-learner testing is mandatory where the judgement concerns learner behaviour, comprehension, motivation, usability, inclusion or impact; specialist review and technical verification are more appropriate for some accuracy, privacy, engineering and craft claims.

Use **N/A** only when a criterion genuinely cannot apply to the artifact—for example, timed media when the design contains none. Document the reason and redistribute that criterion's weight proportionally within the same dimension; never use N/A to hide an unimplemented or untested requirement.

## 7. Weighted quality rubric

### 7.1 Score distribution

| Dimension | Weight | Primary question |
|---|---:|---|
| **1. Evidence-led design intent and user context** | **5** | Is the interface solving a demonstrated user problem in its real context? |
| **2. Information architecture, navigation and flow** | **10** | Can users understand the structure, find the right route and know where they are? |
| **3. Interaction design and usability** | **12** | Do controls, feedback and task flows feel clear, efficient and recoverable? |
| **4. Accessibility and inclusive interaction** | **20** | Can people with varied sensory, motor and cognitive needs perceive, understand and operate every critical path? |
| **5. Visual/UI craft and design-system quality** | **18** | Does the visual system use established design principles to communicate purpose, hierarchy, action and tone? |
| **6. Content design and cognitive accessibility** | **8** | Is the language clear, scannable, consistent, respectful and easy to act on? |
| **7. Responsive, performance and technical experience** | **7** | Does the experience remain stable, fast and coherent across supported contexts? |
| **Design and accessibility subtotal** | **80** |  |
| **8. Learning alignment, practice and transfer** | **8** | Does the interface support an observable learning outcome and practical application? |
| **9. Safety, privacy and trust** | **6** | Is the experience accurate, transparent, proportionate and safe? |
| **10. Evaluation, evidence and iteration** | **6** | Are design, accessibility and learning decisions tested and improved using appropriate evidence? |
| **Total** | **100** |  |

Score every detailed criterion below from 0–4. Its contribution is **rating ÷ 4 × criterion weight**. The detailed criterion scores, not an impressionistic dimension average, produce the final total.

### 7.2 Dimension 1 — Evidence-led design intent and user context: 5 points

| Code | Criterion | Weight | What strong design demonstrates |
|---|---|---:|---|
| **D1.1** | User need and critical task | **2** | The interface is organised around what intended users need to understand or do, rather than around features, policy structure or stakeholder preference. |
| **D1.2** | Context and constraints | **1** | Device, time, confidence, literacy, environment and emotional context influence the design. |
| **D1.3** | Inclusive evidence | **1** | Research deliberately considers lower-confidence users and relevant access needs rather than designing only for the creator. |
| **D1.4** | Design rationale and scope honesty | **1** | Important UI decisions link to evidence or a named principle; implemented, planned and untested work are clearly distinguished. |

### 7.3 Dimension 2 — Information architecture, navigation and flow: 10 points

| Code | Criterion | Weight | What to inspect and test |
|---|---|---:|---|
| **IA2.1** | Entry points and information scent | **2** | Titles, links and calls to action accurately predict what follows; the preferred starting point is obvious without hiding valid alternatives. |
| **IA2.2** | Hierarchy and labels | **2** | Categories are logical, mutually understandable and expressed in familiar user language; heading levels communicate structure. |
| **IA2.3** | Navigation, orientation and progress | **2** | Navigation is shallow, consistently located and clearly shows current location, completed work and the next meaningful step. |
| **IA2.4** | Choice and cognitive load | **2** | Hick's Law and progressive disclosure are applied thoughtfully: the primary decision is obvious and secondary detail appears when useful, not before. |
| **IA2.5** | Alternate, error and return paths | **2** | Flows account for backtracking, interruption, invalid input, unfinished work and safe recovery; users are not trapped in one assumed happy path. |

Evidence should include a sitemap or content outline, happy/alternate/error flows, a first-click or navigation test, and observation of hesitation, backtracking or abandonment.

### 7.4 Dimension 3 — Interaction design and usability: 12 points

| Code | Criterion | Weight | What to inspect and test |
|---|---|---:|---|
| **IX3.1** | Affordances and signifiers | **2** | Interactive elements look actionable, use familiar conventions and communicate what will happen before activation. |
| **IX3.2** | Feedback and system status | **2** | Selection, progress, saving, success, error and loading states are immediate, specific and persistent long enough to understand. |
| **IX3.3** | Task efficiency and next action | **2** | Users can complete critical tasks with low decision cost; each state presents one clear next step without unnecessary repetition. |
| **IX3.4** | Forms, reflection and user control | **2** | Inputs have clear labels, sensible defaults and forgiving editing; copying, emailing, clearing or leaving notes produces an explicit result and never surprises the user. |
| **IX3.5** | Error prevention and recovery | **2** | Constraints prevent avoidable errors; messages identify the problem and recovery action; undo, retry or return routes preserve confidence and work. |
| **IX3.6** | Observed usability | **2** | Intended users can complete critical tasks, interpret feedback and explain what happens next without moderator rescue. Task success, errors and hesitation are recorded. |

### 7.5 Dimension 4 — Accessibility and inclusive interaction: 20 points

Automated tools support this review but cannot award a pass by themselves. Every critical path requires manual inspection.

| Code | Criterion | Weight | Pilot-ready acceptance evidence |
|---|---|---:|---|
| **A4.1** | Semantic structure and programmatic meaning | **3** | Page title and language are set; landmarks and heading hierarchy are logical; native controls are preferred; every custom control exposes an accurate name, role, state and value. |
| **A4.2** | Keyboard, focus order and focus management | **4** | Every action works by keyboard; focus order follows meaning; there are no traps; a skip route is available; focus is visible and not hidden; dialogs or dynamic changes place/return focus appropriately. |
| **A4.3** | Visual perception and contrast | **3** | Normal text reaches 4.5:1 contrast and large text 3:1; essential UI boundaries/states reach 3:1; meaning never depends only on colour, shape, position or sound; text remains usable at 200% and with user text-spacing overrides. |
| **A4.4** | Reflow, zoom and responsive access | **2** | At a viewport equivalent to 320 CSS pixels or 400% desktop zoom, information and functionality remain available without two-dimensional scrolling, except for genuinely necessary content. |
| **A4.5** | Controls, forms, errors and dynamic messages | **3** | Visible labels and instructions are programmatically associated; errors are identified and explained; status/feedback is announced without moving focus unnecessarily; targets meet WCAG 2.2's 24×24 CSS-pixel minimum or spacing exceptions, with larger touch targets preferred for primary actions. |
| **A4.6** | Images, diagrams and media | **1** | Meaningful media has equivalent text; decorative images are ignored by assistive technology; essential meaning is not locked inside images; captions/transcripts are provided when media requires them. |
| **A4.7** | Cognitive accessibility and predictability | **2** | Layout, controls, terminology and navigation are consistent; purpose and next step are explicit; familiar patterns, plain language, visible grouping and recognition reduce memory demand. |
| **A4.8** | Motion, timing and input flexibility | **2** | No essential task depends on hover, drag, precision, motion or a short timeout; animation can be reduced where appropriate; touch, pointer, keyboard and assistive-technology use produce equivalent outcomes. |

Minimum manual evidence: keyboard-only walkthrough; visible-focus review; screen-reader smoke test of headings, controls and dynamic feedback; contrast inspection; 200% text zoom; 400%/320-CSS-pixel reflow; text-spacing override; touch-target and mobile review.

### 7.6 Dimension 5 — Visual/UI craft and design-system quality: 18 points

This is not a personal “looks good” score. Each judgement must name the principle, the interface evidence and the user consequence.

| Code | Criterion | Weight | Design principles and evidence |
|---|---|---:|---|
| **V5.1** | Purpose, tone and aesthetic direction | **2** | The visual concept is distinctive and appropriate for the audience, subject and emotional aim. Decoration never competes with the task or trivialises the content. |
| **V5.2** | Visual hierarchy and emphasis | **3** | Scale, weight, position, contrast and whitespace establish a clear reading order. The primary action and most important information are identifiable within seconds. |
| **V5.3** | Composition, grid, alignment and spacing | **3** | Alignment creates order; proximity and common regions express relationships; balance, rhythm and whitespace control density; repeated spacing follows a coherent scale. |
| **V5.4** | Typography and readability | **2** | Typefaces, sizes, line height, line length, weight and emphasis create a readable hierarchy. Body text supports sustained reading and avoids decorative or all-cap styling that impairs comprehension. |
| **V5.5** | Colour, contrast and emotional communication | **2** | The palette is restrained, systematic and meaningful. Colour communicates brand and tone while preserving contrast and remaining understandable without colour. |
| **V5.6** | Components, affordances and complete states | **3** | Buttons, links, cards, choices and form controls are visually distinguishable and consistent. Default, hover, focus, selected, active, disabled, loading, success and error states are intentionally designed. |
| **V5.7** | Imagery and visual storytelling | **2** | Images carry relevant meaning, fit a coherent art direction and support the learner's perspective. Cropping, quality, captions and provenance are controlled; generic or alarmist imagery is avoided. |
| **V5.8** | Responsive and system coherence | **1** | Tokens, components and patterns create a recognisable family across pages and viewports while allowing purposeful variation. Hierarchy and character survive narrow screens and zoom. |

The assessor should explicitly use contrast, alignment, proximity, repetition, similarity, common region, continuity, balance, hierarchy, scale, rhythm and whitespace. Jakob's Law supports familiar conventions; novelty must earn its cognitive cost.

### 7.7 Dimension 6 — Content design and cognitive accessibility: 8 points

| Code | Criterion | Weight | What strong content demonstrates |
|---|---|---:|---|
| **C6.1** | Plain, concrete and actionable language | **2** | Sentences are concise; jargon is explained; headings and link text are descriptive; actions use specific verbs. |
| **C6.2** | Chunking and scannability | **2** | Each section has one clear job; front-loaded headings, lists and short paragraphs reveal the structure without turning everything into a card. |
| **C6.3** | Respectful and inclusive tone | **2** | Copy supports confidence without blame, fear, pressure or patronising language; users with lower confidence are respected. |
| **C6.4** | Consistency, guidance and source clarity | **2** | Terms, labels, names and instructional patterns remain consistent; authoritative guidance is distinguishable from prompts, examples and reflection. |

### 7.8 Dimension 7 — Responsive, performance and technical experience: 7 points

| Code | Criterion | Weight | Pilot-ready acceptance evidence |
|---|---|---:|---|
| **T7.1** | Cross-viewport and browser stability | **2** | Critical content, controls and hierarchy work from narrow mobile layouts through desktop in supported browsers without overlap, clipping or accidental horizontal scroll. |
| **T7.2** | Perceived and measured performance | **2** | Primary content appears promptly; images are appropriately sized; dimensions prevent layout shift; non-critical assets are deferred; interactions remain responsive. |
| **T7.3** | Resilience and progressive enhancement | **1** | Core content remains available when optional scripts, analytics or sharing features fail; errors degrade safely and do not destroy work. |
| **T7.4** | Implementation quality | **1** | Links, paths, controls and console output are clean; reusable components and tokens are implemented consistently; no duplicate or conflicting patterns undermine the design. |
| **T7.5** | Third-party and analytics behaviour | **1** | Analytics or external assets do not block, shift, expose or interfere with the learning experience; failures remain invisible to the learner where appropriate. |

### 7.9 Supporting dimensions: 20 points

| Dimension | Weight | 0 — Harmful or absent | 2 — Partial | 4 — Exemplary |
|---|---:|---|---|---|
| **8. Learning alignment, practice and transfer** | **8** | The interface is detached from an observable outcome or ends at passive exposure. | Outcomes and activities exist but alignment, feedback or real-world transfer is inconsistent. | Every interaction supports a clear outcome; feedback strengthens understanding; learners plan and later apply a realistic action. |
| **9. Safety, privacy and trust** | **6** | Guidance is unsafe/outdated, data use is hidden or claims are misleading. | Basic protection exists but sources, boundaries, analytics or reflection handling remain unclear. | Content is current and governed; safeguarding boundaries are explicit; data is minimised; analytics and reflection handling are transparent and proportionate. |
| **10. Evaluation, evidence and iteration** | **6** | No meaningful evaluation, or engagement is presented as impact. | Some usability or analytics evidence exists but design, accessibility and learning results are incomplete. | Expert review, inclusive usability, accessibility testing and learning evidence are distinguished; findings produce prioritised changes and re-testing. |

### 7.10 Scoring boundaries

Avoid scoring the same issue several times without explaining the different consequence:

- **Accessibility** scores whether a person can perceive, understand and operate the experience without disability-related barriers.
- **Visual/UI craft** scores the quality and intentionality of visual communication.
- **Information architecture** scores the underlying organisation, findability and route.
- **Interaction design** scores control behaviour, feedback, efficiency and recovery.
- **Content design** scores the clarity, structure and tone of the words.
- **Technical experience** scores implementation stability and performance.

A low-contrast primary button, for example, is an accessibility failure. If the palette also lacks hierarchy and systematic use, that separate design-system weakness may affect Visual/UI Craft—but the report must state both consequences rather than duplicate one generic observation.

## 8. Evidence rules

Every finding should be labelled as one of:

- **Observed:** directly verified in the product, code, analytics or a test.
- **Reported:** stated by a learner, stakeholder or source and attributed.
- **Inferred:** a reasoned interpretation that still needs validation.
- **Not tested:** insufficient access or evidence; never silently scored as a pass.

Evidence confidence:

- **High:** direct intended-learner evidence, assistive-technology testing, production data with a clear definition, or an authoritative review record.
- **Medium:** direct artifact inspection plus limited or proxy testing.
- **Low:** assumptions, self-report, synthetic review or incomplete access.

An overall result cannot be pilot ready or public release ready if a gate fails or remains untested. Synthetic personas and AI critique can identify hypotheses and obvious defects, but do not replace representative usability, accessibility or learning-impact research.

### Minimum UI and accessibility evidence pack for pilot readiness

- A screen and component inventory covering default, focus, selected, active, loading, success, error, disabled and empty states where relevant.
- The critical user-task list plus happy, alternate, interrupted and recovery routes.
- A design-principles review with annotated screenshots and user consequences, not taste-based comments.
- Keyboard, focus, screen-reader, contrast, text-resize, text-spacing, reflow/zoom, touch-target and mobile results for every critical path.
- Responsive evidence at narrow mobile, wider mobile/tablet and desktop sizes, plus 200% and 400% browser zoom.
- Small-sample intended-user usability evidence that deliberately includes varied digital confidence and, where feasible, relevant access needs.
- A prioritised issue log showing severity, affected users, evidence, recommendation, owner, deadline and validation method.

### Four-pass UI and accessibility audit

Use the passes in this order, carrying unresolved findings forward rather than treating each as a separate checklist:

1. **Structural and automated inspection:** inventory pages, components and states; inspect semantic structure, accessible names, contrast candidates, broken links and implementation consistency. Automated results identify likely defects but cannot award a pass.
2. **Manual critical-path testing:** complete every critical, alternate and recovery route using keyboard, screen reader, zoom/reflow, text-spacing overrides, touch and the supported viewport/browser matrix. Record the exact state, barrier and affected task.
3. **Principles-based design review:** annotate representative screens against hierarchy, contrast, alignment, proximity, grouping, rhythm, typography, affordance and system consistency. Explain the user consequence of each strength or defect; preference is not evidence.
4. **Inclusive usability validation:** observe intended users completing realistic tasks, deliberately including varied confidence and relevant access needs. Capture success, hesitation, errors, interpretation of hierarchy and feedback, recovery and post-task understanding; then prioritise, change and re-test.

### Evidence required for a score of 4

Intended-learner testing is mandatory for a 4 when the top rating asserts how learners understand, behave, feel or perform. It is not a blanket requirement for claims that are better verified by specialists or technical evidence.

| Dimension | Minimum evidence for 4 |
|---|---|
| **1. Design intent and context** | Direct research with intended and relevant underserved users plus traceable design rationale. |
| **2. Information architecture and flow** | Intended-user navigation/comprehension testing, including lower-confidence or access-needs participants where relevant. |
| **3. Interaction design and usability** | Intended users complete critical and recovery tasks; success, errors, hesitation and feedback comprehension are observed. |
| **4. Accessibility and inclusive interaction** | Complete manual critical-path testing, assistive-technology checks and relevant disabled/access-needs user evidence or an equivalent high-quality inclusive evaluation. Automated results alone are insufficient. |
| **5. Visual/UI craft and design system** | Expert principles-based audit, complete state and responsive review, and evidence that intended users correctly perceive hierarchy, grouping and affordances. Preference alone is insufficient. |
| **6. Content design and cognitive accessibility** | Specialist content review plus intended-user evidence that wording, labels, structure and instructions are understood without avoidable support. |
| **7. Responsive, performance and technical experience** | Verified browser/device/zoom matrix, clean functional QA and measured performance/stability evidence. |
| **8. Learning alignment, practice and transfer** | Subject-matter review plus learner evidence of comprehension and delayed or real-context application. |
| **9. Safety, privacy and trust** | Appropriate safeguarding/privacy/SME review and verified data/content records; learner trust evidence strengthens but does not replace specialist verification. |
| **10. Evaluation and iteration** | Real pilot or production evidence, documented prioritisation, implemented changes and re-testing. |

## 9. Decision bands

| Weighted score | Decision | Additional rule |
|---:|---|---|
| **90–100** | **Public release ready** | All gates pass; no dimension below 3; high-confidence evidence for learning, accessibility and safety. |
| **75–89** | **Pilot ready — default target** | All gates pass; A4.1–A4.5 score at least 3; no design/accessibility dimension is below 2; the audience and exposure are limited; high-priority issues have owners and dates; evidence collection and stopping conditions are defined. |
| **60–74** | **Revise before wider pilot** | Core concept may be viable, but learning or product gaps are material. |
| **Below 60** | **Not ready; redesign or re-scope** | Revisit the problem, outcomes and critical journey before polishing. |

Priority labels:

- **Blocker:** a release-gate failure.
- **High:** materially harms task success, learning, inclusion or trust.
- **Medium:** creates recurring friction or weakens evidence.
- **Low:** polish or optimisation after higher-risk issues.

## 10. First audit focus for *Talking About Online Life*

The first application should answer these product-specific questions:

1. **Immediate hierarchy:** Can staff identify the purpose, current week and primary action within a few seconds, without reading every paragraph?
2. **Visual direction:** Does the exercise-book concept feel distinctive, calm and adult-facing, or does any paper, sticky-note or childlike styling become decorative, busy or childish?
3. **Learning-pattern differentiation:** Are Story, Notice, Guidance, Try and Reflect visually and structurally distinct while still feeling like one repeated system?
4. **Composition and typography:** Do grid, spacing, grouping, line length, heading scale and whitespace support scanning and sustained reading across every page?
5. **Navigation and orientation:** Can users understand the four-week structure, identify what is live or planned, move between available weeks and know what happens next?
6. **Affordances and states:** Do selectable interpretations, buttons, links and reflection tools communicate default, hover, focus, selected, saved, copied, emailed, success and error states clearly?
7. **Keyboard and screen-reader use:** Can all interactions be completed in a logical order, with visible focus and accurate announcements for changed state and feedback?
8. **Contrast, zoom and reflow:** Does the paper-and-pencil palette remain readable at WCAG contrast thresholds, 200% text enlargement and a 320-CSS-pixel/400%-zoom view without lost content?
9. **Mobile and motor access:** Are controls comfortably spaced and usable one-handed; do sticky elements, margins and illustrations leave adequate room for content and focus?
10. **Content and cognitive access:** Are instructions, labels and safeguarding distinctions concise, predictable and respectful for staff with mixed confidence and language or literacy needs?
11. **Imagery:** Does every illustration support a learning moment, use consistent art direction and have correct alternative treatment and provenance?
12. **Technical experience:** Do images load without layout shift, optional analytics fail safely, links work and repeated components remain consistent across Weeks 1 and 2?
13. **Learning and safety guardrail:** Does the polished interface still support one observable behaviour per week, and are KCSIE/NSPCC guidance, reporting boundaries and evidence claims current and unambiguous?

### Time-sensitive source note

The homepage currently references KCSIE 2025. That is the correct in-force edition on 26 August 2026, but it applies only until 31 August 2026; KCSIE 2026 comes into force on 1 September 2026. This is not a current failure, but it is an imminent G1 release-gate update and should be owned before any September deployment.

## 11. Reusable QA agent concept

Yes—this rubric can become a reusable quality-assurance agent. The strongest implementation is an agent with a fixed evidence protocol, not merely a long prompt.

It should contain:

- **Instructions:** the five gates, scoring anchors, evidence labels, severity rules and no-overclaim policy.
- **Knowledge:** this rubric, a distilled Career Accelerator principles file, accessibility and digital-learning standards, organisation policies and current domain guidance.
- **Tools:** access to design files, web pages, documents, analytics and—where available—the implementation or local code for technical checks.
- **Workflow:** scope → inspect → test gates → score dimensions → record evidence/confidence → prioritise → recommend validation → re-audit.
- **Output contract:** executive decision, gate status, 10-dimension 100-point score with detailed design/accessibility subcriteria, confidence, evidence-backed findings, affected users, recommended fix and validation method.
- **Evaluation set:** known-good and deliberately flawed learning designs reviewed by a human expert, including seeded accessibility, learning-alignment, privacy and overclaim issues.

For local web products, a reusable Codex skill is likely to be more capable than a chat-only GPT because it can inspect implementation files and run checks. For organisation-wide repeatable workflows across Notion, Drive and other connected systems, a ChatGPT workspace agent is a strong fit where the workspace has access.

## 12. Sources used for this draft

### Career Accelerator and project sources

- [UX Career Accelerator](https://app.notion.com/p/29decb85e59280d1a405eb66c599ae4b)
- [Course 2: Designing for User Needs](https://app.notion.com/p/2ebecb85e59280ac9877e8d67dd651aa)
- [Module 3: Information architecture and user flows](https://app.notion.com/p/2f7ecb85e5928030915ce052b062f00d)
- [Module 5: Interaction Design and Accessibility](https://app.notion.com/p/309ecb85e592802d8698f1a8392861cf)
- [Module 6: Testing and presenting design solutions](https://app.notion.com/p/313ecb85e592806fba2bed6e1f88666f)
- [Module 3: User Research](https://app.notion.com/p/2b4ecb85e592809dbc38c0fe7b7ff1a6)
- [Portfolio Case Study Outline — Talking About Online Life](https://docs.google.com/document/d/18wRwgnWTNoeel_loVrW02JFKsXJzMOqEmY96W__ii-U/edit)
- [Career Accelerator usability-testing plan and metrics](https://docs.google.com/document/d/1uyvIOsXTCbfaALGZ_avIi8FCF0BcX5HGbbhgrvP27PQ/edit)
- [Portfolio Case Study Outline — AI Educator CPD](https://docs.google.com/document/d/1vv6xiKFQxVJZSSp5DeepgYKKdVpH_k9vb70TIQZDRXQ/edit)
- [Local copy style guide](./copy-style-guide.md)
- [Local image style guide](./image-style-guide.md)
- [Local homepage](./index.html), [Week 1](./week-1/index.html) and [Week 2](./week-2/index.html)
- [Local learning analytics implementation](./assets/js/learning-analytics.js)

### External standards and evidence

- [W3C Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/WCAG22/)
- [W3C: Designing for Web Accessibility](https://www.w3.org/WAI/tips/designing/)
- [W3C: Clear and Understandable Page Structure](https://www.w3.org/WAI/WCAG2/supplemental/patterns/o2p03-page-structure/)
- [W3C: Understanding WCAG 2.2 Target Size (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)
- [W3C: Understanding WCAG 2.2 Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow)
- [GOV.UK Government Design Principles](https://www.gov.uk/guidance/government-design-principles)
- [CAST Universal Design for Learning Guidelines 3.0](https://udlguidelines.cast.org/)
- [Education Endowment Foundation: Using Digital Technology to Improve Learning](https://educationendowmentfoundation.org.uk/education-evidence/guidance-reports/digital)
- [Education Endowment Foundation: Feedback](https://educationendowmentfoundation.org.uk/education-evidence/teaching-learning-toolkit/feedback)
- [Department for Education: Keeping children safe in education](https://www.gov.uk/government/publications/keeping-children-safe-in-education--2)
- [OpenAI: Building workspace agents in ChatGPT](https://developers.openai.com/cookbook/articles/chatgpt-agents-sales-meeting-prep)

## 13. Review decisions incorporated

1. **Pilot ready is the default bar.** Safety gates remain unchanged; medium-confidence evidence and non-blocking issues are acceptable only within a bounded, supported pilot with a validation plan.
2. **UI, accessibility and design now account for 80 points.** Accessibility is worth 20, Visual/UI Craft 18, Interaction Design 12, Information Architecture 10, Content Design 8, Technical Experience 7 and Evidence-led Design Intent 5. Each contains independently scorable criteria.
3. **The score-of-4 evidence rule is dimension-specific.** Intended-learner testing is mandatory when claiming learner comprehension, behaviour, emotion, usability, inclusion or impact. Specialist and technical evidence is used where it is more valid.
4. **There will be no separate one-page assessor sheet.** The full rubric remains the single source of truth.
