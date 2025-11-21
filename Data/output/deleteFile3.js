const fs = require("fs");
const path = require("path");

// syncronus

// fs.writeFileSync(
//   path.join(__dirname, "../output/tempFile.txt"),
//   "This is a temp file"
// );
// console.log("temp file created");

// const filePath = path.join(__dirname, "../output/tempFile.txt");

// try {
//   fs.unlinkSync(filePath);
//   console.log("Delete4 file");
// } catch (error) {
//   console.log(error.mesage);
// }

//asyncronus
const filepath2 = path.join(__dirname, "../output/temp2.txt");

fs.writeFile(filepath2, "Another Temp file", (err) => {
  if (err) {
    return console.log(err);
  }
  fs.unlink(filepath2, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("Delete successfull");
  });
});
