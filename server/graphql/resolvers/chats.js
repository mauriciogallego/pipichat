const { AuthenticationError } = require('apollo-server')

const Chat = require('../../models/chatSchema')
const checkAuth = require('../../util/check-auth')
var ObjectId = require('mongodb').ObjectId;

module.exports = {
    Query: {
        async getChats() {
            try {
                const chats = await Chat.find().sort({ createdAt: -1 });
                return chats;
            } catch (err) {
                throw new Error(err);
            }
        },
        async getChat(_, { chatId }) {
            try {
                const chat = await Chat.findById(chatId)
                if (chat) {
                    return chat
                } else {
                    throw new Error('Chat not found')
                }
            }
            catch (err) {
                throw new Error(err)
            }
        }
    },
    Mutation: {
        async createChat(_,{input: {members, name}}, context) {
           /* const user = checkAuth(context);
            console.log(user);*/

            console.log(members, name)
            const newChat = new Chat({
                createdAt: new Date().toISOString(),
                members: members,
                name: name

                
            });

            const chat = await newChat.save();
            console.log(chat)

            return chat;
        },
        async deleteChat(_, { chatId }, context) {
            const user = checkAuth(context);

            try {
                const chat = await Chat.findById(chatId);
                if (user.name === post.name) {
                    await chat.delete();
                    return 'Chat deleted successfully';
                } else {
                    throw new AuthenticationError('Action not allowed');
                }
            } catch (err) {
                throw new Error(err);
            }
        },

        async createMessage(_,{ input: { author,
            text, chatID}}) {
                const newMessage = {
                    createdAt: new Date().toISOString(),
                    author: author,
                    text: text
                }
                console.log(newMessage)
                const chat = await Chat.updateOne(
                    { _id: ObjectId(chatID) },
                    { $push: {messages: newMessage }}
                  )
                console.log(chat)
                return newMessage;

            }


    },
    Subscription : {
        subscribeToMessages: () => {}
    }
};
