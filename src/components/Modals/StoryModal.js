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
      const firstIndex = 0;
      const lastIndex = stories.stories.stories.length - 1;
    const setUpUserStory = () => {
      resetUrlAndVideo();

      const filteredStories = filterStory(stories);

   
      const findIndex = filteredStories.findIndex(
        (story) =>
          // console.log(story)
          story[0] !== undefined
      );
      setCurrentIndex(findIndex);
    
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

  const filterStory = (stories)=>{
    const filteredData =stories.stories.stories.map((story) =>
      story.filter((detail) => {
        return detail.userid === parseInt(currentUserId);
      })
    );
    return filteredData;
  }


  const resetUrlAndVideo =() =>{

      setNextVideo(false);
      setPrevVideo(false);
      setPrevStoryUrl("");
      setNextStoryUrl("");
  }

  const checkVideo =(url)=>{
    const videoFileExtension = [".mp4",".mov",".wmv",".avi",".avchd"]
    let videoIsTrue = false;
    console.log(url)
    videoFileExtension.map((extenstion)=>{
      
      const containExtenstion = url.includes(extenstion);
      if(containExtenstion){
        
        videoIsTrue =true
      }
    })
    return videoIsTrue;
  
  // const lastSegment = url.includes(videoFileExtension[0]);
  
  // if (
  //   lastSegment === "mp4" ||
  //   lastSegment === "mov" ||
  //   lastSegment === "wmv" ||
  //   lastSegment === "avi" ||
  //   lastSegment === "avchd" 
  //   ) {
  //     console.log("hit6")
  //   return true;
  // }
  
  }
  

  return (
    <>
      {/* {console.log(currentUrl)}
      {console.log(prevStoryUrl)}
      {console.log(nextStoryUrl)}
      {console.log("hit114"+prevVideo)}
      {console.log("hit115"+nextVideo)} */}

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
          ?  (
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
          :  (
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
          ?  (
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
          :  (
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
