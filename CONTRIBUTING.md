# Contributing to UNIVERSAL_CATEGORIES

First off, thank you for considering contributing to UNIVERSAL_CATEGORIES! It's people like you that make this repository a valuable resource for organizing knowledge.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
  - [Issues](#issues)
  - [Pull Requests](#pull-requests)
- [Project Structure](#project-structure)
- [Development Process](#development-process)
  - [Setting Up Your Environment](#setting-up-your-environment)
  - [Branching Strategy](#branching-strategy)
  - [Commit Guidelines](#commit-guidelines)
- [Adding New Categories](#adding-new-categories)
- [Naming Conventions](#naming-conventions)
- [Style Guidelines](#style-guidelines)
- [Documentation](#documentation)
- [Testing](#testing)
- [Review Process](#review-process)
- [Community](#community)

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

## Getting Started

### Issues

Before you begin working on a contribution:

1. **Search existing issues** to see if your problem/idea has already been addressed.
2. **Check the roadmap** (if available) to see if your idea aligns with our current direction.
3. **Create a new issue** if needed:
   - For bugs, use the bug report template and include detailed steps to reproduce.
   - For feature requests, use the feature request template and describe the value it would add.
   - For new categories, describe the category and explain its relevance.

### Pull Requests

1. **Fork the repository** to your GitHub account.
2. **Clone your fork** to your local machine.
3. **Create a branch** for your changes (see [Branching Strategy](#branching-strategy)).
4. **Make your changes** following our guidelines below.
5. **Push your branch** to your fork on GitHub.
6. **Open a pull request** against the main branch of the original repository.

## Project Structure

The project is organized as follows:

```
UNIVERSAL_CATEGORIES/
├── Categories/           # Main directory containing all categories
│   ├── Category1/        # Individual category directory
│   │   ├── Subcategory1/ # Subcategories (if applicable)
│   │   └── README.md     # Description of the category
│   └── Category2/
│       └── ...
├── .github/              # GitHub-specific files like templates
├── LICENSE               # Project license
├── README.md             # Project overview
└── CONTRIBUTING.md       # This file
```

## Development Process

### Setting Up Your Environment

1. Ensure you have Git installed.
2. Fork and clone the repository.
3. No special development tools are required beyond a text editor for most contributions.

### Branching Strategy

- **Main branch (`main`)**: Always contains the latest stable version of the repository.
- **Feature branches**: Create from `main` with the naming convention:
  - For new categories: `category/category-name`
  - For improvements: `improve/description`
  - For bug fixes: `fix/description`

Example: `category/quantum-mechanics` or `improve/readme-formatting`

### Commit Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- **feat**: A new feature or category
- **fix**: A bug fix
- **docs**: Documentation changes
- **style**: Formatting changes
- **refactor**: Code changes that neither fix a bug nor add a feature
- **chore**: Changes to the build process or auxiliary tools

Example commit messages:
- `feat(categories): Add quantum mechanics category`
- `docs(readme): Update navigation instructions`
- `fix(categories): Correct misspelling in biology category`

## Adding New Categories

When adding a new category:

1. Ensure it doesn't duplicate an existing category (check thoroughly).
2. Create a directory under `Categories/` with a clear, descriptive name.
3. Use underscores instead of spaces in directory names (e.g., `Quantum_Mechanics`).
4. Include a README.md that explains:
   - What the category encompasses
   - Why it's important or useful
   - Any relevant references or resources
5. If applicable, create appropriate subcategories.

## Naming Conventions

- **Directory Names**: Use `Snake_Case` with capitalized first letters.
- **File Names**: Use descriptive names that clearly indicate the content.
- **README Files**: Always name readme files as `README.md` (uppercase).

## Style Guidelines

For all text files (README.md, etc.):

- Use [GitHub Flavored Markdown](https://github.github.com/gfm/).
- Format headers using `#` syntax (not underlining).
- Use bulleted lists (`-` or `*`) for unordered items.
- Use numbered lists (`1.`, `2.`, etc.) for sequential or prioritized items.
- Include a blank line before and after lists and code blocks.
- Limit line length to approximately 100 characters for readability.
- Use code blocks with language specification for code or commands.

## Documentation

- Every category should have its own README.md file.
- Documentation should be clear, concise, and valuable to users.
- Include examples where appropriate.
- Update the main README.md when adding a significant new category.

## Testing

Before submitting a pull request:

- Check that all file links work correctly.
- Ensure all markdown is properly formatted.
- Verify that your changes align with our naming conventions and structure.
- Check for any typos or grammatical errors.

## Review Process

All submissions require review before being merged:

1. Automated checks will verify formatting and structure.
2. At least one maintainer will review your changes.
3. You may be asked to make revisions.
4. Once approved, your PR will be merged.

Reviews focus on:
- Relevance and accuracy of content
- Adherence to project structure and conventions
- Documentation quality
- Overall value addition to the repository

## Community

We encourage a collaborative and supportive community:

- Be respectful and constructive in comments.
- Help review other contributors' submissions.
- Share the repository with others who might find it valuable.
- Suggest improvements to the contribution process itself.

Thank you for contributing to UNIVERSAL_CATEGORIES!

