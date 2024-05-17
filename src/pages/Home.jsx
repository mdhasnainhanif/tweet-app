import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

const Home = () => {
  return (
    <>
        <section>
            <div className="container-fluid p-0">
                <div className="row">
                    <div className="col-md-3">
                        <div>
                            <Sidebar/>
                        </div>
                    </div>
                    <div className="col-md-9">
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