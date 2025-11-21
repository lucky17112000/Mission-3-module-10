✅ FS Module কী? (বাংলায় ব্যাখ্যা)

fs মানে হলো File System।
Node.js-এ ফাইল তৈরি করা, পড়া, আপডেট করা, ডিলিট করা—সবকিছুই fs module দিয়ে করা হয়।

যেমন Windows-এর File Explorer বা Linux-এর file commands দিয়ে আপনি ফাইল manage করেন—
Node.js-এ সেই একই কাজ code দিয়ে করা যায় fs module ব্যবহার করে।

🎯 FS Module কী কী কাজ করতে পারে?
✔ 1. ফাইল পড়া (read file)
✔ 2. ফাইল লেখা (write file)
✔ 3. ফাইল আপডেট করা (append file)
✔ 4. ফাইল ডিলিট করা (delete file)
✔ 5. ফোল্ডার তৈরি করা (create directory)
✔ 6. ফোল্ডার লিস্ট দেখা (read directory)
✔ 7. সিঙ্ক এবং অ্যাসিঙ্ক দুইভাবেই কাজ করতে পারে

\_\_dirname হলো একটি special variable

➡️ এটি আপনাকে current file যেই folder-এ আছে তার absolute path দেখায়।
path.join() automatic ভাবে OS অনুযায়ী সঠিক path বানায়।

```ts
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
```

এটা বোঝার জন্য তোমাকে Node.js-এর মূল architecture বুঝতে হবে —
বিশেষ করে Non-Blocking I/O এবং Event Loop।

এখন একদম সহজ বাংলায় ব্যাখ্যা করি কেন👇
"immediate block" → আগে প্রিন্ট হয়
fs.readFile() → পরে প্রিন্ট হয়

এখানে fs.readFile() — asynchronous, মানে:

Node.js file পড়ার কাজটা background thread pool এ পাঠিয়ে দেয়

এবং সাথে সাথেই পরের কোডে চলে যায়

📌 তাই console.log("immidiate block") → আগে execute হয়।

🔥 সহজ করে বললে:

তুমি Node.js কে বললে:

"ভাই, এই ফাইলটা পড়ে দাও… কিন্তু তুমি পড়ে শেষ না করা পর্যন্ত আমি বসে থাকবো না।
তুমি পড়ো… আমি meantime-এ অন্য কাজ করে ফেলি।
পড়া শেষ হলে আমাকে callback দিয়ে জানিও।"

এই কারণেই asynchronous call-এর নিচের লাইন আগে চলতে থাকে।
🧠 Node.js Execution Order:

Node.js-এর Event Loop এভাবে কাজ করে:

1️⃣ Synchronous code → লাইন বাই লাইন সাথে সাথে রান হয়
2️⃣ Asynchronous কাজগুলো → background-এ পাঠানো হয়
3️⃣ Background কাজ শেষ হলে callback → Event Loop-এর শেষ phase-এ execute হয়
