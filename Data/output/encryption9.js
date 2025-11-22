const crypto = require("crypto");

const algorithm = "aes-256-cbc";
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

function encrypt(text) {
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(text, "utf-8", "hex");
  encrypted += cipher.final("hex");

  return { iv: iv.toString("hex"), encrypteddata: encrypted };
}

function decrypt(encrypteddata, ivHex) {
  const decipher = crypto.createDecipheriv(
    algorithm,
    key,
    Buffer.from(ivHex, "hex")
  );
  let devrypted = decipher.update(encrypteddata, "hex", "utf-8");
  devrypted += decipher.final("utf-8");
  return devrypted;
}
console.log("Encryption: ");
const sensitiveData = "My Credit card: 4242 4242 4242";
console.log("original data", sensitiveData);
const encrypted = encrypt(sensitiveData);
console.log(encrypted);

console.log("Decrypted Data: ");
const decrypted = decrypt(encrypted.encrypteddata, encrypted.iv);
console.log("Decrypted Data: ", decrypted);
