import React from 'react'
import Header from '../Header'
import ProfileMain from './ProfileMain'
import ProfileTitle from './ProfileTitle'

function Profile() {
  return (
    <>
    <Header />
    <ProfileTitle />
    <ProfileMain />
    {/* <ProfileFooter position={"first"} /> */}
    </>
  )
}

export default Profile