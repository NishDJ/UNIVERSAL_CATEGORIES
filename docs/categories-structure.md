# Categories Structure

This page explains the structure of categories in the Universal Categories repository and how they are organized.

## Directory Structure

The repository's `Categories` directory contains subdirectories for different domains of knowledge:

```
Categories/
├── Algorithms/
├── Architecture/
├── Art/
├── Biology/
├── Celestial/
├── Colors/
├── Cuisine/
├── Dance/
├── Dimensions/
├── Economics/
├── Ecosystems/
├── Elements/
├── Emotions/
├── Energy/
├── Fashion/
├── Games/
├── Geology/
├── Geometry/
├── Greek_Alphabet/
├── Languages/
├── Linguistics/
├── Literature/
├── Logic/
├── Materials/
├── Mathematics/
├── Medical_Conditions/
├── Melody/
├── Metric/
├── Music/
├── Musical_Instruments/
├── Mythology/
├── Networks/
├── Olympic_Sports/
├── Particles/
├── Philosophy/
├── Political/
├── Programming_Languages/
├── Psychology/
├── Religion/
├── Scales/
├── Script/
├── Sports/
├── Taxonomy/
├── Technology/
├── Temporal/
├── TimePeriods/
├── Tones/
├── Transcendentals/
├── Transportation/
├── Weather/
├── Writing/
└── Zodiac/
```

Each domain directory contains one or more Markdown files that define specific categories within that domain.

## Category File Structure

Each category file follows a standard template with these sections:

1. **Title** - The name of the category
2. **Description** - A comprehensive description of what the category represents
3. **Items** - The core elements that make up the category
4. **Properties** - Key characteristics that define items in the category
5. **Relationships** - How this category relates to other categories or concepts
6. **Examples** - Real-world examples or applications of this category
7. **References** - Sources, citations, and further reading

For a detailed explanation of each section, see the [Category Template](categories-template.md) documentation.

## Naming Conventions

### Directory Names

- Use **PascalCase** for directory names (e.g., `MusicalInstruments`)
- For multi-word concepts, use underscores to separate words (e.g., `Greek_Alphabet`)
- Keep directory names plural when representing collections (e.g., `Elements` not `Element`)

### File Names

- Use **PascalCase** for file names (e.g., `StringInstruments.md`)
- File names should be specific and descriptive
- Use `.md` extension for all category files

## Cross-References

Categories can reference other categories to establish relationships:

```markdown
## Relationships

- **Subcategory of**: [Musical Instruments](../Musical_Instruments/Overview.md)
- **Related to**: [Classical Music](../Music/Classical.md)
```

This creates a network of interconnected categories that helps users navigate between related concepts.

## Adding New Categories

To add a new category:

1. Determine the appropriate domain directory (or create a new one)
2. Copy the `TEMPLATE.md` file to start with the correct structure
3. Fill in all required sections following the guidelines
4. Create any necessary cross-references to other categories
5. Submit your changes via a pull request

For more details, see the [Contributing Guide](contributing.md).

## Quality Standards

All categories should meet these standards:

- **Comprehensiveness**: Cover the core aspects of the category
- **Accuracy**: Contain factual and up-to-date information
- **Clarity**: Be clear and understandable to non-experts
- **Structure**: Follow the template structure
- **References**: Include reliable sources and citations
- **Formatting**: Use consistent Markdown formatting 