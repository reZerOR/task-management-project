import React, { useState } from 'react';

const CommentBox = () => {
  const [comment, setComment] = useState('');
  const [commentsList, setCommentsList] = useState([]);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const submitComment = () => {
    if (comment.trim() !== '') {
      setCommentsList([...commentsList, comment]);
      setComment('');
    }
  };

  return (
    <div className="comment-container">
      <div className="comment-header">
      
        <h2>Comments</h2>
        <hr />
      </div>
      <div className="comment-input flex items-center gap-5">
        <textarea
          value={comment}
          onChange={handleCommentChange}
          placeholder="Type your comment here..."
        ></textarea>
        <button onClick={submitComment} className='btn bg-primeColor text-white'>Submit</button>
      </div>
      <div className="comment-list">
        {commentsList.map((comment, index) => (
          <div key={index} className="comment-item">
            {comment}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentBox;
