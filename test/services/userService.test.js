const User = require('../../app/models/user.js')
const UserService = require('./../../app/services/userService.js')

describe("Test for UserService", () => {
    test("1. Create a new user usgin the UserService", () => {
        const user =  UserService.create(1, "sergioBA", "Sergio")
        expect(user.username).toBe("sergioBA")
        expect(user.name).toBe("Sergio")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })
    test("2. Get all user data in a list", () =>{
        const user = UserService.create(1, "sergioBA", "Sergio")
        const userInfoInList = UserService.getInfo(user)
        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("sergioBA")
        expect(userInfoInList[2]).toBe("Sergio")
        expect(userInfoInList[3]).toBe("Sin bio")
    })
    test("3. Update username", () => {
        const user = UserService.create(1, "sergioBA", "Sergio")
        UserService.updateUserUsername(user, "checoBA")
        expect(user.username).toBe("checoBA")
    })
    test("4. Given a list of users give me the list of usernames", () => {
        const user1 = UserService.create(1, "sergioBA1", "Sergio")
        const user2 = UserService.create(1, "sergioBA2", "Sergio")
        const user3 = UserService.create(1, "sergioBA3", "Sergio")
        const usernames = UserService.getAllUsernames([user1, user2, user3])
        expect(usernames).toContain("sergioBA1")
        expect(usernames).toContain("sergioBA2")
        expect(usernames).toContain("sergioBA3")
    })
})