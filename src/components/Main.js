import React, { useEffect, useState } from "react";

import "./css/Main.css";

import PostImageComponent from "./PostImageComponent";

// import video from "./video.mp4";

function Main({ setBlurBackground }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const accessToken = localStorage?.getItem("accessToken");

    
    if (accessToken) {
      const userValidationCheck = async () => {
        const token = await fetch("https://instagramserver1.herokuapp.com", {
          method: "POST",

          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const data = await token.json();
        
        if (data.message === "jwt expired") {
          const renewToken = async () => {
            const refreshToken = localStorage.getItem("refreshToken");
            const refreshedToken = await fetch(
              "https://instagramserver1.herokuapp.com/token",
              {
                method: "POST",
                headers: {
                  "Content-type": "application/json; charset=UTF-8",
                },
                body: JSON.stringify({
                  token: refreshToken,
                }),
              }
            );
            const refreshedData = await refreshedToken.json();
            localStorage.setItem("accessToken", refreshedData.accessToken);
            
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
        const postsData = await fetch(
          "https://instagramserver1.herokuapp.com/retrive/posts",
          // "http://localhost:8080/retrive/posts",
          {   
            method: "GET",
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods":
                "POST, GET, OPTIONS, DELETE, PUT, PATCH",
              "Access-Control-Allow-Headers":
                "Access-Control-Allow-Origin, Contect-Type, x-requdsted-with, Authorization",

              "Content-type": "application/json; charset=UTF-8",
            },
          }
        );
        
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
      {
        posts?.map((post,index) => (
          <>
            
            <div className="main-image-container" key={post.created_at}>
              <PostImageComponent
                images={post.filepath}
                content={post.content}
                id={post.id}
                userid={post.userid}
                postid={post.postid}
              />
            </div>
          </>
        ))}
    </>
  );
}

export default Main;
