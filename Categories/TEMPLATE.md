# Category Template

This file serves as a template for creating new categories in the UNIVERSAL_CATEGORIES repository. When proposing a new category, use this template as a guide to ensure consistency across the project.

## Category Structure

Each category should follow this general structure:

```
Category_Name/
├── README.md           # Overview and explanation of the category
├── subcategory_1/      # A major subdivision of the category
│   ├── README.md       # Details about this subcategory
│   ├── element_1.md    # Specific element in this subcategory
│   ├── element_2.md    # Another specific element
│   └── ...
├── subcategory_2/
│   ├── README.md
│   └── ...
└── REFERENCES.md       # (Optional) Citations and additional resources
```

## README.md Template

Each category and subcategory should have a README.md file with the following structure:

```markdown
# [Category/Subcategory Name]

## Overview

A brief description of this category/subcategory, explaining what it encompasses and its significance.

## Classification System

Explanation of how this category is organized and the principles behind its classification.

## Hierarchical Structure

Outline of the main divisions within this category:

- **[Division 1]**: Brief description
- **[Division 2]**: Brief description
- ...

## Relations to Other Categories

How this category relates to or intersects with other categories in the repository.

## Examples

A few representative examples that illustrate the scope of this category.

## Additional Notes

Any other relevant information about this category.
```

## Element File Template

Individual element files (.md) within subcategories should follow this structure:

```markdown
# [Element Name]

## Definition

A clear, concise definition of this element.

## Classification

Where this element fits within the category's classification system.

## Properties

Key characteristics or properties of this element:

- **[Property 1]**: Description
- **[Property 2]**: Description
- ...

## Examples

Real-world or conceptual examples of this element.

## Relations

How this element relates to other elements within or outside its category.

## References

Sources or additional reading about this element.
```

## Best Practices

When creating new categories:

1. Follow the established naming conventions (use underscores for spaces in directory names)
2. Be consistent with formatting and hierarchical structure
3. Provide thorough documentation within README.md files
4. Cross-reference related categories where appropriate
5. Validate all Markdown files before submission
6. Submit new categories through the appropriate PR process

---

For more detailed guidance, please refer to the [CONTRIBUTING.md](../CONTRIBUTING.md) file. 