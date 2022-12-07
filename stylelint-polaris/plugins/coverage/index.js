const stylelint = require('stylelint');

const {isPlainObject, getMessageArgs} = require('../../utils');

const coverageRuleName = 'polaris/coverage';

/* The stylelint-polaris/coverage rule is configured by categorizing Stylelint rules in order to enable reporting of problems by coverage category
(e.g., Unexpected named color "blue" (color-named) Please use a Polaris color token Stylelint(stylelint-polaris/coverage/colors") */

/**
 * @typedef {import('stylelint').ConfigRules} StylelintRuleConfig
 */

/**
 * @typedef {object} CategorySettings
 * @property {import('stylelint').RuleMessage} [message] - Message appended to the warning if no custom message is set on a rule's secondary options
 * @property {import('stylelint').RuleMeta} [meta] - Category documentation URL hyperlinked to the reported rule in the VS Code diagnostic
 */

/**
 * @typedef {{
 *   [category: string]: StylelintRuleConfig | [
 *     StylelintRuleConfig, CategorySettings
 *   ]
 * }} CategorizedRules
 */

// Setting `line` to an invalid line number forces the warning to be reported
// and the `report({node})` option is used to display the location information:
// https://github.com/stylelint/stylelint/blob/57cbcd4eb0ee809006a1e3d2ccfe73af48744ad5/lib/utils/report.js#L49-L52
const forceReport = {line: -1};
const defaultMeta = {
  url: 'https://github.com/Shopify/polaris/tree/main/stylelint-polaris/plugins/coverage/README.md',
};

module.exports = stylelint.createPlugin(
  coverageRuleName,
  /**
   * @param {CategorizedRules} categorizedRules - Configured Stylelint rules grouped by Polaris coverage category
   */
  (categorizedRules, _, context) => {
    const isPrimaryOptionsValid = validatePrimaryOptions(categorizedRules);
    const coverageRules = [];

    for (const [category, categoryConfig] of Object.entries(categorizedRules)) {
      const [stylelintRules, categorySettings] =
        normalizeConfig(categoryConfig);
      for (const [stylelintRuleName, stylelintRuleConfig] of Object.entries(
        stylelintRules,
      )) {
        rules.push({
          ruleName: `polaris/${coverageRuleName}/${categoryName}`,
          stylelintRuleName,
          ruleSettings: stylelintRuleConfig,
          severity: stylelintRuleConfig?.[1]?.severity,
          fix: context.fix && !stylelintRuleConfig?.[1]?.disableFix,
          customMessage: stylelintRuleConfig?.[1]?.message,
          appendedMessage: categorySettings?.message,
          meta: categorySettings?.meta || defaultMeta,
        });
      }
    }

    return (root, result) => {
      const validOptions = stylelint.utils.validateOptions(
        result,
        coverageRuleName,
        {
          actual: isPrimaryOptionsValid,
        },
      );

      if (!validOptions) return;

      for (const rule of coverageRules) {
        const {
          ruleName,
          stylelintRuleName,
          ruleSettings,
          fix,
          meta,
          customMessage = '',
          appendedMessage = '',
          severity = result.stylelint.config?.defaultSeverity,
        } = rule;

        stylelint.utils.checkAgainstRule(
          {
            ruleName: stylelintRuleName,
            ruleSettings,
            fix,
            root,
            result,
          },
          (warning) => {
            const warningText = warning.text.replace(
              ` (${stylelintRuleName})`,
              '',
            );
            // We insert the meta for the rules on the stylelint result, because the rules are reported with dynamic rule names instead of each category being its own plugin. See Stylelint issue for context: https://github.com/stylelint/stylelint/issues/6513
            result.stylelint.ruleMetadata[ruleName] = meta;

            const defaultMessage = appendedMessage
              ? `${warningText} - ${appendedMessage}`
              : warningText;

            const messageArgs =
              typeof customMessage === 'function'
                ? getMessageArgs(stylelintRuleName, warning.node)
                : undefined;

            stylelint.utils.report({
              result,
              ruleName,
              meta,
              messageArgs,
              message: customMessage || defaultMessage,
              severity: severity || 'error',
              // If `warning.node` is NOT present, the warning is
              // referring to a misconfigured rule
              ...(warning.node ? {node: warning.node} : forceReport),
            });
          },
        );
      }
    };
  },
);

function normalizeConfig(config) {
  return Array.isArray(config) ? config : [config, {}];
}

function validatePrimaryOptions(primaryOptions) {
  if (!isPlainObject(primaryOptions)) return false;

  for (const categoryConfigRules of Object.values(primaryOptions)) {
    if (
      !(
        isPlainObject(categoryConfigRules) ||
        (Array.isArray(categoryConfigRules) &&
          categoryConfigRules.length === 2 &&
          categoryConfigRules.every(isPlainObject))
      )
    ) {
      return false;
    }
  }

  return true;
}
