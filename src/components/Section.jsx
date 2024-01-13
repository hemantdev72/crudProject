import React, { useState } from "react";
import "./section.css";
import Post from "./Post";
import { useSelector } from "react-redux";
import { FaCirclePlus } from "react-icons/fa6";
import Modal from "./Modal";
import PageLayout from "./PageLayout";

function Section() {
  const [show, setShow] = useState(false);
  let posts = useSelector((state) => state.posts.posts);

  return (
    <PageLayout className="sec-layout-container">
      {show && <Modal setShow={setShow} title="Add Post" />}
      <div className="sec-wrapper">
        <div className="total-posts">
          <p>Posts({posts.length})</p>
          <FaCirclePlus className="plus" onClick={() => setShow(true)} />
        </div>

        <div className="func">
          <div className="left">
            <input type="text" placeholder="search for title" />
            <select className="select">
              <option>title</option>
            </select>
          </div>
          <div className="right"></div>
        </div>
        <div className="posts">
          {posts &&
            posts
              .slice()
              .reverse()
              .map((post) => (
                <Post
                  title={post.title}
                  body={post.body}
                  key={post.id}
                  id={post.id}
                  userId={post.userId}
                />
              ))}
        </div>
      </div>
    </PageLayout>
  );
}

export default Section;
