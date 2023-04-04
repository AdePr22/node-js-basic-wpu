const fs = require("fs");
const chalk = require("chalk");
const validator = require("validator");
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
const simpanContact = (nama, noHP, email) => {
  const contact = { nama, noHP, email };
  const file = fs.readFileSync("data/contacts.json", "utf-8");
  const contacts = JSON.parse(file);
  // cek duplikat kontak
  const duplikat = contacts.find((contact) => contact.nama === nama);
  if (duplikat) {
    console.log(
      chalk.red.inverse.bold("Contact sudah terdaftar,gunakan nama lain")
    );
    return false;
  }

  //cek email
  if (email) {
    if (!validator.isEmail(email)) {
      console.log(chalk.cyan.inverse.bold("Format email tidak valid"));
      return false;
    }
  }

  if (!validator.isMobilePhone(noHP, "id-ID")) {
    console.log(chalk.green.inverse.bold("Nomor Hp tidak valid"));
    return false;
  }
  contacts.push(contact);

  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
  console.log(chalk.white.inverse.bold("terimakasih telah memasukan data :)"));
};

module.exports = { simpanContact };
