# Proposing New Categories

This guide explains the process for proposing new categories to add to the Universal Categories repository.

## Before You Begin

Before proposing a new category, please:

1. **Check existing categories** to ensure a similar category doesn't already exist
2. **Review the [category guidelines](categories-guidelines.md)** to understand what makes a good category
3. **Consider the category requirements** and whether your proposal meets them
4. **Gather reliable sources and references** to support your category

## Proposal Criteria

A good category proposal should:

1. **Represent a recognized classification system** within a domain
2. **Have clear boundaries** and be distinct from other categories
3. **Be useful** for organizing knowledge
4. **Be well-researched** with reliable sources
5. **Have sufficient content** to justify a dedicated category
6. **Follow the standard template** structure

## Proposal Process

### Option 1: Create an Issue (Recommended for New Contributors)

1. Go to the [repository's issue page](https://github.com/NishDJ/UNIVERSAL_CATEGORIES/issues)
2. Click "New issue"
3. Select the "New Category Proposal" template
4. Fill in all the requested information
5. Submit the issue

The template will ask you to provide:

- Category name
- Domain/field
- Brief description
- Sample items
- Key properties
- Related categories
- References/sources
- Justification for inclusion

### Option 2: Submit a Pull Request (For Experienced Contributors)

If you're already familiar with the repository and git workflow:

1. Fork the repository
2. Create a new branch (`git checkout -b category/your-category-name`)
3. Create a new category file using the [template](categories-template.md)
4. Fill in all required sections with comprehensive content
5. Submit a pull request with a detailed description of your new category

## Example Proposal

Here's an example of a good category proposal:

```markdown
# Category Proposal: Astronomical Objects

## Domain
Celestial / Astronomy

## Description
This category would provide a classification system for all known types of astronomical objects in the universe, from planets and stars to galaxies and quasars.

## Sample Items
- Stars (Main sequence stars, Giant stars, White dwarfs, Neutron stars, etc.)
- Planets (Terrestrial planets, Gas giants, Ice giants, Dwarf planets)
- Galaxies (Spiral, Elliptical, Irregular, etc.)
- Nebulae (Diffuse nebulae, Planetary nebulae, Supernova remnants)
- Black holes (Stellar, Intermediate-mass, Supermassive)

## Key Properties
- Mass range
- Composition
- Formation process
- Lifespan
- Observable characteristics

## Related Categories
- Celestial/Constellations
- Celestial/PlanetaryBodies

## References
1. International Astronomical Union classification system
2. NASA Astrophysics Data System
3. "Astronomy: A Physical Perspective" by Marc L. Kutner
4. Several peer-reviewed journal articles on astronomical classification

## Justification
This category would provide a comprehensive framework for understanding the various objects in the universe, their relationships, and how they fit into the larger cosmic structure. It represents an established classification system used by astronomers worldwide.
```

## Review Process

After submitting your proposal:

1. **Initial screening**: Maintainers will review for completeness and fit
2. **Community feedback**: Other contributors may comment or suggest improvements
3. **Revision**: You may be asked to refine your proposal based on feedback
4. **Decision**: The proposal will be accepted, rejected, or recommended for modification
5. **Implementation**: If accepted, you or another contributor will create the new category file

## Tips for Successful Proposals

- **Be specific** about the scope and boundaries of your category
- **Provide multiple references** from reliable sources
- **Explain the significance** of the category in the relevant domain
- **Highlight relationships** to existing categories
- **Be responsive** to feedback and questions
- **Consider implementation details** like where the category would fit in the repository structure

## After Acceptance

If your proposal is accepted:

1. Follow the detailed [contributing guide](contributing.md) to implement the category
2. Use the proper [template](categories-template.md) and formatting
3. Ensure comprehensive content for each section
4. Submit a pull request with your new category 