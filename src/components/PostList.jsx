import React from "react";
import Post from "./Post";
import "../App.css";

const PostList = ({ posts }) => {
  return (
    <div className="PostList">
      <h2>All Posts</h2>

      {posts.length === 0 ? (
        <p className="no-posts">No Posts yet</p>
      ) : (
        <div className="post-container">
          {posts.map((post) => (
            <div key={post.id} className="post-card">
              <Post post={post} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostList;
