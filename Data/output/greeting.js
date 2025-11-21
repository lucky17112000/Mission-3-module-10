const args = process.argv;
const name = args[2] || "Guest";
const time = new Date().getHours();

console.log(time, name);
