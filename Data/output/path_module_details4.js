const path = require("path");

console.log("file name : ", __filename);
console.log("directory Name: ", __dirname);
console.log("-------------------------------------------------------");

const filePath = "/alamin/documents/nextLevel.pdf";
console.log("ANalyzing Path: ", filePath);
console.log("directory ", path.dirname(filePath));
console.log("Base Name: ", path.basename(filePath));
console.log("Extension : ", path.extname(filePath));
console.log("file Name: ", path.basename(filePath, path.extname(filePath)));

console.log("---------------------------------------------------");
const parsed = path.parse(filePath); // comboindly all things will give inside an object
console.log(path.posix.format(parsed)); //make main path
