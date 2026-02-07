const fs = require("fs");
const path = require("path");

const command = process.argv[2];
const fileName = process.argv[3];
const content = process.argv[4];

// READ FILE
if (command === "read") {
  fs.readFile(fileName, "utf8", (err, data) => {
    if (err) return console.log("Error:", err.message);
    console.log(data);
  });
}

// WRITE FILE
else if (command === "write") {
  fs.writeFile(fileName, content, "utf8", (err) => {
    if (err) return console.log("Error:", err.message);
    console.log("File written successfully");
  });
}

// COPY FILE
else if (command === "copy") {
  const dest = process.argv[4];
  fs.copyFile(fileName, dest, (err) => {
    if (err) return console.log("Error:", err.message);
    console.log("File copied successfully");
  });
}

// DELETE FILE
else if (command === "delete") {
  fs.unlink(fileName, (err) => {
    if (err) return console.log("Error:", err.message);
    console.log("File deleted successfully");
  });
}

// LIST DIRECTORY
else if (command === "list") {
  fs.readdir(fileName || ".", (err, files) => {
    if (err) return console.log("Error:", err.message);
    console.log("Directory contents:");
    files.forEach(file => console.log(file));
  });
}

else {
  console.log("Invalid command");
}
