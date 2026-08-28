# Website Design & UX QA — Implementation Handoff Template

Create this handoff only after the user approves findings. Include only the approved scope. Do not introduce new findings during handoff.

# 1. Handoff summary

| Field | Detail |
|---|---|
| Product | [Name and URL/repository if supplied] |
| Journey or pages | [Scope] |
| Review date | [Date or Not provided] |
| Audience | [Primary users] |
| Quality bar | [Target] |
| Current readiness | [Decision] |
| Evidence reviewed | [Sources and tests] |
| Limitations | [Not tested or inaccessible areas] |
| Approved scope | [Priorities/findings included] |

# 2. Release-gate status

| Gate | Status: Pass / Fail / Not demonstrated | Required action | Evidence required to close |
|---|---|---|---|
| Critical-path accessibility |  |  |  |
| Functional integrity |  |  |  |
| Privacy, security and data handling |  |  |  |
| Material factual or legal risk |  |  |  |

Do not describe Not demonstrated as a product failure.

# 3. Strengths to preserve

List three to five qualities that implementation must not weaken.

1. **[Strength]:** [What must remain and why it matters.]
2. **[Strength]:** [What must remain and why it matters.]

# 4. Approved implementation items

Order items by Blocker, High, Medium and Low priority. Consolidate overlapping findings.

## [Item ID] — [Short action title]

- **Priority:**
- **Affected page/component/state:**
- **Evidence classification:** Observed / Source-observed / Inferred
- **Confidence:** High / Medium / Low
- **Affected users:**
- **Problem:**
- **User consequence:**
- **Required change:**
- **Strengths to preserve:**

### Acceptance criteria

- [Observable, testable result]
- [Expected alternate/error/responsive behaviour]
- [No regression to preserved quality]

### Validation

- **Accessibility:** [Keyboard, focus, semantics, contrast, reflow, assistive technology or N/A with reason]
- **Responsive:** [Widths, zoom and input methods]
- **Functional:** [Happy, alternate, error and recovery route]
- **Human validation:** [What requires representative users, specialist review or owner decision]
- **Evidence required to close:**

### Delivery

- **Dependencies:**
- **Unresolved decisions:**
- **Owner:** Not assigned
- **Status:** Not started

Repeat for each approved item.

# 5. Deferred findings

| Finding | Priority | Reason deferred | Revisit trigger |
|---|---:|---|---|
|  |  |  |  |

# 6. Re-test plan

Test changed and release-critical areas, not only the edited component.

| Test | Route/context | Expected result | Evidence to retain | Human validation? |
|---|---|---|---|---|
| Normal route |  |  |  |  |
| Alternate/error route |  |  |  |  |
| Mobile/responsive |  |  |  |  |
| Keyboard/focus |  |  |  |  |
| Assistive technology |  |  |  |  |
| Interruption/recovery |  |  |  |  |
| Performance/resilience |  |  |  |  |

# 7. Completion conditions

Implementation is complete only when:

- every approved item meets its acceptance criteria;
- affected and adjacent critical journeys have been re-tested;
- release-gate failures are closed or explicitly accepted by an authorised owner;
- Not demonstrated gates have the required evidence;
- preserved strengths remain intact;
- remaining risks and human-validation needs are reported honestly.

# 8. Codex implementation request

> Implement the approved [priorities] from this Website Design & UX QA handoff for [product]. Preserve the listed strengths, meet the acceptance criteria, test affected journeys and report completed work, remaining risks and evidence requiring human validation.

The handoff must remain usable without reopening the original review.

