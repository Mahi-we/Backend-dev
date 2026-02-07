const fs = require("fs");
const readline = require("readline");

let errorCount = 0;
let warningCount = 0;
let totalLines = 0;

const stream = fs.createReadStream("app.log");

const rl = readline.createInterface({
  input: stream,
  crlfDelay: Infinity
});

rl.on("line", (line) => {
  totalLines++;
  if (line.includes("ERROR")) errorCount++;
  if (line.includes("WARNING")) warningCount++;
});

rl.on("close", () => {
  console.log("Log Summary Report");
  console.log("------------------");
  console.log("Total Lines:", totalLines);
  console.log("Errors:", errorCount);
  console.log("Warnings:", warningCount);
});
