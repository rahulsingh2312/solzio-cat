const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Specify the directory to start from
const startDir = './'; // Change this to your desired directory

// Supported image extensions
const imageExtensions = ['.jpg'];

// Function to recursively find and convert images
function convertImages(dir) {
  fs.readdir(dir, (err, files) => {
    if (err) {
      console.error(`Error reading directory: ${dir}`, err);
      return;
    }

    files.forEach(file => {
      const filePath = path.join(dir, file);

      // Check if it's a directory
      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error(`Error reading file stats: ${filePath}`, err);
          return;
        }

        if (stats.isDirectory()) {
          // Recurse into the subdirectory
          convertImages(filePath);
        } else {
          // Check if it's an image file
          const ext = path.extname(file).toLowerCase();
          if (imageExtensions.includes(ext)) {
            const outputFilePath = path.join(dir, path.basename(file, ext) + '.webp');

            // Convert the image to WebP
            sharp(filePath)
              .webp()
              .toFile(outputFilePath)
              .then(() => {
                console.log(`Converted: ${filePath} -> ${outputFilePath}`);

                // If the original file was a .png, delete it
                if (ext === '.png') {
                  fs.unlink(filePath, (err) => {
                    if (err) {
                      console.error(`Error deleting file: ${filePath}`, err);
                    } else {
                      console.log(`Deleted: ${filePath}`);
                    }
                  });
                }
              })
              .catch(err => {
                console.error(`Error converting file: ${filePath}`, err);
              });
          }
        }
      });
    });
  });
}

// Start the conversion process
convertImages(startDir);
