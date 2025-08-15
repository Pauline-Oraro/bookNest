import React, {useEffect, useState} from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const Home = () => {
  const [books, setBooks] = useState([]);

  

  useEffect(() => {
    
    axios
    .get('http://localhost:5555/books')
    .then((response)=> {
      setBooks(response.data.data);

    })
    .catch((error) => {
      console.log(error);
      
    })
  }, []);
  return (
    <div className='p-4'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>Books Lists</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className='text-sky-800 text-4xl' />
        </Link>
      </div>

      
      
        <table className='w-full border-separate border-spacing-2'>
          <thead>
            <tr>
              <th className='border border-slate-600 rounded-md'>No</th>
              <th className='border border-slate-600 rounded-md'>Title</th>
              <th className='border border-slate-600 rounded-md max-md:hidden'>Author</th>
              <th className='border border-slate-600 rounded-md max-md:hidden'>Publish Year</th>
              <th className='border border-slate-600 rounded-md max-md:hidden'>Operations</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={book.id} className='h-8'>
                <td className='border border-slate-700 rounded-md text-center'>{index + 1}</td>
                <td className='border border-slate-700 rounded-md text-center'>{book.title}</td>
                <td className='border border-slate-700 rounded-md max-md:hidden text-center'>{book.author}</td>
                <td className='border border-slate-700 rounded-md max-md:hidden text-center'>{book.publishYear}</td>
                <td className='border border-slate-700 text-center rounded-md'>
                  <div className='flex justify-center gap-x-4'>
                    <Link to={`/books/details/${book._id}`}>
                      <BsInfoCircle className='text-green-800 text-2xl' />
                    </Link>
                    <Link to={`/books/edit/${book._id}`}>
                      <AiOutlineEdit className='text-yellow-600 text-2xl' />
                    </Link>
                    <Link to={`/books/delete/${book._id}`}>
                      <MdOutlineDelete className='text-red-600 text-2xl' />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      
    </div>
  )
}

export default Home

