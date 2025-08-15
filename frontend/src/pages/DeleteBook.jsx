
import BackButton from '../components/BackButton';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteBook = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteBook = () => {
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Delete Book</h1>
      <p>Are you sure you want to delete this book?</p>
      <button onClick={handleDeleteBook} className='bg-red-500 text-white px-4 py-2 rounded-md'>Delete Book</button>
    </div>
  )
}

export default DeleteBook
