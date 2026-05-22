# API Documentation

## SVGO Class

### Constructor

```javascript
new SVGO(config);
```

#### Parameters

- `config` (Object): Configuration object
  - `plugins` (Array): Array of plugins to apply
  - Additional options can be passed here

#### Example

```javascript
const SVGO = require('svgo');

const svgo = new SVGO({
  plugins: [{ name: 'removeDoctype' }, { name: 'removeComments' }]
});
```

## Methods

### optimize(svgContent)

Optimizes SVG content.

#### Parameters

- `svgContent` (string): SVG content to optimize

#### Returns

- Promise that resolves to an object with:
  - `data` (string): Optimized SVG content
  - `error` (null|string): Error message if optimization failed

#### Example

```javascript
svgo.optimize('<svg>...</svg>').then(result => {
  if (result.error) {
    console.error('Optimization error:', result.error);
  } else {
    console.log('Optimized SVG:', result.data);
  }
});
```

## Plugin Configuration

### Plugin Object Structure

```javascript
{
  name: 'pluginName',        // Required: plugin identifier
  active: true,              // Optional: enable/disable plugin
  params: {                  // Optional: plugin-specific parameters
    option1: value1,
    option2: value2
  }
}
```

### Built-in Plugins

- `removeDoctype` - Remove DOCTYPE declaration
- `removeComments` - Remove XML/HTML comments
- `removeMetadata` - Remove metadata elements
- `removeXMLProcInst` - Remove XML processing instructions
- `removeEmptyAttrs` - Remove empty attributes
- `removeEmptyContainers` - Remove empty g/svg elements

## Error Handling

```javascript
svgo
  .optimize(content)
  .then(result => {
    if (result.error) {
      console.error('Error:', result.error);
      // Handle error
    } else {
      console.log('Success:', result.data);
      // Use optimized SVG
    }
  })
  .catch(err => {
    console.error('Unexpected error:', err);
  });
```

## Advanced Usage

### Custom Plugin Implementation

```javascript
const svgo = new SVGO({
  plugins: [
    {
      name: 'custom-plugin',
      params: {
        custom: 'value'
      }
    }
  ]
});
```

### Batch Processing

```javascript
const fs = require('fs');
const path = require('path');

async function optimizeBatch(folderPath) {
  const files = fs.readdirSync(folderPath).filter(f => f.endsWith('.svg'));

  for (const file of files) {
    const filePath = path.join(folderPath, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const result = await svgo.optimize(content);

    if (!result.error) {
      fs.writeFileSync(filePath, result.data);
      console.log(`Optimized: ${file}`);
    }
  }
}

optimizeBatch('./svg-folder');
```
