import React, { useState } from "react";

const CreatePost = ({ addPost, setSelectedTab }) => {
  const [username, setUsername] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleReset = () => {
    setUsername("");
    setTitle("");
    setContent("");
  };

  const handleSubmit = () => {
    if (!username || !title || !content) {
      alert("All fileds are required !");
      return;
    }

    const newPost = {
      id: Date.now(),
      username,
      title,
      content,
      timestamp: new Date(),
    };

    addPost(newPost);
    console.log("New post added:", newPost);

    setSelectedTab("Home");

    setTimeout(() => {
      handleReset();
    }, 0);
  };

  return (
    <div className="createPost">
      <div className="ml-3 mt-3">
        <div class=" ml-2 mb-3 mr-4">
          <label for="exampleFormControlInput1" class="form-label">
            Username
          </label>
          <input
            type="text"
            value={username}
            class="form-control"
            id="exampleFormControlInput1"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Please enter your Username"
          />
        </div>
        <div class=" ml-2 mb-3 mr-4">
          <label for="exampleFormControlInput1" class="form-label">
            Post Title
          </label>
          <input
            type="text"
            value={title}
            class="form-control"
            onChange={(e) => setTitle(e.target.value)}
            id="exampleFormControlInput1"
            placeholder="Enter Post Title"
          />
        </div>
        <div class="ml-2 mb-3 mr-4">
          <label for="exampleFormControlTextarea1" class="form-label">
            Post Content
          </label>
          <textarea
            placeholder="How are you feeling today..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            style={{ maxHeight: "12rem" }}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-success mr-4"
          onClick={handleSubmit}
        >
          Post
        </button>
        <button className="btn btn-secondary" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
