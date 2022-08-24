import React, { useEffect, useState } from "react";
import "../components/css/Stories.css";
import Avatar from "@mui/material/Avatar";
import Stories from "react-insta-stories";
function StoriesActivity() {
  const [storyActivity, setStoryActivity] = useState(false);
  const [storiesIndexs, setStoriesIndexs] = useState([]);
  const [stories, setStories] = useState([]);
  useEffect(() => {
    const getStories = async () => {
      const storiesData = await fetch("http://localhost:8080/stories", {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      if (storiesData.status === 201) {
        const storiesJson = await storiesData.json();

        sortStories(storiesJson.stories);
         const userIndex = getChangedUserIdIndex(storiesJson);
        // setStories(storiesJson);
        setStoriesIndexs(userIndex);
        console.log(storiesIndexs);
        createNewArray(storiesJson.stories,userIndex)
        
      }
    };
    getStories();
    console.log(storiesIndexs);
  }, []);

  const getChangedUserIdIndex = (storiesJson) => {
    let userid = 0;
    let indexes =[];
    storiesJson.stories.map((story, index) => {
      if (index === 0) {
        userid = story.userid;
        indexes.push(story.userid);
        // setStoriesIndexs((prevIndexs) => [...prevIndexs, story.userid]);
      }
      if (story.userid !== userid) {
        userid = story.userid;
        indexes.push(story.userid)
        // setStoriesIndexs((prevIndexs) => [...prevIndexs, story.userid]);
      }
    });
    let filtered = indexes.filter((a, b) => indexes.indexOf(a) === b);
      // setStoriesIndexs(filtered)
      console.log(filtered);
      return indexes;
    // setStoriesIndexs((prevIndexs) => [new Set(prevIndexs)]);
  };

  const sortStories = (stories) => {
    return stories.sort((a, b) => {
      if (a.userid < b.userid) {
        return -1;
      }
      if (a.userid > b.userid) {
        return 1;
      }
      return 0;
    });
  };

  const createNewArray = (storiesJson,userIndex) => {
    // userIndex.map((userDex)=>{
      let storyArray =[];
      userIndex.map((userIn)=>{
        const sortedStories = storiesJson.filter((story) => {
          return story.userid ===userIn
        })
        storyArray.push(sortedStories);
      })
    // })
    setStories(storyArray);
    console.log(storyArray);
  };

  return (
    <div className="stories">
      <div className="stories-block">
        <div className="stories-avatar">
          {stories &&
            stories.map((story) => (
              <div onClick={() => setStoryActivity(true)}>
                <Avatar />
                <span>name</span>
              </div>
            ))}
          {/* {storiesIndexs && storiesIndexs.map((story) => (
            <div onClick={() => setStoryActivity(true)}>
              <Avatar />
              <span>name</span>
            </div>
          ))} */}

          {/* <div>
            <Avatar />
            <span>name</span>
          </div>
          <div>
            <Avatar />
            <span>name</span>
          </div>
          <div>
            <Avatar />
            <span>name</span>
          </div>
          <div>
            <Avatar />
            <span>name</span>
          </div>
          <div>
            <Avatar />
            <span>name</span>
          </div> */}
        </div>
      </div>

      {/* {storyActivity &&<Stories stories={story}/>} */}
    </div>
  );
}
export default StoriesActivity;
