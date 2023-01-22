const { override } = require('customize-cra');

module.exports = override(
  (config) => {
    config.resolve.fallback = { "path": false };
    return config;
  }
);