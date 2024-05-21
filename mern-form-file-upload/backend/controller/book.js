import Book from "../models/Book.js"

export const getBooks = async (req, res) => {
    const books = await Book.find()
    res.status(200).json(books)
}


export const createBook = async (req, res) => {
    console.log("my saved file", req.file)
    const { title, price, description, author, publisher, publicationDate } = req.body

    if(!title || !price || !description || !author || !publisher || !publicationDate) {
        return res.status(400).json({
            message: "All fields are required"
        })
    }

    try {
        const book = await Book.create({
            title,
            price,
            description,
            author,
            publisher,
            publicationDate,
            image: req.file.destination + "/" + req.file.filename
        })

        console.log(book)

        res.status(201).json({
            message: "Book added"
        })
    } catch (error) {
        console.log("error",error)
        res.status(500).json({
            message:"Error adding book"
        })
    }

   
}