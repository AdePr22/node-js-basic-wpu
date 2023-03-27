// Membuat fungsi utama untuk menangkap promise dan menjalankannya
const contacts = require("./contacts");
const main = async () => {
  const contacts = require("./contacts");
  const nama = await contacts.tulisPertanyaan("Masukan nama anda :");
  const noHP = await contacts.tulisPertanyaan("Masukan noHP anda :");
  const email = await contacts.tulisPertanyaan("Masukan email anda :");

  contacts.simpanContact(nama, noHP, email);
};
main();
