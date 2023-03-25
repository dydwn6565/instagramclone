import React,{useEffect,useState} from "react";
import Avatar from "@mui/material/Avatar";
import "./css/SideRecommandationProfile.css";
function SideRecommandationProfile() {
  const [userId,setUserId ]= useState();
  const [userName,setUserName] = useState();
  useEffect(()=>{
    const userInfo =localStorage.getItem("userInfo")
    
    setUserId(JSON.parse(userInfo).userid);
    setUserName(JSON.parse(userInfo).username);
  },[userId,userName])
  return (
    <div className="side-recommandation-profile">
      <div>
        <div>
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiGcFYBKGruads8sUVAfUBlX8orSdEwuSSTg&usqp=CAU" className="main-page-profile-avatar"/>
        </div>
        <div className="side-recomandation-profile-id">
          <div>{userId}</div>
          <div>{userName}</div>
        </div>
        
      </div>
    
    </div>
  );
}

export default SideRecommandationProfile;
