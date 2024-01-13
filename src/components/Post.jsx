import React, { useState } from "react";
import "./post.css";
import { AiFillLike } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { deletePost } from "../store/postsSlice";
import { useDispatch } from "react-redux";
import Modal from "./Modal";

function Post({ id, title, body, userId }) {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  function handleDelete(id) {
    dispatch(deletePost(id));
  }

  return (
    <div className="single-post" onClick={() => console.log(id)}>
      {showModal && (
        <Modal
          setShowModal={setShowModal}
          title="Edit Post"
          item={{ userId, title, body, id }}
        />
      )}
      <p className="title">{title}</p>
      <p className="content">{body}</p>
      <div className="post-btns">
        <div className="post-btn">
          <AiFillLike className="icon" />
          <p className="icon-text">Like</p>
        </div>
        <div className="post-btn">
          <FaHeart className="icon" />
          <p className="icon-text">Favorite</p>
        </div>
        <div className="post-btn" onClick={() => setShowModal(true)}>
          <MdEdit className="icon" />
          <p className="icon-text">Edit</p>
        </div>
        <div
          className="post-btn"
          onClick={() => {
            handleDelete(id);
          }}
        >
          <MdDelete className="icon" />
          <p className="icon-text">Delete</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
