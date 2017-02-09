const argon2 = require('argon2');
const salt = new Buffer('somesalt');

const pass = '1234567'
let hashedPass

argon2
  .hash(pass, salt)
  .then(hash => {
    console.log(hash)
    return hashedPass = hash
  })
  .then(hashstuff => {
    argon2.verify(hashstuff, pass).then(match => {
      if (match) {
        console.log(`Success`)
      } else {
        console.log(`No match`)
      }
    })
  })
  .catch(console.error)

// argon2
//   .verify(hashedPass, pass)
//   .then(match => {
//     if(match) console.log('Success')
//     else console.log('Passwords dont match')
//   })
//   .catch(console.error)
