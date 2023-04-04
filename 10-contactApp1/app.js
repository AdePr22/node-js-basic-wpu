const yargs = require("yargs");
const { simpanContact } = require("./contacts");

yargs.command({
  command: "add",
  describe: "Menambahkan kontak baru",
  builder: {
    nama: {
      demandOption: true,
      describe: "Menambahkan nama penggunaa",
      type: "string",
    },
    email: {
      demandOption: false,
      describe: "Menambahkan alamat email",
      type: "string",
    },
    noHP: {
      demandOption: true,
      describe: "Menambahkan nomor telepon",
      type: "string",
    },
  },
  handler: function (argv) {
    simpanContact(argv.nama, argv.email, argv.noHP);
  },
});
yargs.parse();
