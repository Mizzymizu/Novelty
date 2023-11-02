// Import Models
const { Book, User } = require('../models');
const { signToken, AuthenticationError } = require('../utils')

// Create resolvers
const resolvers = {
    Query: {
        book: async () => {
            return Book.find({});
        },
        user: async () => {
            return User.find({})
        }
    },
    Mutation: {
        createUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user)

            return { token, user }
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email })

            if (!user) {
                throw AuthenticationError
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw AuthenticationError
            }

            const token = signToken(user)
            return { token, user }
        },
        saveBook: async (parent, { userId, book }, context) => {
           if (context.user) {
            return User.findOneAndUpate(
                { _id: userId },
                { $addToSet: { savedBooks: book } },
                { new: true, runValidators: true }
               )
           } 
           throw AuthenticationError
        },
        deleteBook: async (parent, { userId, book }, context) => {
            if (context.user) {
                return User.findOneAndUpdate(
                    { _id: userId },
                    {$pull: { savedBooks: book }},
                    { new: true }
                )
            }
            throw AuthenticationError
        }
    }
};

module.exports = resolvers;