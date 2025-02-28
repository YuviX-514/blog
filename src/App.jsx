import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import PostList from "./components/PostList";
import CreatePost from "./components/CreatePost";
import HeroSection from "./components/HeroSection";

const App = () => {
  const [selectedTab, setSelectedTab] = useState("Home");
  const [posts, setPosts] = useState([]);

  const addPost = (newPost) => {
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };

  return (
    <div className="app-container">
      <div className="main-content">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

        <div className="content">
          <Header />
          <HeroSection>
            {selectedTab === "Home" ? (
              <PostList posts={posts} />
            ) : (
              <CreatePost addPost={addPost} setSelectedTab={setSelectedTab} />
            )}
          </HeroSection>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
