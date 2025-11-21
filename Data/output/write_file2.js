const fs = require("fs");
const path = require("path");
const content1 = "This is a content \n node js is awesome";
const content2 = "This is a content \n node js is awesomeeeeee";
//syncronize
try {
  fs.writeFileSync(path.join(__dirname, "../output/test-sync.txt"), content1);
  console.log("File written sync");
} catch (err) {
  console.error(err.message);
}

//asynconize
fs.writeFile(
  path.join(__dirname, "../entries/test-async.txt"),
  content2,
  (error) => {
    if (error) {
      console.error(error.message);
    } else {
      console.log("Ok");
    }
  }
);
