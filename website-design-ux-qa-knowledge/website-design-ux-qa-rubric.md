# Website Design & UX QA Rubric

**Version:** 1.0  
**Purpose:** Evidence-led review of any website or browser-based interactive experience  
**Scope:** Website UX, UI craft, accessibility, information architecture, responsive behaviour, efficiency, technical trust and satisfaction

## 1. Decision supported

Use this rubric to answer:

> How well does this website help its intended users complete important tasks through an accessible, usable, efficient and beautifully crafted experience—and what should improve next?

The weighted score describes experience quality. Release readiness is a separate decision governed by the release gates. A high score cannot cancel a failed gate.

Do not apply sector-specific criteria unless they are supplied in the review brief. This rubric does not assess instructional design, portfolio storytelling or subject-matter quality as default dimensions.

## 2. Scoring scale

| Score | Meaning | Evidence expectation |
|---:|---|---|
| **0 — Harmful or absent** | Missing, contradicted or creates a material barrier. | Direct observation or reliable source evidence. |
| **1 — Weak** | Serious gaps; inconsistent and mainly assumption-led. | Inspection reveals repeated or consequential weaknesses. |
| **2 — Partial** | Reasonable intent, but incomplete, inconsistent or weakly tested. | Some supporting evidence; important uncertainty remains. |
| **3 — Strong** | Consistently implemented and supported by appropriate inspection or testing. | Direct artifact inspection plus suitable validation. |
| **4 — Very strong** | Refined, coherent and demonstrably effective across relevant contexts. | Strong technical, expert or user evidence appropriate to the claim. |
| **5 — Exemplary** | Exceptional execution, inclusive validation and evidence-led iteration. | Multiple evidence types, including representative-user evidence where behaviour or perception is claimed. |

Mark a score **Provisional** when access or evidence is incomplete. Use **N/A** only when a criterion genuinely cannot apply, state why and redistribute its weight within the same dimension.

## 3. Weighted dimensions

| Dimension | Weight | Primary question |
|---|---:|---|
| Visual design and craft | 20 | Does the visual system communicate purpose, hierarchy, identity and action with precision? |
| Interaction and usability | 20 | Can users understand, complete and recover from critical tasks? |
| Accessibility | 20 | Can people with varied sensory, motor and cognitive needs perceive and operate critical paths? |
| Information architecture and content clarity | 15 | Can users find, understand and act on the right information? |
| Responsive experience | 10 | Does priority, usability and character survive across viewports and input methods? |
| Efficiency and technical trust | 10 | Is the experience fast, economical, reliable and confidence-building? |
| Satisfaction and confidence | 5 | Is the experience coherent, credible, comfortable and appropriate for its audience? |
| **Total** | **100** | |

Calculate each contribution as: **dimension score ÷ 5 × dimension weight**.

## 4. Detailed criteria

### 4.1 Visual design and craft — 20 points

| Code | Criterion | Weight | Strong evidence |
|---|---|---:|---|
| V1 | Purpose, tone and aesthetic direction | 3 | The visual concept is distinctive, appropriate and supports the intended response without competing with tasks. |
| V2 | Hierarchy and emphasis | 4 | Scale, weight, position, contrast and whitespace create an immediate reading order and clear primary action. |
| V3 | Grid, alignment, composition and spacing | 4 | Alignment creates order; proximity and grouping show relationships; rhythm and whitespace control density. |
| V4 | Typography and readability | 3 | Type, line length, line height, scale, weight and emphasis form a readable, responsive hierarchy. |
| V5 | Colour and contrast | 2 | A restrained, systematic palette supports meaning, brand and accessibility without relying on colour alone. |
| V6 | Components and states | 3 | Components form a coherent family with intentionally designed default, hover, focus, active, selected, disabled, loading, success and error states. |
| V7 | Imagery, iconography and motion | 1 | Visual assets have a coherent direction, add meaning and avoid distraction; motion communicates change and respects user preference. |

### 4.2 Interaction and usability — 20 points

| Code | Criterion | Weight | Strong evidence |
|---|---|---:|---|
| U1 | Critical-task clarity | 4 | Users can identify what the site offers, what they can do and the next meaningful action. |
| U2 | Affordances and predictability | 3 | Interactive elements look actionable, use familiar conventions and accurately signal outcomes. |
| U3 | Navigation and orientation | 3 | Users know where they are, can move to relevant destinations and can return without losing context. |
| U4 | Feedback and system status | 3 | Loading, selection, progress, saving, success and errors are timely, specific and perceivable. |
| U5 | Error prevention and recovery | 3 | Constraints prevent avoidable mistakes; messages explain the problem and recovery; work is preserved where possible. |
| U6 | User control and interruption | 2 | Users can cancel, undo, edit, leave, resume or change route without coercion or surprise. |
| U7 | Observed usability | 2 | Representative users complete critical and recovery tasks without moderator rescue; hesitation and errors are recorded. |

### 4.3 Accessibility — 20 points

Target **WCAG 2.2 AA** unless the review brief specifies a stricter standard. Automated checks support but cannot replace knowledgeable human evaluation.

| Code | Criterion | Weight | Strong evidence |
|---|---|---:|---|
| A1 | Structure and programmatic meaning | 3 | Titles, language, landmarks and headings are logical; controls expose accurate names, roles, states and values. |
| A2 | Keyboard and focus | 4 | Every action works without a mouse; order is logical; focus is visible and unobscured; there are no traps. |
| A3 | Contrast and visual perception | 3 | Text and UI contrast meet applicable thresholds; meaning does not rely on colour, position, shape or sound alone. |
| A4 | Zoom, text spacing and reflow | 2 | Content remains usable at 200% text enlargement and at 320 CSS pixels/400% zoom without avoidable two-dimensional scrolling. |
| A5 | Forms, errors and status messages | 3 | Labels and instructions are associated; errors are identified and explained; dynamic feedback is announced appropriately. |
| A6 | Images and media | 1 | Meaningful media has an equivalent; decorative images are ignored; captions or transcripts are supplied where needed. |
| A7 | Targets and input flexibility | 2 | Targets meet WCAG 2.2 requirements or exceptions; tasks do not depend solely on hover, dragging or precision. |
| A8 | Cognitive accessibility and predictability | 2 | Language, layout, help and controls are consistent; purpose and next steps are explicit; memory demands are limited. |

