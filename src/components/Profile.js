import React from 'react'

const Profile = ({username,password}) => {
  return (
    <div>
        <h2>Profile</h2>
      <p>Username: {username}</p>
      <p>Password: {password}</p>
    </div>
  )
}

export default Profile


