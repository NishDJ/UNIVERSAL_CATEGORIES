#!/usr/bin/env node

/**
 * Category Validator
 * 
 * This script validates all category files in the repository
 * to ensure they follow the required template and formatting.
 */

const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const stat = promisify(fs.stat);

const CATEGORIES_DIR = path.join(__dirname, '../Categories');
const TEMPLATE_PATH = path.join(CATEGORIES_DIR, 'TEMPLATE.md');

let errorCount = 0;
let warningCount = 0;
let fileCount = 0;

/**
 * Get all markdown files in a directory and its subdirectories
 */
async function getMarkdownFiles(dir) {
  const items = await readdir(dir);
  const files = await Promise.all(
    items.map(async (item) => {
      const itemPath = path.join(dir, item);
      const stats = await stat(itemPath);
      
      if (stats.isDirectory()) {
        return getMarkdownFiles(itemPath);
      } else if (stats.isFile() && itemPath.endsWith('.md') && !itemPath.includes('TEMPLATE.md')) {
        return itemPath;
      } else {
        return [];
      }
    })
  );
  
  return files.flat();
}

/**
 * Validate a category file against the template
 */
async function validateCategoryFile(filePath) {
  fileCount++;
  const relativePath = path.relative(CATEGORIES_DIR, filePath);
  console.log(`Validating ${relativePath}...`);
  
  try {
    const content = await readFile(filePath, 'utf8');
    
    // Check for required sections
    const requiredSections = [
      '# ',
      '## Description',
      '## Items',
      '## Properties',
      '## Relationships',
      '## Examples',
      '## References',
    ];
    
    for (const section of requiredSections) {
      if (!content.includes(section)) {
        console.error(`❌ ERROR: Missing section '${section}' in ${relativePath}`);
        errorCount++;
      }
    }
    
    // Check for minimum content length
    if (content.length < 500) {
      console.warn(`⚠️ WARNING: ${relativePath} seems too short (${content.length} chars). Consider adding more content.`);
      warningCount++;
    }
    
    // Check if file has frontmatter
    if (!content.startsWith('---')) {
      console.warn(`⚠️ WARNING: ${relativePath} does not have frontmatter. Consider adding metadata.`);
      warningCount++;
    }
  } catch (error) {
    console.error(`❌ ERROR: Could not read ${relativePath}: ${error.message}`);
    errorCount++;
  }
}

/**
 * Main validation function
 */
async function main() {
  console.log('🔍 Validating category files...');
  
  try {
    const files = await getMarkdownFiles(CATEGORIES_DIR);
    await Promise.all(files.map(validateCategoryFile));
    
    console.log('\n--- Validation Summary ---');
    console.log(`Total files checked: ${fileCount}`);
    console.log(`Errors: ${errorCount}`);
    console.log(`Warnings: ${warningCount}`);
    
    if (errorCount > 0) {
      console.log('\n❌ Validation failed. Please fix the errors above.');
      process.exit(1);
    } else if (warningCount > 0) {
      console.log('\n✅ Validation passed with warnings. Consider addressing the warnings.');
      process.exit(0);
    } else {
      console.log('\n✅ All category files are valid!');
      process.exit(0);
    }
  } catch (error) {
    console.error(`❌ Validation failed: ${error.message}`);
    process.exit(1);
  }
}

main(); 