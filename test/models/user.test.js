const User = require('./../../app/models/user.js')

describe("Unite Test for User class", () => {
    test('Create an User object', () => {
        const user = new User(1, "sergioBA", "Sergio", "Bio")

        expect(user.id).toBe(1)
        expect(user.username).toBe("sergioBA")
        expect(user.name).toBe("Sergio")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()
    });
    test('Add getters', () => {
        const user = new User(2, "aldvad", "Enrique", "Bio")
        expect(user.getUsername).toBe("aldvad")
        expect(user.getBio).toBe("Bio")
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()
    });
    test('Add setters', () => {
        const user = new User(1, "sergioBA", "Sergio", "Bio")
        user.setUsername = "Enrique"
        expect(user.username).toBe("Enrique")

        user.setBio = "New Bio"
        expect(user.bio).toBe("New Bio")
    })
})