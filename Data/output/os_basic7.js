const os = require("os");
console.log("Platform Detailes: ");
console.log("Platform : ", os.platform());
console.log("Architecture: ", os.arch());
console.log("Type: ", os.type());
console.log("Relase: ", os.release());
console.log("HostName: ", os.hostname());
console.log("Cpu Info :");
const cpus = os.cpus();
console.log("Cpu Model: ", cpus[0].model);
console.log("Nmbr of cores: ", cpus.length);
console.log("Speed: ", cpus[0].speed);

console.log("------------------------------------------------");

const totalMem = os.totalmem();
console.log("Total Memory: ", (totalMem / 1024 / 1024 / 1024).toFixed(2));
const freemem = os.freemem();
console.log("Free Memory: ", (freemem / 1024 / 1024 / 1024).toFixed(2));
console.log("----------------------------------------------------");
const uptime = os.uptime();
console.log("Up time: ", uptime);
