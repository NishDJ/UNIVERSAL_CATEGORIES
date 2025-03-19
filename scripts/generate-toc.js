#!/usr/bin/env node

/**
 * Table of Contents Generator
 * 
 * This script generates a markdown table of contents for the Categories directory
 * and outputs it to a file that can be included in the documentation.
 */

const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
const writeFile = promisify(fs.writeFile);
const stat = promisify(fs.stat);
const readFile = promisify(fs.readFile);

const CATEGORIES_DIR = path.join(__dirname, '../Categories');
const OUTPUT_PATH = path.join(__dirname, '../docs/categories-directory.md');

/**
 * Extract title from markdown file
 */
async function extractTitle(filePath) {
  try {
    const content = await readFile(filePath, 'utf8');
    const titleMatch = content.match(/^# (.+)$/m);
    if (titleMatch) {
      return titleMatch[1];
    }
    return path.basename(filePath, '.md');
  } catch (error) {
    console.error(`Could not extract title from ${filePath}: ${error.message}`);
    return path.basename(filePath, '.md');
  }
}

/**
 * Get directory contents sorted by type and name
 */
async function getDirectoryContents(dir) {
  const items = await readdir(dir);
  
  const statPromises = items.map(async (item) => {
    const itemPath = path.join(dir, item);
    const stats = await stat(itemPath);
    return { name: item, path: itemPath, isDirectory: stats.isDirectory() };
  });
  
  const itemsWithStats = await Promise.all(statPromises);
  
  // Sort: directories first, then files, both in alphabetical order
  return itemsWithStats.sort((a, b) => {
    if (a.isDirectory && !b.isDirectory) return -1;
    if (!a.isDirectory && b.isDirectory) return 1;
    return a.name.localeCompare(b.name);
  });
}

/**
 * Generate TOC for a directory
 */
async function generateTocForDirectory(dir, level = 0) {
  const items = await getDirectoryContents(dir);
  let toc = '';
  
  for (const item of items) {
    if (item.name === 'TEMPLATE.md' || item.name.startsWith('.')) {
      continue;
    }
    
    const indent = '  '.repeat(level);
    const relativePath = path.relative(CATEGORIES_DIR, item.path).replace(/\\/g, '/');
    
    if (item.isDirectory) {
      toc += `${indent}- [${item.name}](https://github.com/NishDJ/UNIVERSAL_CATEGORIES/tree/main/Categories/${relativePath})\n`;
      const subToc = await generateTocForDirectory(item.path, level + 1);
      toc += subToc;
    } else if (item.path.endsWith('.md')) {
      const title = await extractTitle(item.path);
      toc += `${indent}- [${title}](https://github.com/NishDJ/UNIVERSAL_CATEGORIES/blob/main/Categories/${relativePath})\n`;
    }
  }
  
  return toc;
}

/**
 * Main function
 */
async function main() {
  console.log('🔍 Generating table of contents...');
  
  try {
    let content = `# Categories Directory\n\nThis page lists all the categories in the repository, organized by domain.\n\n`;
    
    const toc = await generateTocForDirectory(CATEGORIES_DIR);
    content += toc;
    
    await writeFile(OUTPUT_PATH, content, 'utf8');
    
    console.log(`✅ Table of contents generated successfully at ${OUTPUT_PATH}`);
  } catch (error) {
    console.error(`❌ Failed to generate table of contents: ${error.message}`);
    process.exit(1);
  }
}

main(); 