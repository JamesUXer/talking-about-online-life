# Website Design Principles Reference

Use this file to diagnose why an interface succeeds or fails. A named principle is not a finding by itself. Always connect:

**interface evidence → principle → user consequence → recommended change**

Do not use principles to disguise taste as objective truth.

## 1. Visual communication and craft

### Hierarchy

Use scale, weight, contrast, position and whitespace to create an intentional reading order. The primary purpose and action should not compete with secondary material.

Review questions:

- What attracts attention first, second and third?
- Does emphasis match importance?
- Can a user understand the page’s purpose without reading every word?

### Contrast

Contrast creates differentiation and emphasis through size, weight, colour, shape, density or space. Use it purposefully and maintain accessible colour contrast. Excessive contrast produces noise; insufficient contrast hides structure or state.

### Alignment and grid

Shared edges and baselines create order. A coherent grid makes relationships legible and helps components feel intentionally placed. Break alignment only when the exception has a clear communicative purpose.

### Proximity and common region

Items placed close together or inside a shared boundary are perceived as related. Use grouping to express structure before adding borders, labels or cards. Avoid card-heavy layouts where grouping could be communicated more simply.

### Repetition and consistency

Repeat type styles, spacing, shapes, controls and interaction patterns to create a learnable system. Consistency is not sameness: variation is useful when it signals a real difference.

### Whitespace, density and rhythm

Whitespace separates ideas, establishes emphasis and makes dense material approachable. A spacing scale creates rhythm. Too little produces overload; too much can fragment related information and increase scrolling.

### Balance and composition

Distribute visual weight deliberately. Symmetry can create stability; asymmetry can create energy and direction. Neither is inherently better. Judge whether the composition supports purpose, tone and scanning.

### Typography

Typography must provide readable body text and a distinguishable hierarchy. Review typeface fit, size, line height, line length, weight, casing, emphasis, wrapping and responsive behaviour. Avoid using size or colour alone to represent heading structure.

### Colour

Use a limited semantic palette. Define roles such as background, surface, text, muted text, primary action, focus, success, warning and error. Ensure meaning remains available without colour and that interaction states remain distinguishable.

### Imagery and iconography

Use images to add meaning, evidence, identity or emotional context. Maintain coherent art direction, cropping, quality and provenance. Icons need familiar meaning or visible labels; stylistic consistency cannot compensate for ambiguity.

### Motion

Motion should explain change, preserve spatial continuity or provide feedback. Avoid decorative motion that delays tasks, distracts from content or ignores reduced-motion preferences.

## 2. Interaction principles

### Visibility of system status

The interface should promptly communicate loading, selection, saving, progress, success and failure. Feedback must remain visible or announced long enough to understand.

### Match with user expectations

Use familiar language, concepts and sequences. Reflect the user’s task model rather than the organisation’s internal structure.

### User control and freedom

Support back, cancel, undo, edit, leave and recovery. Avoid trapping users in modal, linear or irreversible flows.

### Consistency and standards

Similar things should look and behave similarly. Follow established web conventions unless an alternative produces a clear benefit worth its learning cost.

### Error prevention

Prevent errors through constraints, sensible defaults, clear formats, previews and confirmation for consequential actions. When errors occur, identify the problem, location and recovery action in plain language.

### Recognition over recall

Keep choices, context and instructions visible when needed. Do not require users to remember information from another page or infer hidden commands.

### Flexibility and efficiency

Keep common tasks direct while supporting experienced users with useful shortcuts where appropriate. Do not make every user navigate complexity required only by edge cases.

### Minimalism and progressive disclosure

Present what is necessary for the current decision; reveal secondary detail at the point of need. Minimalism means purposeful information, not visual emptiness or missing guidance.

## 3. Useful UX laws

### Fitts’s Law

Targets are easier to acquire when they are large enough and positioned near the likely point of interaction. Prioritise comfortable targets and adequate separation, especially on touch screens.

### Hick’s Law

Decision time generally increases with the number and complexity of choices. Group, sequence or recommend options where this reduces genuine complexity; do not hide valid alternatives merely to create a cleaner screen.

### Jakob’s Law

People bring expectations formed on other websites. Familiar patterns reduce learning cost. Depart from conventions only when the benefit is clear and the new behaviour remains understandable.

### Cognitive load

Reduce avoidable mental work by chunking information, clarifying hierarchy, using consistent patterns, limiting competing actions and placing guidance at the point of need. Do not remove necessary context in the name of simplicity.

### Gestalt principles

- **Proximity:** nearby items appear related.
- **Similarity:** visually similar items appear to share function or category.
- **Common region:** shared boundaries imply a group.
- **Continuity:** aligned elements guide attention along a path.
- **Figure/ground:** users must distinguish content and controls from their background.
- **Closure:** people perceive complete forms from partial information; use cautiously where recognition must be unambiguous.

## 4. Responsive design principles

- Prioritise content rather than shrinking a desktop composition.
- Preserve task order, meaning and hierarchy across breakpoints.
- Avoid hiding essential actions behind unclear menus.
- Design for touch, keyboard, pointer, zoom and assistive technology.
- Let content determine breakpoints where possible.
- Prevent clipping, overlap, accidental horizontal scrolling and obscured focus.
- Reconsider line length, image crop, density, navigation and sticky elements at each meaningful width.

## 5. Trust and satisfaction

Trust is affected by clarity, consistency, accuracy, transparency, visible ownership, credible evidence, secure behaviour and predictable next steps. Visual polish can support credibility but cannot replace these qualities.

Satisfaction cannot be established by expert inspection alone. An expert may describe likely comfort, confidence or desirability, but should mark the judgement provisional until representative users respond after realistic tasks.

## 6. Finding format

Use this pattern:

> **Observed:** The primary and secondary buttons use identical weight and colour. **Principle:** hierarchy and contrast. **Consequence:** users must read both labels before identifying the intended next action, increasing decision effort. **Recommendation:** reserve the strongest treatment for the primary action and use a quieter but still accessible secondary style.

Avoid:

> The buttons do not pop enough.

