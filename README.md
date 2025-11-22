## <span style="color:red">Fs module:</span>

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

## <span style="color:red">Path module:</span>

path module in Node.js — বিস্তারিত ব্যাখ্যা (বাংলায়)

Node.js এর path module হলো একধরনের utility tool, যা ফাইল পাথ (file path) নিয়ে কাজ করতে সাহায্য করে। অর্থাৎ, বিভিন্ন অপারেটিং সিস্টেমে ফাইল বা ফোল্ডারের ঠিকানা (path) কে সহজে এবং সঠিকভাবে হ্যান্ডেল করতে path মডিউল ব্যবহৃত হয়।

কেন path মডিউল ব্যবহার করা হয়?

পাথ join করা: ফোল্ডার এবং ফাইলের নামগুলো একত্রে জোড়া লাগানো (join) করতে

পাথ normalize করা: ভুল বা অপ্রয়োজনীয় slash দূর করে সঠিক ফরম্যাটে আনা

অ্যাবসলিউট পাথ (Absolute path) বের করা: রিলেটিভ পাথ থেকে পূর্ণ path তৈরি করা

ফাইল এক্সটেনশন বা নাম বের করা: যেমন .txt, .js ইত্যাদি

ওএস নির্ভর ফরম্যাটিং: Windows (যেখানে \ হয়) আর Unix/Linux/Mac (যেখানে / হয়) এর পার্থক্য মাথায় রেখে path তৈরি করা
| ফাংশন | কাজ | উদাহরণ |
| -------------------------- | -------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `path.join([...paths])` | অনেক path অংশকে একসাথে যোগ করে, ঠিকঠাক ফাইল পাথ বানায় | `path.join('folder', 'file.txt')` → `'folder/file.txt'` (Linux) |
| `path.resolve([...paths])` | একাধিক পাথকে অ্যাবসলিউট পাথে রূপান্তর করে | `path.resolve('folder', 'file.txt')` → `'/Users/me/project/folder/file.txt'` |
| `path.basename(path)` | পাথ থেকে ফাইলের নাম বের করে | `path.basename('/foo/bar/baz.txt')` → `'baz.txt'` |
| `path.dirname(path)` | পাথ থেকে ফাইল ছাড়া ডিরেক্টরির অংশ বের করে | `path.dirname('/foo/bar/baz.txt')` → `'/foo/bar'` |
| `path.extname(path)` | ফাইলের এক্সটেনশন (যেমন `.js`, `.txt`) বের করে | `path.extname('index.html')` → `'.html'` |
| `path.normalize(path)` | path কে normalize করে (অপ্রয়োজনীয় `../` বা `./` ঠিক করে) | `path.normalize('/foo/bar//baz/asdf/quux/..')` → `/foo/bar/baz/asdf` |

## <span style="color:red">os module:</span>

OS module হলো Node.js এর একটা built-in মডিউল যা Operating System (OS) সম্পর্কে বিভিন্ন তথ্য (information) জানতে এবং OS-এর বিভিন্ন কাজ করতে দেয়। অর্থাৎ, OS module ব্যবহার করে আপনি আপনার কম্পিউটারের OS সম্পর্কিত data যেমন memory, CPU info, network interface, user info ইত্যাদি পেতে পারেন।

সহজ বাংলায়:

os module হলো Node.js এর একটা টুলকিট যা আপনাকে আপনার কম্পিউটারের অপারেটিং সিস্টেমের বিভিন্ন তথ্য জানতে এবং কাজে লাগাতে সাহায্য করে।
| ফাংশন/প্রপার্টি | কাজ/ব্যাখ্যা |
| --------------- | --------------------------------------------------------- |
| `os.platform()` | OS এর প্ল্যাটফর্ম (যেমন: 'win32', 'linux', 'darwin') দেয় |
| `os.type()` | OS এর নাম (যেমন: 'Windows_NT', 'Linux') |
| `os.arch()` | CPU architecture (যেমন: 'x64', 'arm') |
| `os.cpus()` | CPU গুলো সম্পর্কে বিস্তারিত তথ্য দেয় |
| `os.freemem()` | RAM এর ফাঁকা অংশের (free memory) পরিমাণ |
| `os.totalmem()` | মোট RAM এর পরিমাণ |
| `os.uptime()` | OS কতক্ষণ চালু আছে (সেকেন্ডে) |
| `os.hostname()` | কম্পিউটারের hostname |
| `os.userInfo()` | লগইন করা ইউজারের তথ্য |

## <span style="color:red">crypto module:</span>

crypto module হলো Node.js এর built-in module যা cryptography বা গোপনীয়তা রক্ষা করার জন্য ব্যবহার হয়।

এর মাধ্যমে আপনি ডেটা এনক্রিপ্ট (encrypt) এবং ডিক্রিপ্ট (decrypt) করতে পারেন, হ্যাশ (hash) তৈরি করতে পারেন, ডিজিটাল সিগনেচার তৈরি ও যাচাই করতে পারেন ইত্যাদি।

সাধারণত, যখন ডেটা সিকিউর করতে হয় (যেমন পাসওয়ার্ড সুরক্ষিত রাখা, ডেটা এনক্রিপশন করা, সিকিউর কমিউনিকেশন ইত্যাদি), তখন crypto module ব্যবহার করা হয়।

crypto module এর প্রধান কাজগুলো:

Hashing (হ্যাশিং):

ডেটার এক ধরনের ফিঙ্গারপ্রিন্ট তৈরি করে, যা মূল ডেটা থেকে আলাদা কিন্তু ইউনিক।

যেমন, পাসওয়ার্ড সংরক্ষণের জন্য সাধারণত হ্যাশ ব্যবহার হয় (যেমন SHA256, SHA512)।

<span style="color:green">একবার হ্যাশ করা হলে, একই ইনপুটে সব সময় একই হ্যাশ পাওয়া যায়।</span>

Encryption & Decryption (এনক্রিপশন ও ডিক্রিপশন):

ডেটাকে এমনভাবে রূপান্তর করা যা অন্য কেউ সহজে বুঝতে না পারে।

এনক্রিপ্ট করা ডেটাকে পরে ডিক্রিপ্ট করে আবার মূল ডেটায় রূপান্তর করা যায়।

Digital Signatures (ডিজিটাল সিগনেচার):

ডেটার প্রামাণিকতা নিশ্চিত করে।

যিনি সিগনেচার দিয়েছেন তিনি আসলেই সেই ব্যক্তিই কিনা তা যাচাই করে।

Key Generation (কি তৈরি):

এনক্রিপশন ও ডিক্রিপশনের জন্য প্রয়োজনীয় keys তৈরি করে।

```ts
const crypto = require("crypto");

const message = "Hello World";

// SHA256 হ্যাশ তৈরি
const hash = crypto.createHash("sha256").update(message).digest("hex");

console.log(hash);
```

createHash('sha256') — SHA256 এলগরিদম ব্যবহার করে হ্যাশ অবজেক্ট তৈরি।

update(message) — মেসেজ হ্যাশ করার জন্য যোগ করা।

digest('hex') — হ্যাশকে hex string এ রূপান্তর।

| বিষয়             | ব্যাখ্যা                                                  |
| ---------------- | --------------------------------------------------------- |
| crypto module    | Node.js এর cryptography toolset                           |
| কাজ              | হ্যাশিং, এনক্রিপশন, ডিজিটাল সিগনেচার, কী জেনারেশন ইত্যাদি |
| ব্যবহারের উদাহরণ | পাসওয়ার্ড সুরক্ষা, ডেটা এনক্রিপশন, নিরাপদ যোগাযোগ         |
