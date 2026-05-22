/**
 * Unit tests for optimizer
 */

const SVGOptimizer = require('../../src/optimizer');

describe('SVGOptimizer', () => {
  let optimizer;

  beforeEach(() => {
    optimizer = new SVGOptimizer({
      plugins: [{ name: 'removeDoctype' }, { name: 'removeComments' }]
    });
  });

  describe('removeDoctype', () => {
    it('should remove DOCTYPE declaration', () => {
      const input = '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"><svg></svg>';
      const result = optimizer.removeDoctype(input);
      expect(result).toBe('<svg></svg>');
    });
  });

  describe('removeComments', () => {
    it('should remove HTML comments', () => {
      const input = '<svg><!-- This is a comment --><circle/></svg>';
      const result = optimizer.removeComments(input);
      expect(result).toBe('<svg><circle/></svg>');
    });

    it('should remove multiline comments', () => {
      const input = `<svg>
        <!-- 
          This is a 
          multiline comment 
        -->
        <circle/>
      </svg>`;
      const result = optimizer.removeComments(input);
      expect(!result.includes('<!--'));
      expect(result.includes('<circle/>'));
    });
  });

  describe('removeMetadata', () => {
    it('should remove metadata elements', () => {
      const input = '<svg><metadata>Some metadata</metadata><circle/></svg>';
      const result = optimizer.removeMetadata(input);
      expect(result).toBe('<svg><circle/></svg>');
    });
  });

  describe('removeEmptyAttrs', () => {
    it('should remove empty attributes', () => {
      const input = '<svg class="" id=""><circle/></svg>';
      const result = optimizer.removeEmptyAttrs(input);
      expect(result).not.toContain('=""');
    });
  });

  describe('removeEmptyContainers', () => {
    it('should remove empty group elements', () => {
      const input = '<svg><g></g><circle/></svg>';
      const result = optimizer.removeEmptyContainers(input);
      expect(result).toBe('<svg><circle/></svg>');
    });
  });

  describe('optimize', () => {
    it('should optimize SVG content', async () => {
      const input = '<!DOCTYPE svg><svg><!-- comment --><circle/></svg>';
      const result = await optimizer.optimize(input);
      expect(result.error).toBeNull();
      expect(!result.data.includes('DOCTYPE'));
      expect(!result.data.includes('<!--'));
    });

    it('should handle errors gracefully', async () => {
      const optimizer2 = new SVGOptimizer();
      const result = await optimizer2.optimize(null);
      expect(result.error).toBeDefined();
    });
  });
});
