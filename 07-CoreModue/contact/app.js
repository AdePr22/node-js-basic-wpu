// Bismillahirahmanirahiimi
const contact = require(./contact)

const main = async() =>{
  const nama = await contact.tulisPertanyaan('Masukan Nama anda :')
  const nama = await contact.tulisPertanyaan('Masukan Nama anda :')
  const nama = await contact.tulisPertanyaan('Masukan Nama anda :')

  contact.simpanContact(nama,email,noHP)
}
 
main()
