const User = require('./../models/user.js')

class UserService {
    static create(id, username, name){
        return new User(id, username, name, "Sin bio")
    }
    static getInfo(user) {
        return Object.values(user)
    }
    static updateUserUsername(user, newUsername){
        user.setUsername = newUsername
    }

    static getAllUsernames(users){
        const usersUsernames = users.map(user => user.username)
        return usersUsernames        
    }

}

module.exports = UserService