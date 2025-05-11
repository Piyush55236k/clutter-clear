## 📁 File Organizer Script

This Node.js script reads all the files from a specified directory and organizes them into subfolders based on their file extensions. It automatically creates a folder for each unique file type and moves the corresponding files into it.

### 🚀 Features

* Automatically detects file extensions.
* Creates folders like `pdf`, `jpg`, `txt`, etc.
* Moves each file to its respective folder.
* Skips folders (only processes files).
* Uses modern ES module syntax (`import`/`export`).
* Asynchronous file operations for better performance.

---

### 📂 Folder Structure Example

Before running the script:

```
/Download
  file1.pdf
  file2.jpg
  file3.txt
```

After running:

```
/Download
  /pdf
    file1.pdf
  /jpg
    file2.jpg
  /txt
    file3.txt
```

---

### ⚙️ Prerequisites

* Node.js (v14 or above recommended)
* File system access

---

### 🛠️ How to Use

1. Clone or download the script.
2. Set your target directory in `dirpath`:

   ```js
   const dirpath = 'C:\\Users\\YourName\\Downloads\\Download';
   ```
3. Run the script:

   ```bash
   node main.js
   ```

---

### 📦 Dependencies

* Built-in Node.js modules:

  * `fs/promises`
  * `fs`
  * `path`

No third-party packages required.

---

### 🧠 Notes

* This script moves files permanently, so ensure you back up important files.
* If a file with the same name already exists in the destination folder, this script will overwrite it. Consider enhancing it to handle duplicates if needed.

