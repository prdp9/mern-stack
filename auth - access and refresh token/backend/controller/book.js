export const getBooks = async (req,res) => {
    const books = [
        {
            id: 1,
            title: "The Great Gatsby",
        },
        {
            id: 2,
            title: "The Catcher in the Rye",
        },
        {
            id: 3,
            title: "To Kill a Mockingbird",
        },

    ]

    res.status(200).json(books)
}