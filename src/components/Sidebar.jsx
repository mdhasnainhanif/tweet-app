import React from 'react'
import { Link } from 'react-router-dom'
import User from '../assets/images/user.png'

const Sidebar = () => {
  return (
    <>
        <nav className='sidebar py-4'>
            <h2 className='text-center fw-bold'>Tweet App</h2>
            <div className='mt-4'>
              <img className='user_profile' src={User} alt="" />
            </div>
            <div>
              <ul className='list-unstyled p-0 text-start mt-5'>
                <li className='px-3 py-3'><Link className='tweet_icon'>All Tweets</Link></li>
                <li className='px-3 py-3'><Link className='addtweet_icon'>Add Tweet</Link></li>
              </ul>
            </div>
        </nav>
    </>
  )
}

export default Sidebar