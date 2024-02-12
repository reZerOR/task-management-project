import { useQuery, useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { IoSendSharp } from "react-icons/io5";
import React, { useContext, useState } from 'react';
import { Avatar } from '@nextui-org/react';
import { AuthContext } from '../../../Providers/AuthProvider';

const CommentBox = () => {
  const [commentInput, setCommentInput] = useState('');
  const { user } = useContext(AuthContext);

  const submitComment = (e) => {
    e.preventDefault();
    const comment = e.target.comment.value;

    axios.post('http://localhost:5000/comment', {
      comment: comment,
    })
    .then((response) => {
      console.log('Comment added successfully:', response.data);
      setCommentInput(''); // Reset input field value after successful submission
      refetch(); // Refresh comments after successfully posting a new comment
    })
    .catch((error) => {
      console.error('Error adding comment:', error);
    });
  };

  const {refetch, data: comments = [] } = useQuery({
    queryKey: ['comments'],
    queryFn: () =>
      axios.get('http://localhost:5000/comment')
        .then((res)=>(
          res.data
        ))
  });


  console.log(comments);

  return (
    <div className="comment-container">
      <div className="comment-header">
        <h2 className='font-bold mb-2'>Comments</h2>
        <hr />
      </div>

      <div className='flex items-center gap-5'>
      <Avatar src={user.photoURL} />
      <form className='flex items-center gap-5' onSubmit={submitComment}>
        <input 
          type="text" 
          name='comment' 
          value={commentInput} // Controlled input value
          onChange={(e) => setCommentInput(e.target.value)} // Update input value state
          placeholder="Type here" 
          className="input input-bordered input-info w-full max-w-xs" 
        />
        <button type='submit' className='text-3xl text-primeColor'><IoSendSharp/></button>
      </form>
      </div>

      {/* Show Comment  */}
      <ul className="comment-list">
        {
          comments.map((comment, idx) => (
            <div className='flex items-center gap-2 ml-10 mt-2'>
               <Avatar src={user.photoURL} />
              <li className='text-sm lg:text-xl mb-2 ' key={idx}>{comment.comment}</li>
            </div>
          ))
        }
      </ul>
    </div>
  );
};

export default CommentBox;
