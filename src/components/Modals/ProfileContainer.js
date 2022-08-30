import React from 'react'
import "./ProfileContainer.css"
function ProfileContainer(props) {
  return (
    <div className="profile-container">{props.children}</div>
  )
}

export default ProfileContainer