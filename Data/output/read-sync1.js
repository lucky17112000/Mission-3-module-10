const fs = require("fs");
const path = require("path");
console.log("start Reading....");
try {
  const data = fs.readFileSync(
    path.join(__dirname, "../entries/dairy.txt"),
    "utf-8"
  );
  console.log(data);
} catch (err) {
  console.error(err.message);
}

console.log("Finished.....");
