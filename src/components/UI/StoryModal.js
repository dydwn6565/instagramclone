import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./StoryModal.css";
import ReactInstaStories from "react-insta-stories";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
function StoryModal() {
  const stories = useSelector((state) => state.story);
  const location = useLocation();
  const currentUserId = window.location.pathname.split("/")[2];
  const [prevStoryUrl, setPrevStoryUrl] = useState("");
  const [currentUrl, setCurrentUrl] = useState("");
  const [nextStoryUrl, setNextStoryUrl] = useState("");
  const [nextVideo, setNextVideo] = useState(false);
  const [prevVideo, setPrevVideo] = useState(false);
  const [currentIndex,setCurrentIndex] = useState(0);
  useEffect(() => {
    const setUpUserStory = () => {
      const filteredStories = stories.stories.stories.map((story) =>
        story.filter((detail) => {
          return detail.userid === parseInt(currentUserId);
        })
      );

      const findIndex = filteredStories.findIndex(
        (story) =>
          // console.log(story)
          story[0] !== undefined
      );
      setCurrentIndex(findIndex);
      const firstIndex = 0;
      const lastIndex = stories.stories.stories.length - 1;
      if (findIndex === firstIndex && findIndex === lastIndex) {
        setCurrentUrl(stories.stories.stories[findIndex]);
      } else if (findIndex === firstIndex && findIndex !== lastIndex) {
        setCurrentUrl(stories.stories.stories[findIndex]);
        setNextStoryUrl(stories.stories.stories[findIndex + 1][0].url);
        const resultCheckVideoNext = checkVideo(
          stories.stories.stories[findIndex + 1][0].url
        );
        if (resultCheckVideoNext) {
          setNextVideo(true);
        }
      } else if (findIndex !== firstIndex && findIndex !== lastIndex) {
        setPrevStoryUrl(stories.stories.stories[findIndex - 1][0].url);
        setCurrentUrl(stories.stories.stories[findIndex]);
        setNextStoryUrl(stories.stories.stories[findIndex + 1][0].url);

        const resultCheckVideoNext = checkVideo(
          stories.stories.stories[findIndex + 1][0].url
        );
        if (resultCheckVideoNext) {
          setNextVideo(true);
        }
        const resultCheckVideoPrev = checkVideo(
          stories.stories.stories[findIndex - 1][0].url
        );
        if (resultCheckVideoPrev) {
          setPrevVideo(true);
        }
      } else {
        setPrevStoryUrl(stories.stories.stories[findIndex - 1][0].url);
        setCurrentUrl(stories.stories.stories[findIndex]);
        const resultCheckVideoPrev = checkVideo(
          stories.stories.stories[findIndex - 1][0].url
        );
        if (resultCheckVideoPrev) {
          setPrevVideo(true);
        }
      }
    };
    setUpUserStory();
  }, [ location]);


  const checkVideo =(url)=>{
  const lastSegment = url.split(".").pop();
  if (
    lastSegment === "mp4" ||
    lastSegment === "mov" ||
    lastSegment === "wmv" ||
    lastSegment === "avi" ||
    lastSegment === "avchd" 
    ) {
    return true;
  }
  console.log(lastSegment);
  }
  // console.log(stories.stories.stories[findIndex-1][0].url);
  // console.log(stories.stories.stories[findIndex + 1][0].url);

  // const nextStoryUrl = stories.stories.stories[findIndex + 1][0].url;

  // const prevStoryUrl = stories.stories.stories[findIndex - 1][0].url;

  // console.log(filteredStories.findIndex((story)=>(
  //   // console.log(story)
  //       story[0] !==undefined

  // ))
  //   )
  // console.log(detail)
  // )))

  // ((story) =>
  //   story.filter((detail) => {
  //     return detail.userid === parseInt(currentUserId);
  //     // console.log(detail)
  //   })
  // )

  // const location = useLocation();
  // const { story } = location.state;

 const clickedCheck =(e) =>{
  console.log("clicked")
 }

  return (
    <>
      {console.log(currentUrl)}
      {console.log(prevStoryUrl)}
      {console.log(nextStoryUrl)}
      {console.log(prevVideo)}
      {console.log(nextVideo)}

      <div className="story-modal-backdrop" />
      {currentUrl && (
        <div className="story-modal">
          <ReactInstaStories
            stories={currentUrl}
            defaultInterval={1500}
            width={500}
            height={600}
          />
        </div>
      )}
      {prevStoryUrl &&
        (prevVideo
          ? prevStoryUrl && (
              <>
                <Link
                  to={`/story/${
                    stories.stories.stories[currentIndex - 1][0].userid 
                  }`}
                >
                  <div className="story-modal-left">
                    <video>
                      <source src={`${prevStoryUrl}`} />
                    </video>
                  </div>
                </Link>
              </>
            )
          : prevStoryUrl && (
              <Link
                to={`/story/${
                  stories.stories.stories[currentIndex - 1][0].userid
                }`}
              >
                <div
                  className="story-modal-left"
                  style={{
                    backgroundImage: `url(${prevStoryUrl})`,
                  }}
                ></div>
              </Link>
            ))}
      {nextStoryUrl &&
        (nextVideo
          ? nextStoryUrl && (
              <>
                <Link
                  to={`/story/${
                    stories.stories.stories[currentIndex + 1][0].userid
                  }`}
                  
                >
                  <div className="story-modal-right">
                    <video>
                      <source src={`${nextStoryUrl}`} />
                    </video>
                  </div>
                </Link>
              </>
            )
          : nextStoryUrl && (
              <Link
                to={`/story/${
                  stories.stories.stories[currentIndex + 1][0].userid
                }`}
              >
                <div
                  className="story-modal-right"
                  style={{
                    backgroundImage: `url(${nextStoryUrl})`,
                  }}
                ></div>
              </Link>
            ))}
    </>
  );
}

export default StoryModal;
