/**
 * SVGO - SVG Optimizer
 * Main entry point for the library
 */

const Optimizer = require('./optimizer');

/**
 * Create and return a new SVGO instance
 * @param {Object} config - Configuration object
 * @returns {Object} SVGO instance with optimize method
 */
function SVGO(config = {}) {
  return new Optimizer(config);
}

module.exports = SVGO;
module.exports.default = SVGO;
