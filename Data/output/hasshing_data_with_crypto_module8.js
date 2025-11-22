const crypto = require("crypto");
// console.log(crypto);
console.log("MD% Hash");
const md5Hash = crypto.createHash("md5").update("Password123").digest("hex"); // not recommended

console.log("input: Password123", " ", " hashed Ouput : ", md5Hash);

const sha256 = crypto.createHash("sha256").update("Password123").digest("hex"); // 512 more better
console.log("input: Password123", " ", " hashed Ouput : ", sha256);
