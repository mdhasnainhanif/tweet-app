import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

const Home = () => {
  return (
    <>
        <section>
            <div className="container-fluid p-0">
                <div className="row">
                    <div className="col-md-3 p-0">
                        <div className='px-2'>
                            <Sidebar/>
                        </div>
                    </div>
                    <div className="col-md-9 p-0">
                        <div>
                            <Header/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Home