const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { UserInputError } = require('apollo-server')
const sendMail= require('../../util/mail')
const { validateRegisterInput, validateLoginInput } = require('../../util/validators')
const { SECRET_KEY } = require('../../config')
const User = require('../../models/userSchema')

let globalCodes = [];

function generateToken(user){
    return jwt.sign({
        id: user.id,
        email: user.email,
        name: user.name
    }, SECRET_KEY, { expiresIn: '1h'})
}

module.exports = {
    Query: {
        async getUsers() {
            try {
                const users = await User.find();
                return users;
            }
            catch (err) {
                throw new Error(err)
            }
        },
        async getUser(_, { userId }) {
            try {
                const user = await User.findById(userId)
                if (user) {
                    return user
                } else {
                    throw new Error('User not found')
                }
            }
            catch (err) {
                throw new Error(err)
            }
        }
    },
    Mutation: {
        async validationCode(_, { input: { mail } }) {
            let verCode = GenerateCode(5);
            sendMail(mail,verCode);
            timeCodeOut(verCode,mail);
            return {message: "code sent"}
        },
        async signUp(_,{input: {mail, codeVerification}}){
          let existCode = globalCodes.find(Element => Element.mail === mail && Element.codeVerification === codeVerification)
          if (!existCode){
            let resultId = User.findOne({ 'email': mail })
              .then(usuario => usuario._id)
            return {
              message: "OK",
              id: resultId
            }
          }else{
            return { message: "Error code", id:'' }
          }
        }
    }
}

function GenerateCode(length){
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  
  function timeCodeOut(codeVerification, user){
    globalCodes.push({codeVerification, user })
    setTimeout(()=>{
      globalCodes = globalCodes.filter(Element=>Element.codeVerification === codeVerification)
    },300000)
  }