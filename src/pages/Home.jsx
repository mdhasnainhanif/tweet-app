import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

const Home = () => {
  return (
    <>
        <div className='main-wraperr'>
            <Header/>
            <Sidebar/>
            <div className="main-content">
                <div className="count_card bg-primary px-5 py-3 rounded w_fit">
                    <h3 className='text-light'>All Tweets Count</h3>
                    <h5 className='text-light text-start mt-2'>04</h5>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home