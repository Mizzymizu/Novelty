export const QUERY_BOOKS = `#graphql
query getBooks {
    book {
        _id
        authors
        description
        bookId
        image
        link
        title
    }
}
`;

export const QUERY_USER = `#graphql
query getSingleUser($userId: ID!) {
    user {
        _id
        username
        email
        password
        savedBooks
    }
}
`