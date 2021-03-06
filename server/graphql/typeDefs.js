const { gql } = require('apollo-server')

module.exports = gql`
    type Read{
        id: ID
        checked: Boolean!
        user: ID
    }
    
    type Message{
        createdAt: String
        author: String!
        text: String!
    }

    type Chat{
        id: ID!
        createdAt: String
        members: [String]
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
        mail: String
        codeVerification: String
    }

    input CreateChatInput {
        members: [String]
        name: String

    }

    input CreateMessageInput {
        author: String
        text: String
        chatID: ID!
    
    }

    input CreateReadInput {
        checked: Boolean!
        user: ID
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
        createChat(input: CreateChatInput): Chat!
        deleteChat(chatId: ID!): String!
        createMessage(input: CreateMessageInput): Message!
        updateRead(input: CreateReadInput): Read!
    }

    type Subscription {
  messageAdded(something: String!): Message
}
    `
