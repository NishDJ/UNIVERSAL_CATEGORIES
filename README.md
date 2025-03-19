# UNIVERSAL_CATEGORIES

> A comprehensive hierarchical taxonomy of universal categories across disciplines and domains.

[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-blue.svg)](https://github.com/NishDJ/UNIVERSAL_CATEGORIES)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/NishDJ/UNIVERSAL_CATEGORIES/graphs/commit-activity)
[![Markdown Validation](https://img.shields.io/badge/markdown-validated-brightgreen)](https://github.com/NishDJ/UNIVERSAL_CATEGORIES/actions/workflows/markdown-validation.yml)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](https://github.com/NishDJ/UNIVERSAL_CATEGORIES/blob/main/CONTRIBUTING.md)
[![Security Policy](https://img.shields.io/badge/security-policy-red.svg)](https://github.com/NishDJ/UNIVERSAL_CATEGORIES/blob/main/SECURITY.md)
[![Stale Issues](https://img.shields.io/badge/stale%20issues-managed-blueviolet)](https://github.com/NishDJ/UNIVERSAL_CATEGORIES/actions/workflows/stale.yml)
[![GitHub Discussions](https://img.shields.io/github/discussions/NishDJ/UNIVERSAL_CATEGORIES)](https://github.com/NishDJ/UNIVERSAL_CATEGORIES/discussions)
[![Changelog](https://img.shields.io/badge/changelog-available-blue)](https://github.com/NishDJ/UNIVERSAL_CATEGORIES/blob/main/CHANGELOG.md)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![Semantic Release](https://img.shields.io/badge/semantic--release-enabled-brightgreen?logo=semantic-release)](https://github.com/semantic-release/semantic-release)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![Docker](https://img.shields.io/badge/Docker-available-blue)](https://github.com/NishDJ/UNIVERSAL_CATEGORIES/blob/main/docker-compose.yml)
[![Documentation](https://img.shields.io/badge/docs-GitHub%20Pages-blue)](https://nishdj.github.io/UNIVERSAL_CATEGORIES)

## Table of Contents

- [UNIVERSAL\_CATEGORIES](#universal_categories)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Repository Structure](#repository-structure)
  - [Category Types](#category-types)
  - [Navigation](#navigation)
  - [Quick Start](#quick-start)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Support](#support)
  - [License](#license)
  - [Security](#security)
  - [Project Status](#project-status)
  - [Changelog](#changelog)
  - [Citation](#citation)

## Overview

The UNIVERSAL_CATEGORIES repository is a comprehensive collection of hierarchically organized categories spanning across multiple disciplines, domains, and knowledge areas. It serves as a taxonomic framework that can be used for classification, organization, research, and educational purposes.

This repository aims to create a universal categorization system that can be applied to various fields of study, providing a structured approach to organizing information and concepts.

## Repository Structure

The repository is organized as follows:

```
UNIVERSAL_CATEGORIES/
├── README.md (this file)
├── CHANGELOG.md
├── CONTRIBUTING.md
├── LICENSE
├── SECURITY.md
├── SUPPORT.md
├── CITATION.cff
├── .github/
│   ├── CODEOWNERS
│   ├── FUNDING.yml
│   ├── PULL_REQUEST_TEMPLATE.md
│   ├── DISCUSSION_TEMPLATE/
│   ├── ISSUE_TEMPLATE/
│   └── workflows/
├── docs/
│   ├── index.html
│   ├── _sidebar.md
│   └── ... (documentation files)
├── scripts/
│   ├── validate-categories.js
│   └── generate-toc.js
├── Categories/
│   ├── TEMPLATE.md
│   ├── Algorithms/
│   ├── Architecture/
│   └── ... (and many more categories)
```

Each category directory contains its own hierarchical structure with subdirectories and files that represent specific aspects, examples, or subcategories of the main category.

## Category Types

The repository includes a wide range of category types, such as:

- **Scientific Categories**: Biology, Chemistry, Physics, Astronomy, etc.
- **Arts & Humanities**: Art, Architecture, Music, Literature, Dance, etc.
- **Technology & Engineering**: Algorithms, Programming, Systems, Structures, etc.
- **Natural Phenomena**: Celestial, Weather, Geological formations, etc.
- **Human Activities**: Cuisine, Sports, Occupations, etc.
- **Abstract Concepts**: Logic, Mathematics, Philosophy, etc.
- **Physical Properties**: Colors, Binary_Magnitude, Bond_Energies, etc.

Each category is further subdivided into more specific classifications, creating a deep hierarchical structure that can be explored for various purposes.

## Navigation

To navigate through the repository:

1. Start by exploring the main `Categories` directory
2. Select a category that interests you
3. Dive deeper into subcategories to find more specific classifications
4. Each directory may contain README.md files with additional information about that specific category or subcategory

Important repository files:
- [CHANGELOG.md](CHANGELOG.md) - History of changes and improvements
- [CONTRIBUTING.md](CONTRIBUTING.md) - Guidelines for contributing to this project
- [LICENSE](LICENSE) - MIT License details
- [SECURITY.md](SECURITY.md) - Security policy and vulnerability reporting
- [SUPPORT.md](SUPPORT.md) - How to get help and support
- [CITATION.cff](CITATION.cff) - Citation file for academic references
- [Categories/TEMPLATE.md](Categories/TEMPLATE.md) - Template for creating new categories
- [.github/ISSUE_TEMPLATE](https://github.com/NishDJ/UNIVERSAL_CATEGORIES/tree/main/.github/ISSUE_TEMPLATE) - Templates for submitting issues
- [.github/PULL_REQUEST_TEMPLATE.md](https://github.com/NishDJ/UNIVERSAL_CATEGORIES/blob/main/.github/PULL_REQUEST_TEMPLATE.md) - Template for submitting pull requests
- [.github/DISCUSSION_TEMPLATE](https://github.com/NishDJ/UNIVERSAL_CATEGORIES/tree/main/.github/DISCUSSION_TEMPLATE) - Templates for starting discussions

The hierarchical structure allows for both broad and detailed exploration of the categorization system.

## Quick Start

To get started with this repository:

```bash
# Clone the repository
git clone https://github.com/NishDJ/UNIVERSAL_CATEGORIES.git
cd UNIVERSAL_CATEGORIES

# Using Docker (recommended)
docker-compose up docs
# Open http://localhost:3000 in your browser

# Without Docker
npm install
npm run serve:docs
```

## Usage

This universal categorization system can be used for:

- **Research**: As a framework for categorizing research findings
- **Education**: As a teaching tool for understanding how knowledge is organized
- **Data Organization**: For structuring datasets and information repositories
- **Content Classification**: For organizing articles, books, or other content
- **Knowledge Mapping**: For visualizing relationships between different domains of knowledge
- **Ontology Development**: As a foundation for developing more specialized ontologies

## Contributing

Contributions to expand and improve the Universal Categories framework are welcome! 

Please read our [CONTRIBUTING.md](CONTRIBUTING.md) file for detailed guidelines on how to contribute to this project. In general, the process involves:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/new-category`)
3. Add or modify categories
4. Commit your changes (`git commit -m 'feat: add new category example'`)
5. Push to the branch (`git push origin feature/new-category`)
6. Open a Pull Request using our [pull request template](.github/PULL_REQUEST_TEMPLATE.md)

To propose a new category, please use the [new category template](.github/ISSUE_TEMPLATE/new_category.md) when creating an issue.

For consistency, refer to our [category template](Categories/TEMPLATE.md) when creating new categories.

We follow [Conventional Commits](https://www.conventionalcommits.org/) for commit messages and use semantic versioning for releases.

## Support

For questions, problems, or assistance with this project, please see our [SUPPORT.md](SUPPORT.md) file for guidance on how to get help.

We offer several support channels:
- GitHub Issues for bug reports and feature requests
- GitHub Discussions for general questions and community conversations
- Direct contact for security concerns

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Security

For information about reporting security vulnerabilities in this project, please see our [Security Policy](SECURITY.md).

## Project Status

This project is actively maintained. We welcome contributions and are committed to improving the universal categorization system with community input.

## Changelog

See the [CHANGELOG.md](CHANGELOG.md) file for a detailed history of changes and improvements to this project.

## Citation

If you use this repository in your research or publications, please cite it using the information in our [CITATION.cff](CITATION.cff) file or with the following:

```
NishDJ. (2024). Universal Categories: A comprehensive hierarchical taxonomy
of universal categories across disciplines and domains. GitHub.
https://github.com/NishDJ/UNIVERSAL_CATEGORIES
```

---

*Last updated: March 19, 2024*
