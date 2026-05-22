# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in SVGO, please email security@example.com instead of using the issue tracker. Please do not publicly disclose the vulnerability until it has been addressed.

Include the following information:

- Description of the vulnerability
- Steps to reproduce the issue
- Potential impact
- Suggested fix (if any)

## Security Guidelines

When using SVGO:

1. **Validate Input** - Always validate SVG content before processing
2. **Update Regularly** - Keep SVGO and dependencies up to date
3. **Review Dependencies** - Regularly check for known vulnerabilities

```bash
npm audit
```

## Supported Versions

| Version | Status | End of Life |
| ------- | ------ | ----------- |
| 1.x     | Active | TBD         |

## Security Measures

SVGO implements:

- Input validation for SVG content
- Regular dependency audits
- Automated security testing via CodeQL
- Security-focused code reviews

## Disclaimer

SVGO is provided "as-is" without any warranty. While we strive to maintain security, users should conduct their own security assessments and testing.
