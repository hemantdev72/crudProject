import React, { useState, useEffect } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import "./modal.css";
import { addPost, editPost } from "../store/postsSlice";
import { useDispatch } from "react-redux";

function Modal({ setShow, setShowModal, title, item }) {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    userId: "",
    title: "",
    body: "",
  });

  useEffect(() => {
    if (item) {
      setInput({
        userId: item.userId,
        title: item.title,
        body: item.body,
      });
    }
  }, [item]);

  function handleSubmit(e) {
    e.preventDefault();

    setInput({
      userId: "",
      title: "",
      body: "",
    });
    if (title === "Edit Post") {
      dispatch(editPost({ id: item.id, ...input }));
      setShowModal(false);
    } else if (title === "Add Post") {
      dispatch(addPost(input));
      setShow(false);
    }
  }

  function handleChange(e) {
    setInput((prevInput) => ({
      ...prevInput,
      [e.target.name]: e.target.value,
    }));
  }

  function handleClose() {
    if (setShow) {
      setShow(false);
    } else if (setShowModal) {
      setShowModal(false);
    }
  }

  return (
    <>
      <div className="modal-wrapper"></div>
      <div className="modal-box">
        <div className="modal-top">
          <p className="modal-title">{title}</p>
          <IoIosCloseCircle className="modal-btn" onClick={handleClose} />
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-input-box">
            <input
              type="text"
              className="form-userid"
              name="userId"
              id="userid"
              onChange={handleChange}
              value={input.userId}
            />
            <label htmlFor="userid" className="label-user">
              User Id
            </label>
          </div>
          <div className="form-input-box">
            <input
              type="text"
              className="form-title"
              name="title"
              id="title"
              onChange={handleChange}
              value={input.title}
            />
            <label htmlFor="title" className="title-label">
              Title
            </label>
          </div>
          <div className="form-input-box">
            <input
              type="text"
              className="form-desc"
              name="body"
              id="desc"
              value={input.body}
              onChange={handleChange}
            />
            <label htmlFor="desc" className="desc-label">
              Description
            </label>
          </div>
          <button type="submit" className="form-btn">
            Add Post
          </button>
        </form>
      </div>
    </>
  );
}

export default Modal;
