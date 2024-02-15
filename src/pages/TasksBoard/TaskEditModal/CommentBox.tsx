import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IoSendSharp } from "react-icons/io5";
import { useContext, useState } from "react";
import { Avatar } from "@nextui-org/react";
import { AuthContext } from "../../../Providers/AuthProvider";


const CommentBox = ({taskId}:{taskId: string}) => {
  const { user } = useContext(AuthContext);
  const [commentInput, setCommentInput] = useState("");

  const submitComment = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const comment = form.comment.value;

    axios
      .post("http://localhost:5000/comment", {
        comment: comment, taskId
      })
      .then((response) => {
        console.log("Comment added successfully:", response.data);
        setCommentInput("");
        refetch(); // Reset input field value after successful submission
      })
      .catch((error) => {
        console.error("Error adding comment:", error);
      });
  };

  const { data: comments = [], refetch } = useQuery({
    queryKey: ["comments"],
    queryFn: () =>
      axios
        .get(`http://localhost:5000/comment/${taskId}`)
        .then((res) => res.data),
  });

  console.log(comments);

  return (
    <div className="comment-container h-5xl w-full overflow-scroll">
    <div className="comment-header">
      <h2 className="font-bold text-lg lg:text-xl mb-2 text-gray-800">Comments</h2>
      <hr className="border-gray-300" />
    </div>
    <form className="flex items-center gap-5 mt-4" onSubmit={submitComment}>
    <Avatar src={user.photoURL} />
      <input
        type="text"
        name="comment"
        value={commentInput}
        onChange={(e) => setCommentInput(e.target.value)}
        placeholder="Add a comment..."
        className="input input-bordered input-info w-full max-w-lg p-3 rounded-lg ml-2"
        required
      />
      <button type="submit" className="text-3xl text-primeColor hover:text-primeColor-dark">
        <IoSendSharp />
      </button>
    </form>
  
    <ul className="comment-list mt-4">
      {comments.map(
        (comment: { _id: string; comment: string }, idx: number) => (
          <li className="text-base lg:text-lg mb-2 text-gray-700 flex gap-2 items-center" key={idx}>
           <Avatar src={user.photoURL} /> {comment.comment}
          </li>
        )
      )}
    </ul>
  </div>
  
  );
};

export default CommentBox;
