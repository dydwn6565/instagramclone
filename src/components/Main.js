import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import "./css/Main.css";

import PostImageComponent from "./PostImageComponent";

// import video from "./video.mp4";

function Main({ setBlurBackground }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const accessToken = localStorage?.getItem("accessToken");

    // console.log(accessToken);
    if (accessToken) {
      const userValidationCheck = async () => {
        const token = await fetch("http://localhost:8080", {
          method: "POST",

          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const data = await token.json();
        console.log(data.message);
        if (data.message === "jwt expired") {
          const renewToken = async () => {
            const refreshToken = localStorage.getItem("refreshToken");
            const refreshedToken = await fetch("http://localhost:8080/token", {
              method: "POST",
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
              body: JSON.stringify({
                token: refreshToken,
              }),
            });
            const refreshedData = await refreshedToken.json();
            localStorage.setItem("accessToken", refreshedData.accessToken);
            console.log(refreshedData);
          };
          renewToken();
        }
      };
      userValidationCheck();
    } else {
      window.location.href = "/login";
    }
  }, []);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const postsData = await fetch("http://localhost:8080/retriev/posts", {
          method: "GET",
        });
        if (postsData.status === 201) {
          const postsJson = await postsData.json();

          setPosts(postsJson);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    getPosts();
  }, []);

  


  return (
    <>
      
      {posts &&
        posts.map((post) => (
          <>
          {console.log(post)}
            <div className="main-image-container">
              <PostImageComponent
                images={post.url}
                content={post.content}
                id={post.id}
                userid ={post.userid}
                postid={post.postid}
              />
            </div>
          </>
        ))}
    </>
  );
}

export default Main;
