---
title: Date range
slug: date-range
hideFromNav: true
---

This enables merchants to select a date range.

<div as="HowItHelps">

## How it helps merchants

![](/images/patterns/date-range-cover-image.png)

1. Providing multiple ways to select a date range gives merchants full flexibility. The list provides quick access to common options, the text input makes it easier to set large custom ranges, and the calendar is an intuitive way to set a more narrow scope.
2. Displaying two months makes it easier for merchants to select date ranges that span across both.
3. Selecting a date range may require multiple steps, so merchants prefer to explicitly confirm their selection, unlike the single date picker which closes on selection.

<div as="DefinitionTable">

### Use when merchants need to:

**Analyze trends and data**
: When a merchant needs to view their business metrics so that they can learn and make decisions, they use the date range picker to frame data to certain time periods. Found in: Analytics

**Schedule an event**
: When a merchant needs to schedule an event that spans multiple days, a date range picker is necessary.

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

|                                                                                                |                                              |
| ---------------------------------------------------------------------------------------------- | -------------------------------------------- |
| Pin any relevant, merchant-specific dates to the top of the option list.                       | ![](/images/patterns/date-range-usage-1.png) |
| If a date cannot be selected, indicate it with the [disabled text color token](/tokens/colors) | ![](/images/patterns/date-range-usage-2.png) |
| If a merchant enters a nonexistent date, revert to the previously selected date.               | ![](/images/patterns/date-range-usage-3.png) |

</div>
