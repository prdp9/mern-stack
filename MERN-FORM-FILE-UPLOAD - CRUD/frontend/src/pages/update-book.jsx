import React, { useEffect, useState } from 'react'
import Button from '../components/button'
import useAxiosPrivate from '../hooks/axios-private'
import toast from 'react-hot-toast'
import Input from '../components/input'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateBookPage = () => {

  const axiosPrivate = useAxiosPrivate()

  const params = useParams();

  const navigate = useNavigate()

  const [book, setBook] = useState({
    title: "",
    price: 0,
    description: "",
    author: "",
    publisher: "",
    publicationDate: ""
  })

  const [image, setImage] = useState(null)

  useEffect(() => {
    fetchBookDetail();
  }, []);

  const fetchBookDetail = async () => {
    try {
      const response = await axiosPrivate.get(`/books/${params.bookId}`);

      const slicedDate = response.data.publicationDate.slice(0, 10)

      setBook({
        ...response.data,
        publicationDate: slicedDate
      })
    } catch (error) {

    }
  };

  const handleFileUpload = async () => {

    const formData = new FormData()

    formData.append("title", book.title)
    formData.append("price", book.price)
    formData.append("description", book.description)
    formData.append("author", book.author)
    formData.append("publisher", book.publisher)
    formData.append("publicationDate", book.publicationDate)


    if (image) {
      formData.append("images", image)
    }


    try {
      const response = await axiosPrivate.put(`/books/${book._id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      console.log("response", response.data)
      toast.success("Updated")
      navigate('/books')
    } catch (error) {
      console.log("error occured")
      toast.error("Error occured")
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    console.log('date', value, typeof value)

    setBook(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }
  const handleImageChange = (e) => {
    console.log("", e.target.files)
    setImage(e.target.files[0])
  }
  return (
    <div className='flex flex-col items-center gap-3'>
      <h2 className='text-3xl font-semibold my-3'>Add Book</h2>
      {
        !image &&
        <img src={`${import.meta.env.VITE_API_URL}/${book.image}`} alt="book cover"
          className="h-[300px] w-[300px] object-cover "
        />
      }

      {
        image &&
        <img src={URL.createObjectURL(image)} alt="book cover"
          className="h-[300px] w-[300px] object-cover "
        />
      }


      <Input name='title' placeholder='Enter book title' label='Title' value={book.title} onChange={handleChange} />
      <Input name='description' placeholder='Enter book description' label='Description' value={book.description} onChange={handleChange} />
      <Input name='price' placeholder='Enter book price' label="Price" value={book.price} onChange={handleChange} />
      <Input name='author' placeholder='Enter book author' label="Author" value={book.author} onChange={handleChange} />
      <Input name='publisher' placeholder='Enter book publisher' label="Publisher" value={book.publisher} onChange={handleChange} />
      <Input name='publicationDate' placeholder='Enter book publication date' label="Publication Date" value={book.publicationDate} onChange={handleChange} type='date' />

      <input type="file" onChange={handleImageChange} />


      <Button onClick={handleFileUpload}>
        Submit
      </Button>
    </div>
  )
}

export default UpdateBookPage