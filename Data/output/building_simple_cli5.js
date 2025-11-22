const fs = require("fs");
const path = require("path");
const sourceDir = path.join(__dirname, "messy-file");
const organizedDir = path.join(__dirname, "organized");
const categories = {
  images: [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".svg"],
  documents: [".pdf", ".doc", ".docx", ".txt", ".rtf"],
  videos: [".mp4", ".avi", ".mkv", ".mov", ".wmv"],
  audio: [".mp3", ".wav", ".flac", ".aac", ".ogg"],
  code: [".js", ".py", ".java", ".cpp", ".html", ".css"],
  archives: [".zip", ".rar", ".tar", ".gz", ".7z"],
  spreadsheets: [".xls", ".xlsx", ".csv"],
  others: [],
};

const testFiles = [
  "vacation.jpg",
  "report.pdf",
  "presentation.pptx",
  "music.mp3",
  "video.mp4",
  "script.js",
  "data.csv",
  "archive.zip",
  "photo.png",
  "notes.txt",
  "app.py",
  "movie.avi",
  "song.wav",
  "backup.tar.gz",
  "random.xyz",
  "nodejs.zip",
  "nodejs.zip",
];
function initializeDirectories() {
  if (!fs.existsSync(sourceDir)) {
    fs.mkdirSync(sourceDir, { recursive: true });
  }
  testFiles.forEach((file) => {
    fs.writeFileSync(
      path.join(sourceDir, file),
      `created File is ${path.basename(file, path.extname(file))}`
    );
  });

  if (!fs.existsSync(organizedDir)) {
    fs.mkdirSync(organizedDir, { recursive: true });
  }
  Object.keys(categories).forEach((cat) => {
    const catPath = path.join(organizedDir, cat);
    if (!fs.existsSync(catPath)) {
      fs.mkdirSync(catPath);
    }
  });
}

//lok up table for optimization

const extensionCatagory = {};
function makeLookUp() {
  for (const cataagory in categories) {
    categories[cataagory].forEach((ext) => {
      extensionCatagory[ext] = cataagory;
    });
  }
}
makeLookUp();

function organizedFile() {
  const files = fs.readdirSync(sourceDir);
  if (files.length == 0) {
    console.log("No file exist in this directory");
    return;
  }

  const stats = {
    total: 0,
    byCat: {},
  };

  files.forEach((file) => {
    // console.log(file);
    const merge = file; //under base file name like -->asd.jpeg, dfg.zip
    const sourcepath = path.join(sourceDir, file);
    const stat = fs.statSync(sourcepath);
    if (stat.isDirectory()) {
      return;
    }

    const cate = extensionCatagory[path.extname(file)] || "others"; //from lookup table second folder ->>audio , code , images , other and  accessing by  0(1) instead 0(N*C*E) that means 0(n^3)
    const destDir = path.join(organizedDir, cate, merge);
    // const destpath = path.join(destDir, merge);

    fs.copyFileSync(sourcepath, destDir);
    stats.total++;
  });
}

// function showHelp() {
//   console.log(`
//         file organizer - usage:

//         commands:
//         init - create files
//         organize - organize files into categories

//         example:
//         node file-organizer init
//         node file-organizer organize
//         `);
// }

initializeDirectories();
organizedFile();

// const command = process.argv[2];
// if (command === "init") {
//   initializeDirectories();
//   console.log("Messy File created Done");
// } else if (command == "organize") {
//   organizedFile();
// } else {
//   showHelp();
// }
