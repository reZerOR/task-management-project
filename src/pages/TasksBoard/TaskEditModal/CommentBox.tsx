import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IoSendSharp } from "react-icons/io5";
import { useState } from "react";

const CommentBox = () => {
  const [commentInput, setCommentInput] = useState("");

  const submitComment = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const comment = form.comment.value;

    axios
      .post("https://task-project-server-smoky.vercel.app/comment", {
        comment: comment,
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
        .get("https://task-project-server-smoky.vercel.app/comment")
        .then((res) => res.data),
  });

  console.log(comments);

  return (
    <div className="comment-container">
      <div className="comment-header">
        <h2 className="font-bold mb-2">Comments</h2>
        <hr />
      </div>
      <form className="flex items-center gap-5" onSubmit={submitComment}>
        <input
          type="text"
          name="comment"
          value={commentInput} // Controlled input value
          onChange={(e) => setCommentInput(e.target.value)} // Update input value state
          placeholder="Type here"
          className="input input-bordered input-info w-full max-w-xs"
        />
        <button type="submit" className="text-3xl text-primeColor">
          <IoSendSharp />
        </button>
      </form>

      {/* Show Comment  */}
      <ul className="comment-list">
        {comments.map(
          (comment: { _id: string; comment: string }, idx: number) => (
            <li className="text-sm lg:text-xl mb-2 " key={idx}>
              {comment.comment}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default CommentBox;
