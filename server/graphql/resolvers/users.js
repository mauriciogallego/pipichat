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
        async login(_, {name, password}){
            const {errors, valid} = validateLoginInput(name, password)
            if(!valid){
                throw new UserInputError('Errors!', { errors })
            }
            
            const user = await User.findOne({ name })
            if(!user)
            {
                errors.general = 'User not found!'
                throw new UserInputError('User not found!', { errors })
            }

            const match = await bcrypt.compare(password, user.password)
            if(!match)
            {
                errors.general = 'Wrong credentials!'
                throw new UserInputError('Wrong credentials!', { errors })
            }

            const token = generateToken(user)

            return{
                ...user._doc,
                id: user._id,
                token
            }
        },
        async register(_, { input: { mail } }) {
            
            let verCode = GenerateCode(5);
            console.log(verCode,mail)
            timeCodeOut(verCode,mail)
            return {message: "code sent"}

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