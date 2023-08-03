import React from 'react'
import './ProfileScreen.css'
import Nav from '../Nav'
import { useSelector } from 'react-redux'
import {selectUser} from '../features/userSlice'
import {auth} from '../firebase'

function ProfileScreen() {
  const user = useSelector(selectUser)

  return (
    <div className='profileScreen'>
        <Nav />
        <div className='profileScreen-body'>
            <h1>Edit Profile</h1>
            <div className='profileScreen-info'>
                <img 
                    src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
                />
                <div className='profileScreen-details'>
                  <h2>{user.email} </h2>
                  <div className='profileScreen-plans'>
                    <h3>Plans(to be updated)</h3>
                    <button onClick={()=>auth.signOut()} className='profileScreen-signOut'>Sign Out</button>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileScreen