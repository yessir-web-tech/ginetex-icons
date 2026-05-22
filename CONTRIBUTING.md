# Contributing to SVGO

First off, thank you for considering contributing to SVGO! It's people like you that make SVGO such a great tool.

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the issue list as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

* **Use a clear and descriptive title**
* **Describe the exact steps which reproduce the problem**
* **Provide specific examples to demonstrate the steps**
* **Describe the behavior you observed after following the steps**
* **Explain which behavior you expected to see instead and why**
* **Include screenshots and animated GIFs if possible**
* **Include your environment details** (OS, Node version, etc.)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

* **Use a clear and descriptive title**
* **Provide a step-by-step description of the suggested enhancement**
* **Provide specific examples to demonstrate the steps**
* **Describe the current behavior** and **the expected behavior**
* **Explain why this enhancement would be useful**

### Pull Requests

* Fill in the required template
* Follow the JavaScript styleguide
* Include appropriate test cases
* End all files with a newline
* Update documentation as needed

## Development Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/svgo.git
   cd svgo
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

### Code Quality

```bash
# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Format code with Prettier
npm run format
```

### Commit Guidelines

* Use present tense ("Add feature" not "Added feature")
* Use imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line

Example:
```
Fix bug in path optimization

Fixes #123. When converting path data, the algorithm was incorrectly
handling relative coordinates. This commit implements the correct
transformation logic.
```

## Styleguide

### JavaScript

* Use 2 spaces for indentation
* Use const and let (no var)
* Use arrow functions where appropriate
* Use template literals for string concatenation
* Add comments for complex logic
* Maximum line length is 100 characters

### Documentation

* Use Markdown
* Include code examples
* Keep paragraphs short and clear
* Use proper heading hierarchy

## Testing

* Write tests for all new features
* Update tests when functionality changes
* Maintain or improve code coverage
* Use descriptive test names

### Test File Naming

* Test files should be named `[name].test.js`
* Place test files in the `test/` directory mirroring the source structure

### Test Example

```javascript
describe('Plugin: removeComments', () => {
  it('should remove XML comments', () => {
    const input = '<svg><!-- comment --></svg>';
    const expected = '<svg></svg>';
    const result = plugin(input);
    expect(result).toBe(expected);
  });
});
```

## Additional Notes

### Issue and Pull Request Labels

* `bug` - Something isn't working
* `enhancement` - New feature or request
* `documentation` - Improvements or additions to documentation
* `good first issue` - Good for newcomers
* `help wanted` - Extra attention is needed
* `question` - Further information is requested
* `wontfix` - This will not be worked on

## Getting Help

* Read the [documentation](docs/)
* Check existing [issues and discussions](https://github.com/yourusername/svgo)
* Ask in GitHub Discussions

## Recognition

Contributors will be recognized in:
* The README.md file
* Release notes
* GitHub contributors page

Thank you for contributing! 🎉
