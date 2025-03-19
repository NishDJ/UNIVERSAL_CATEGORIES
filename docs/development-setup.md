# Development Setup

This guide covers how to set up your local environment for contributing to the Universal Categories repository.

## Prerequisites

- Git
- Node.js (version specified in `.nvmrc`)
- npm (comes with Node.js)
- A text editor or IDE

## Initial Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/universal-categories.git
   cd universal-categories
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up pre-commit hooks**

   ```bash
   npx husky install
   ```

## Development Workflow

### Using Docker (Recommended)

We provide a Docker setup to ensure consistent development environments:

1. **Start the documentation server**

   ```bash
   docker-compose up docs
   ```

   The documentation will be available at http://localhost:3000

2. **Run validation**

   ```bash
   docker-compose up validator
   ```

### Without Docker

1. **Start the documentation server**

   ```bash
   npm run serve:docs
   ```

2. **Validate categories**

   ```bash
   npm run validate
   ```

3. **Fix markdown linting issues**

   ```bash
   npm run lint:fix
   ```

## Code Standards

We maintain code quality through:

- EditorConfig for consistent formatting
- markdownlint for Markdown style consistency
- Pre-commit hooks for automated checks
- Conventional commits for standardized commit messages

## Commit Guidelines

We use [Conventional Commits](https://www.conventionalcommits.org/) for clear and standardized commit messages:

```
feat: add new category for musical scales
fix: correct information in Elements category
docs: improve contribution guidelines
style: format markdown files
```

You can use our helper to create conventional commits:

```bash
npm run commit
```

## Building the Documentation

To build the documentation site:

```bash
npm run build:docs
```

The built site will be available in the `docs/dist` directory.

## Running Tests

To validate all categories for proper formatting and consistency:

```bash
npm run validate
```

## Troubleshooting

If you encounter any issues with the setup:

1. Make sure you're using the correct Node.js version (see `.nvmrc`)
2. Try removing `node_modules` and reinstalling dependencies
3. Check GitHub issues for similar problems
4. Create a new issue if your problem hasn't been addressed 