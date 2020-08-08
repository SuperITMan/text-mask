/**
 * Load karma config from Stark
 */
const helpers = require("./node_modules/@nationalbankbelgium/stark-testing/helpers");

/**
 * Load karma config from Stark
 */
const defaultKarmaConfig = require("./node_modules/@nationalbankbelgium/stark-testing/karma.conf.js").rawKarmaConfig;

const karmaTypescriptExclusions = [...defaultKarmaConfig.exclude, "src/assets/**"];

// start customizing the Karma configuration from stark-testing
const specificConfiguration = Object.assign({}, defaultKarmaConfig, {
  // list of files to exclude
  exclude: karmaTypescriptExclusions,
  files: [...defaultKarmaConfig.files, { pattern: helpers.root("test/*.ts") }]
});

// export the configuration function that karma expects and simply return the stark configuration
module.exports = {
  default: function(config) {
    return config.set(specificConfiguration);
  },
  karmaTypescriptExclusions: karmaTypescriptExclusions
};
