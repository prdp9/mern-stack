import React from 'react'
import Button from '../button'
import { Link,  } from 'react-router-dom'
import useAxiosPrivate from '../../hooks/axios-private'
import toast from 'react-hot-toast'

const BookCard = ({ book,fetchBooks }) => {


    const axiosPrivate = useAxiosPrivate()

    const handleDelete = async(e) => {
        e.stopPropagation()
        try {
            const response = await axiosPrivate.delete(`/books/${book._id}`)
            console.log('res')
            if(response.data.message){
                toast.success(response.data.message)
            }else {
                toast.success("Book deleted!")
                
            }
            fetchBooks()
        } catch (error) {
            if(error.response.data.message){
                toast.success(response.data.message)
            }else {
                toast.success("Failed to delete book!")
                
            }
        }
    }

    return (
        <div className='shadow-xl  rounded-md  w-[250px] overflow-hidden pb-5 h-[370px]'>
            <img src={`http://localhost:8080/${book.image}`} alt="book cover"
                className="h-[200px] w-[100%] object-cover "
            />
            <div className="p-3">
                <h2 className="text-2xl font-bold">
                    {book.title}
                </h2>
                <h2>
                    {book.description}
                </h2>
            </div>

            <div className='flex justify-center gap-3'>
                <Link to={`/books/update/${book._id}`} 
                
                onClick={() => {
                    e.stopPropagation()
                }}
                > 
                    <Button>
                        Update
                    </Button>
                </Link>

                <Button onClick={handleDelete}>
                    Delete
                </Button>

            </div>
        </div>
    )
}

export default BookCard