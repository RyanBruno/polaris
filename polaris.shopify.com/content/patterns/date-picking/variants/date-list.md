---
title: Date list
slug: date-list
hideFromNav: true
---

This enables merchants to select a date or a date range from a list of preset dates.

<div as="HowItHelps">

## How it helps merchants

![](/images/patterns/date-list-cover-image.png)

1. The date list provides merchants with suggested dates. This makes date picking simpler when useful dates are predictable and custom dates aren’t necessary.

<div as="DefinitionTable">

### Use when merchants need to:

**Select from templated dates**
: When a templated list of dates is sufficient for the merchant task, use the date list because it is a task that does not require in-depth filtering of historical information. Found in: Inbox app / Overview

</div>
</div>
<div as="Usage">

## Using this pattern

This pattern uses the [`Date picker`](/components/date-picker), [`Option list`](/components/option-list), and [`Text field`](/components/text-field) components.

```javascript {"previewContext":"____CODE____", "sandboxContext":"____CODE____"}
<Page divider>
  <AlphaStack gap="16">Coming Soon</AlphaStack>
</Page>
```

</div>
<div as="UsefulToKnow">

### Useful to know

|                                                                                                                                 |                                             |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| In the button preview, set a default date range that a merchant will most likely use.                                           | ![](/images/patterns/date-list-usage-1.png) |
| Single dates should be at the top of the list, followed by date ranges from smallest to largest ranges.                         | ![](/images/patterns/date-list-usage-2.png) |
| A date list can be modified to serve unique situations, like providing suggested search queries in the customer segment editor. | ![](/images/patterns/date-list-usage-3.png) |

</div>
