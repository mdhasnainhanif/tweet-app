import React from 'react'

const ProfileStats = (props) => {
  return (
    <>
        <div className="row">
            <div className="col-md-3">
                <div>
                    <h5 className='fw-bold text-primary'>Tweets</h5>
                    <p>{props.tweetCount.length}</p>
                </div>
            </div>
            <div className="col-md-3">
                <div>
                    <h5 className='fw-bold text-primary'>Following</h5>
                    <p>425</p>
                </div>
            </div>
            <div className="col-md-3">
                <div>
                    <h5 className='fw-bold text-primary'>Followers</h5>
                    <p>6034</p>
                </div>
            </div>
            <div className="col-md-3">
                <div>
                    <h5 className='fw-bold text-primary'>Likes</h5>
                    <p>7688</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProfileStats