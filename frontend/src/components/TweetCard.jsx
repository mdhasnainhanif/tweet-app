import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import DeleteIcon from "../assets/images/icons/trash-2.svg";
import "bootstrap/dist/css/bootstrap.min.css";

function TweetCard({ tweet, onDelete }) {
  const [show, setShow] = useState(false);
  const [editContent, setEditContent] = useState(tweet.description);


  return (
    <>
      <Card className="mb-3">
        <Card.Header>
          <div className="d-flex justify-content-between align-items-center">
            <div><p className="fw-bold text-primary mb-0">{tweet?.fullName}</p></div>
            <div>
              <button className="btn tweet_delete p-0 ms-2">
                <img className="me-1" src={DeleteIcon} alt="delete" onClick={() => onDelete(tweet._id)} />
              </button>

            </div>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Text className="text-start">
            <p className="fw-bold">May - 2024</p>
            {tweet?.content}
          </Card.Text>
        </Card.Body>
      </Card>

  
    </>
  );
}

export default TweetCard;
