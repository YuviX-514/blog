import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { format } from "timeago.js";

const Post = ({ post }) => {
  return (
    <div className="flex-center">
      <div
        className="card shadow-lg border-0 rounded-4 p-3"
        style={{ width: "24rem", backgroundColor: "#f8f9fa" }}
      >
        <div className="card-header bg-primary text-white fw-bold text-center rounded-top">
          {post.username}
        </div>

        <div className="card-body">
          <h6 className="card-subtitle text-muted text-center">{post.title}</h6>
          <hr
            className="my-2"
            style={{ borderTop: "2px solid rgba(0,0,0,0.1)" }}
          />
          <p className="card-text text-dark text-justify">{post.content}</p>
          <p className="post-time">Posted {format(post.timestamp)}</p>

          <div className="d-flex justify-content-center gap-4 mt-3">
            <a
              href="https://github.com/YuviX-514"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              <FaGithub size={26} />
            </a>
            <a
              href="https://www.linkedin.com/in/yuvraj-singh-7aa0b6232/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link text-primary"
            >
              <FaLinkedin size={26} />
            </a>
          </div>
        </div>

        <div className="card-footer text-muted text-center rounded-bottom"></div>
      </div>
    </div>
  );
};

export default Post;