### 4.4 Information architecture and content clarity — 15 points

| Code | Criterion | Weight | Strong evidence |
|---|---|---:|---|
| I1 | Structure and grouping | 3 | Organisation reflects user goals; categories are understandable; related content is visibly grouped. |
| I2 | Labels and information scent | 3 | Navigation, headings, links and calls to action predict what follows in familiar language. |
| I3 | Findability and route choice | 3 | Primary routes are obvious without hiding valid alternatives; search/filtering is appropriate to content scale. |
| I4 | Scanning and readability | 3 | Front-loaded headings, useful summaries, concise paragraphs and lists reveal meaning at a glance. |
| I5 | Actionable and consistent content | 3 | Terms, instructions and calls to action remain specific, consistent, inclusive and easy to act on. |

### 4.5 Responsive experience — 10 points

| Code | Criterion | Weight | Strong evidence |
|---|---|---:|---|
| R1 | Content priority and reflow | 3 | Essential content and actions retain priority at narrow, wide and zoomed layouts. |
| R2 | Mobile navigation and task flow | 3 | Navigation and critical tasks remain understandable, reachable and recoverable on mobile. |
| R3 | Touch and input behaviour | 2 | Controls are comfortably spaced and do not depend on hover or fine precision. |
| R4 | Cross-viewport coherence | 2 | Hierarchy, components and visual identity remain coherent without clipping, overlap or accidental scrolling. |

### 4.6 Efficiency and technical trust — 10 points

| Code | Criterion | Weight | Strong evidence |
|---|---|---:|---|
| E1 | Steps and decision cost | 3 | Critical tasks avoid unnecessary steps, repeated entry and distracting choices. |
| E2 | Loading and responsiveness | 2 | Primary content appears promptly; layout remains stable; interactions respond without confusing delay. |
| E3 | Functional integrity | 2 | Links, forms, controls, states and dependencies work across supported contexts. |
| E4 | Resilience and recovery | 2 | Errors degrade safely; optional services do not block core tasks; user input is preserved where appropriate. |
| E5 | Transparency and trust | 1 | Security, privacy, costs, commitments and consequences are explained at the decision point. |

### 4.7 Satisfaction and confidence — 5 points

| Code | Criterion | Weight | Strong evidence |
|---|---|---:|---|
| S1 | Credibility and reassurance | 2 | Users can identify ownership, expertise, evidence, contact routes and what will happen next. |
| S2 | Coherence and comfort | 1 | The experience feels intentional, calm and free from avoidable friction or visual noise. |
| S3 | Audience and brand fit | 1 | Tone and execution match audience expectations while remaining distinctive. |
| S4 | Validated satisfaction | 1 | Representative users report confidence and satisfaction after realistic tasks; questions and method are recorded. |

Without user evidence, score S4 as Not tested and mark the dimension provisional.

## 5. Release gates

Assess gates separately from the score.

| Gate | Pass requirement | Fail examples | Not demonstrated examples |
|---|---|---|---|
| Critical-path accessibility | Critical tasks can be perceived and operated without a mouse or single sensory cue. | Keyboard trap, hidden focus, unlabelled control, inaccessible error. | No keyboard, zoom/reflow or assistive-technology evidence. |
| Functional integrity | Primary journeys, actions, links, states and recovery work. | Broken CTA, lost submission, unrecoverable error. | Only static screens reviewed; alternate states unavailable. |
| Privacy, security and data handling | Collection and consequences are necessary, transparent and proportionate. | Hidden tracking, insecure sensitive data, deceptive consent. | Data behaviour or third parties are unknown. |
| Material factual or legal risk | Claims and required notices are accurate for the site’s context. | Misleading material claim or missing legally required information. | Relevant specialist review has not occurred. |

## 6. Interpretation

| Weighted score | Experience judgement |
|---:|---|
| 90–100 | Exceptional and highly refined; release still depends on passing all gates. |
| 80–89 | Strong; targeted improvements or evidence gaps remain. |
| 70–79 | Promising but material weaknesses need iteration. |
| 60–69 | Significant usability, access or craft problems. |
| Below 60 | Reframe or redesign before further polish. |

Priorities:

- **Blocker:** prevents a critical task, creates material risk or blocks the release decision.
- **High:** materially harms task success, inclusion, trust or a primary business/user outcome.
- **Medium:** causes recurring friction, inconsistency or avoidable uncertainty.
- **Low:** polish or optimisation after more consequential work.

## 7. Scoring boundaries

Avoid scoring one observation repeatedly without naming distinct consequences.

- Accessibility: whether people can perceive, understand and operate the experience without disability-related barriers.
- Visual craft: quality and intentionality of visual communication.
- Interaction/usability: behaviour, feedback, task success and recovery.
- Information architecture/content: organisation, findability and clarity.
- Responsive experience: preservation of priority and usability across contexts.
- Efficiency/technical trust: economy, performance, resilience and reliability.
- Satisfaction/confidence: experienced credibility, comfort and fit.

A low-contrast primary button is primarily an accessibility failure. If the palette also lacks systematic hierarchy, that separate design-system weakness may affect visual craft—but the report must explain both consequences.

