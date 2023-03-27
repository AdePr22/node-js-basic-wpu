const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//mengecek dan membuat folder data
const dirPath = "./data";
!fs.existsSync(dirPath) ? fs.mkdirSync(dirPath) : "";
//membuat file contact hasil ( Pengkondisian if direfactor dengan menggunakan
//operator ternary)
const dataPath = "./data/contacts.json";
!fs.existsSync(dataPath) ? fs.writeFileSync(dataPath, "[]", "utf-8") : "";

// const dataPath = "./data/contacts.json";
// if (!fs.existsSync(dataPath)) {
//   fs.writeFileSync(dataPath, "[]", "utf-8");
// }
// merubah callback dengan menggunakan konsep async await tapi sebelum itu,
// kita harus menbungkus pertanyaanya dengan menggunakan promise
const tulisPertanyaan = (pertanyaan) => {
  return new Promise((resolve, reject) => {
    rl.question(pertanyaan, (nama) => {
      resolve(nama);
    });
  });
};

const simpanContact = (nama, noHP, email) => {
  const contact = { nama, noHP, email };
  const file = fs.readFileSync("data/contacts.json", "utf-8");
  const contacts = JSON.parse(file);
  contacts.push(contact);

  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
  console.log("terimakasih telah memasukan data :) :");
  rl.close();
};

module.exports = { tulisPertanyaan, simpanContact };
