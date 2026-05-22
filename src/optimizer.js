/**
 * SVG Optimizer - Core optimization logic
 */

class SVGOptimizer {
  /**
   * Initialize optimizer with configuration
   * @param {Object} config - Configuration object
   */
  constructor(config = {}) {
    this.config = {
      plugins: config.plugins || [],
      ...config
    };
  }

  /**
   * Optimize SVG content
   * @param {string} svgContent - SVG content to optimize
   * @returns {Promise<Object>} Optimized SVG data
   */
  async optimize(svgContent) {
    try {
      let optimized = svgContent;

      // Apply each plugin in sequence
      for (const plugin of this.config.plugins) {
        optimized = this.applyPlugin(plugin, optimized);
      }

      return {
        data: optimized,
        error: null
      };
    } catch (error) {
      return {
        data: null,
        error: error.message
      };
    }
  }

  /**
   * Apply a single plugin to SVG content
   * @param {Object|string} plugin - Plugin configuration
   * @param {string} content - SVG content
   * @returns {string} Processed content
   */
  applyPlugin(plugin, content) {
    const pluginName = typeof plugin === 'string' ? plugin : plugin.name;

    switch (pluginName) {
    case 'removeDoctype':
      return this.removeDoctype(content);
    case 'removeComments':
      return this.removeComments(content);
    case 'removeMetadata':
      return this.removeMetadata(content);
    case 'removeEmptyAttrs':
      return this.removeEmptyAttrs(content);
    case 'removeEmptyContainers':
      return this.removeEmptyContainers(content);
    case 'removeXMLProcInst':
      return this.removeXMLProcInst(content);
    default:
      return content;
    }
  }

  /**
   * Remove DOCTYPE declaration
   */
  removeDoctype(content) {
    return content.replace(/<!DOCTYPE[^>]*>/gi, '');
  }

  /**
   * Remove XML/HTML comments
   */
  removeComments(content) {
    return content.replace(/<!--[\s\S]*?-->/g, '');
  }

  /**
   * Remove metadata elements
   */
  removeMetadata(content) {
    return content.replace(/<metadata[^>]*>[\s\S]*?<\/metadata>/gi, '');
  }

  /**
   * Remove empty attributes
   */
  removeEmptyAttrs(content) {
    return content.replace(/\s+\w+=""/g, '');
  }

  /**
   * Remove empty containers (g, svg tags with no content)
   */
  removeEmptyContainers(content) {
    return content.replace(/<(g|svg)\s*[^>]*>\s*<\/(g|svg)>/gi, '');
  }

  /**
   * Remove XML processing instructions
   */
  removeXMLProcInst(content) {
    return content.replace(/<\?xml[^>]*\?>/g, '');
  }
}

module.exports = SVGOptimizer;
