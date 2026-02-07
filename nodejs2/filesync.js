const fs = require("fs");
const path = require("path");

function syncDirectories(source, target) {
  fs.readdir(source, (err, files) => {
    if (err) return console.log("Error:", err.message);

    files.forEach(file => {
      const srcPath = path.join(source, file);
      const destPath = path.join(target, file);

      fs.stat(srcPath, (err, stats) => {
        if (err) return console.log("Error:", err.message);

        if (stats.isFile()) {
          fs.copyFile(srcPath, destPath, (err) => {
            if (err) console.log("Copy error:", err.message);
            else console.log(`Synced: ${file}`);
          });
        }
      });
    });
  });
}

syncDirectories("sourceFolder", "targetFolder");
