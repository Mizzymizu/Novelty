// Import Models
const { Book, User } = require('../models');

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
        createUser: async (parent, args) => {
            const user = await User.create(args);
            return user; 
        },
        saveBook: async (parent, { userId, book }) => {
           return User.findOneAndUpate(
            { _id: userId },
            { $addToSet: { savedBooks: book } },
            { new: true, runValidators: true }
           )
        },
        deleteBook: async (parent, { userId, book }) => {
            return User.findOneAndUpdate(
                { _id: userId },
                { $pull: { savedBooks: book } },
                { new: true }
            )
        }
    }
};

module.exports = resolvers;