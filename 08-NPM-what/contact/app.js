const fs = require("fs");

// try {
//   fs.writefilesync(
//     "test.txt",
//     "membuat dan menuliskan file secara synchronous"
//   );
// } catch (eror) {
//   console.log(eror);
// }
//
// sekarang kita akan membuat file secara asynchronus
// fs.writefile(
//   "data/test.txt",
//   "helo word dengan membuat file secara synchron",
//   (e) => {
//     console.log(e);
//   }
// );

// //membaca isi file secara synchronous
// const data = fs.readfilesync("test.txt", "utf-8");
// console.log(data);

//readline
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukan nama anda :", (nama) => {
  rl.question("Masukan no hp Anda :", (noHP) => {
    const contact = { nama, noHP };
    const fileBuffer = fs.readFileSync("data/contacts.json", "utf-8");
    const contacts = JSON.parse(fileBuffer);
    contacts.push(contact);

    fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
    console.log("Terimakasih telah memasukan data :) :");
    rl.close();
  });
});
