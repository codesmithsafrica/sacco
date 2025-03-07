'use server'
// const bcrypt = require('bcrypt');
import bcrypt from "bcrypt";

 // eslint-disable-next-line
export const login = async (password: any, hash: any) => {
    //compare password with hash
    // eslint-disable-next-line
    return bcrypt.compareSync(password, hash)

}