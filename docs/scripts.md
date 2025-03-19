# Utility Scripts

This page documents the utility scripts available in the repository for development and maintenance tasks.

## Available Scripts

The Universal Categories repository includes several utility scripts to help with development, validation, and documentation tasks. These scripts are located in the `scripts/` directory.

### Category Validation Script

**File:** `scripts/validate-categories.js`

This script validates all category files in the repository to ensure they follow the required template and formatting.

**Usage:**

```bash
npm run validate
# or directly
node scripts/validate-categories.js
```

**Functionality:**

- Checks that all required sections are present (Description, Items, Properties, etc.)
- Verifies minimum content length
- Checks for the presence of frontmatter
- Reports errors and warnings for non-compliant files
- Provides a summary of validation results

**Example Output:**

```
🔍 Validating category files...
Validating Elements/PeriodicTable.md...
Validating Music/Scales.md...
⚠️ WARNING: Music/Scales.md seems too short (420 chars). Consider adding more content.
Validating Taxonomy/Kingdoms.md...
❌ ERROR: Missing section '## References' in Taxonomy/Kingdoms.md

--- Validation Summary ---
Total files checked: 3
Errors: 1
Warnings: 1

❌ Validation failed. Please fix the errors above.
```

### Table of Contents Generator

**File:** `scripts/generate-toc.js`

This script generates a markdown table of contents for the Categories directory, which is used in the documentation.

**Usage:**

```bash
npm run generate:toc
# or directly
node scripts/generate-toc.js
```

**Functionality:**

- Recursively scans the Categories directory
- Extracts titles from markdown files
- Generates a hierarchical table of contents
- Outputs the TOC to `docs/categories-directory.md`

**Example Output:**

```
🔍 Generating table of contents...
✅ Table of contents generated successfully at /path/to/docs/categories-directory.md
```

## Running Scripts with npm

For convenience, these scripts are configured as npm scripts in `package.json`, so you can run them using npm:

```bash
# Run category validation
npm run validate

# Generate the table of contents
npm run generate:toc

# Lint markdown files
npm run lint:md

# Fix markdown linting issues
npm run lint:fix

# Build documentation
npm run build:docs

# Serve documentation locally
npm run serve:docs

# Run pre-push checks
npm run prepush

# Use commitizen for conventional commits
npm run commit
```

## Adding New Scripts

If you need to add a new utility script:

1. Create the script in the `scripts/` directory
2. Make it executable (if necessary)
3. Add an entry to the `scripts` section in `package.json`
4. Document the script in this file
5. Include it in relevant workflows if appropriate

## Best Practices for Scripts

When creating or modifying scripts:

- Include clear comments and documentation
- Handle errors gracefully with informative messages
- Provide progress indicators for long-running operations
- Use consistent coding style
- Add logging for debugging purposes
- Make scripts cross-platform compatible when possible 