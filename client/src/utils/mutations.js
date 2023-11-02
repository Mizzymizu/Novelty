export const ADD_USER = `#graphql
    mutation createUser($username: String!, $email: String!, $password: String!)  {
        createUser(username: $username, email: $email, password: $password) {
            _id
            username
            email
            password
            savedBooks
        }
    }
`;

export const LOGIN_USER = `#graphql
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
            }
        }
    }
`;

export const SAVE_BOOK = `#graphql
    mutation saveBook($userId: String!, $book: String!) {
        _id
        userId
        savedBooks {
            book
        }
    }
`;

export const DELETE_BOOK = `#graphql
    mutation deleteBook($userId: String!, $book: String!) {
        _id 
        userId
        savedBooks {
            book
        }
    }
`