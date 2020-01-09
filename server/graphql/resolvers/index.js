const usersResolver = require('./users')
const chatsResolver = require('./chats')

module.exports = {
    Query: {
        ...usersResolver.Query,
        ...chatsResolver.Query
    },
    Mutation: {
        ...usersResolver.Mutation,
        ...chatsResolver.Mutation
    }
}