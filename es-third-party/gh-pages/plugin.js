const ghPages = require('./lib/index');
const path = require('path');

module.exports = function(pluginConfig, config, callback) {
  ghPages.publish(path.join(process.cwd(), config.basePath), config, callback);
};
