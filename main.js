import fs from 'fs/promises';
import * as fsn from 'fs'; // for existsSync and lstatSync
import path from 'path';

const dirpath = 'C:\\Users\\Admin\\Downloads';

console.log("Reading start");
const files = await fs.readdir(dirpath);

for (const item of files) {
  const itemPath = path.join(dirpath, item);

  // Skip if item is a folder
  if (fsn.lstatSync(itemPath).isDirectory()) continue;

  const parts = item.split(".");
  const extension = parts[parts.length - 1];

  const folderPath = path.join(dirpath, extension);

  // Create folder if it doesn't exist
  if (!fsn.existsSync(folderPath)) {
    await fs.mkdir(folderPath);
  }

  // Move file to new folder
  const newFilePath = path.join(folderPath, item);
  await fs.rename(itemPath, newFilePath);

  console.log(`${item} moved to ${folderPath}`);
}
console.log("Reading end");
