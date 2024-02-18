const messagesModel = require('./models/messages.model')

class DBMessagesManager {

    async getAllMessages() {
        try {
            const allMessages = await messagesModel.find({}).lean()
            return allMessages
        } catch (error) {
            throw Error(error)
        }
    }

    async addMessage(user, message){
        try {
            const messageAdd = await cartsModel.create({user: user, message: message})
            .then((res) => {
                return `Se creo un nuevo mensaje con id ${res._id}` 
            })
            .catch((error) => {
                throw Error(error)
            })

            return messageAdd
        } catch (error) {
            throw Error(error)
        }
    }
}

module.exports = DBMessagesManager