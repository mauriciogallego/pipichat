const { gql } = require('apollo-server')

module.exports = gql`
    type Chat{
        id: ID
        body: String
        createdAt: String
        name: String
    }
    type User{
        id: ID
        token: String
        email: String
        name: String
        password: String
        phone: Int
        createdAt: String
    }
    input RegisterInput{
        mail: String
        codeVerification: String
    }
    type Message{
        message: String
    }
    type messageVerification{
        message: String
        id: String
    }
    type Query{
        getUsers: [User]
        getUser(userId: ID!): User
        getChats: [Chat]
        getChat(chatId: ID!): Chat
    }
    type Mutation{
        signUp(input:RegisterInput): messageVerification
        validationCode(input: RegisterInput): Message
        createChat(body: String!): Chat!
        deleteChat(chatId: ID!): String!
    }`