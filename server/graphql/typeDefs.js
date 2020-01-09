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
        mail: String!
    }
    type registerMessage{
        message: String
    }
    type Query{
        getUsers: [User]
        getUser(userId: ID!): User
        getChats: [Chat]
        getChat(chatId: ID!): Chat
    }
    type Mutation{
        register(input: RegisterInput): registerMessage
        login(name: String!, password: String!): User!
        createChat(body: String!): Chat!
        deleteChat(chatId: ID!): String!
    }
`