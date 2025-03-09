const bcrypt = require('bcrypt');


async function main() {



    //generate password
    const saltRounds = 12;
    const myPlaintextPassword = 'P4$$worD';
    const adminPlaintextPassword = '_12345678';
    //@ts-ignore
    bcrypt.genSalt(saltRounds, function (err, salt) {
        //@ts-ignore
        bcrypt.hash(myPlaintextPassword, salt, function (err, hash) {
            // Store hash in your password DB.
            //create super user
    
            console.log('pass ->', hash)


        });
    });



}
main()
    .then(async () => {
        // await db.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        // await db.$disconnect()
        process.exit(1)
    })