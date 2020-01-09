const { gql } = require('apollo-server')

module.exports = gql`
    type Read{
        id: ID
        checked: Boolean!
        user: ID
    }
    
    type Message{
        id: ID
        author: User!
        text: String!
        read: [Read]!
    }

    type Chat{
        id: ID!
        createdAt: String
        members: [User]!
        name: String
        messages: [Message]
    }


    type User{
        id: ID
        token: String
        email: String
        name: String
        phone: Int
        createdAt: String
        reading: Chat
    }

    type registerMessage{
        message: String
    }


    input RegisterInput{
        mail: String!
    }

    input CreateChatInput {
        id: ID!
        createdAt: String
        members: [ID]!
        name: String
        messages: [ID]

    }

    input CreateMessageInput {
        author: ID!
        text: String!
        read: [ID]!
    }

    input CreateReadInput {
        checked: Boolean!
        user: ID
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
        createChat(input: CreateChatInput): Chat!
        deleteChat(chatId: ID!): String!
        createMessage(input: CreateMessageInput): Message!
        updateRead(input: CreateReadInput): Read!

    }
`