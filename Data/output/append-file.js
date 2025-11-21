const fs = require("fs");
const path = require("path");

// fs.writeFileSync(
//   path.join(__dirname, "../output/app.log"),
//   "Application Started\n"
// );

// console.log("file created");

const logEntry = `\n${new Date().toISOString()}  user logged in \n`;
fs.appendFileSync(path.join(__dirname, "../output/app.log"), logEntry);

const logEntry2 = `\n${new Date().toISOString()} data fatched`;
fs.appendFileSync(path.join(__dirname, "../output/app.log"), logEntry2);
console.log("Appned succesfully");
