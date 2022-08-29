import React, { useEffect, useState } from "react";
import "../components/css/Stories.css";
import Avatar from "@mui/material/Avatar";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { storyActions } from "../store/index";
function StoriesActivity() {
  
  const [storiesIndexs, setStoriesIndexs] = useState([]);
  const [stories, setStories] = useState([]);
  const dispatch = useDispatch  ();
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
        
        setStoriesIndexs(userIndex);
        
        const headerAdded =insertHeaderInAPI(storiesJson.stories);
        createNewArray(headerAdded, userIndex);
      }
    };
    getStories();
    
  }, []);

  const getChangedUserIdIndex = (storiesJson) => {
    let userid = 0;
    let indexes = [];
    storiesJson.stories.map((story, index) => {
      if (index === 0) {
        userid = story.userid;
        indexes.push(story.userid);
        
      }
      if (story.userid !== userid) {
        userid = story.userid;
        indexes.push(story.userid);
        
      }
    });
    let filtered = indexes.filter((a, b) => indexes.indexOf(a) === b);
    
    return indexes;
    
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

  const createNewArray = (storiesJson, userIndex) => {
    // userIndex.map((userDex)=>{
    let storyArray = [];
    userIndex.map((userIn) => {
      const sortedStories = storiesJson.filter((story) => {
        return story.userid === userIn;
      });
      storyArray.push(sortedStories);
    });
    // })
    setStories(storyArray);
     dispatch(
       storyActions.updateStory({
         stories: storyArray,
       })
     );
    
  };

  const insertHeaderInAPI = (stories) => {
    let headerAddedArray = [];

    
    stories.map((story) => {
      if (story.heading || story.subheading || story.profileimage) {
        let newObject ={"createdAt":story.createdAt,"duration":story.duration,"header":{
          "heading":story.heading, "subheading":story.subheading,"profileImage":story.profileimage
        }, "id":story.id,"type":story.type,"updatedAt":story.updatedAt,"url":story.url,"userid":story.userid}
        headerAddedArray.push(newObject);
      } else {
        const result = deleteProfileimageKey(story)
        // console.log(result)
        headerAddedArray.push({ ...result, profileImage: story.profileimage });
      }
    });
    
    return headerAddedArray;
    
  };
  const deleteProfileimageKey =(story) =>{
    return  Object.keys(story).filter((k) => k !== "profileimage").reduce((acc,key)=>((acc[key]=story[key]),acc),{});
  }
  return (
    <div className="stories">
      <div className="stories-block">
        <div className="stories-avatar">
          {stories &&
            stories.map((story) => (
              <div key={story.userid}>
                {/* {console.log(story)} */}
                <Link
                  state={{ story: story }}
                  key={story.id}
                  to={`/story/${story[0].userid}`}
                >
                  <Avatar />
                </Link>
                <span>name</span>
              </div>
            ))}
         
        </div>
      </div>

      
    </div>
  );
}
export default StoriesActivity;
