import React, { useState } from 'react'
import {Link} from "react-router-dom"
import avatar3 from '../Assets/avatar3.png'
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

function ProfileUser() {

  const [avatar, setAvatar] = useState(avatar3);
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [currentPassword,setCurrentPassword] = useState('')
  const [newPassword,setNewPassword] = useState('')
  const [confirmNewPassword,setConfirmNewPassword] = useState('')
  

  return (
    <>

    <section className="profile">
      <div className="container profile__container">
        <Link to={'/myposts/dsvfdv'} className='btn'>MY POSTS</Link>

        <div className="profile__details">
          <div className="avatar__wrapper">
            <div className="profile__avatar">
              <img src={avatar3} alt="" />
            </div>

            {/* Form to update avatar */}

            <form className='avatar__form'>
              <input type="file" name='avatar' id='avatar' onChange={e => setAvatar(e.target.files[0])} accept='png, jpg, jpeg' />
              <label htmlFor="avatar"><FaEdit/></label>
            </form>

            <button className='profile__avatar-btn'><FaCheck /></button>
          </div>

          <h1>John DOE</h1>

          <form className="form profile__form">
            <p className="form__error-message">
              This is an error message.
            </p>

            <input type="text" placeholder='Full Name' value={name} onChange={e=> setName(e.target.value)} />

            <input type="email" placeholder='Email' value={email} onChange={e=> setEmail(e.target.value)} />

            <input type="password" placeholder='Current Password' value={currentPassword} onChange={e=> setCurrentPassword(e.target.value)} />

            <input type="password" placeholder='New Password' value={newPassword} onChange={e=> setNewPassword(e.target.value)} />

            <input type="password" placeholder='Confirm New Password' value={confirmNewPassword} onChange={e=> setConfirmNewPassword(e.target.value)} />

            <button type="submit" className='btn primary '>Update Details</button>


          </form>
        </div>
      </div>
    </section>
    </>
  )
}

export default ProfileUser