import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
        <nav className='sidebar py-5'>
            <h2 className='text-center'>Tweet App</h2>
            <div>
              <ul className='list-unstyled p-0 text-start mt-5'>
                <li className='px-3 py-2'><Link>Add Tweet</Link></li>
                <li className='px-3 py-2'><Link>Add Tweet</Link></li>
              </ul>
            </div>
        </nav>
    </>
  )
}

export default Sidebar