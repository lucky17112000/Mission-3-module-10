const fs = require("fs");
const path = require("path");
console.log("start reading");

fs.readFile(
  path.join(__dirname, "../entries/dairy.txt"),
  "utf-8",
  (error, data) => {
    if (error) {
      console.error("Error happend", error.message);
    } else {
      console.log(data);
    }
  }
);

console.log("immidiate block");
