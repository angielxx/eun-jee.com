import path from 'path';
const fs = require('fs');

const dir = path.join(process.cwd(), 'src/content/post');

export function getAllCategories() {
  const categories = [];
  const subcategories = {};

  function searchDir(dir, parent = '') {
    const files = fs.readdirSync(dir);

    files.forEach((file) => {
      const filePath = path.join(dir, file);
      const fileStats = fs.statSync(filePath);

      if (fileStats.isDirectory()) {
        if (parent) {
          subcategories[parent] = subcategories[parent]
            ? [...subcategories[parent], file]
            : [file];
        } else {
          categories.push(file);
        }
        searchDir(filePath, file);
      }
    });
  }
  searchDir(dir);
  return [categories, subcategories];
}
