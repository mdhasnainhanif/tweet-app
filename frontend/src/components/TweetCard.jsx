import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ButtonTheme from "./Button";
import DeleteIcon from "../assets/images/icons/trash-2.svg";
import "bootstrap/dist/css/bootstrap.min.css";

function TweetCard({ tweet, onDelete }) {
  const [show, setShow] = useState(false);
  const [editContent, setEditContent] = useState(tweet.description);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card className="mb-3">
        <Card.Header>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              {tweet.firstName} {tweet.lastName}
            </div>
            <div>
              <ButtonTheme
                className="btn tweet_delete p-0 ms-2"
                imgSrc={DeleteIcon}
                imgClass="me-1"
                onClick={() => onDelete(tweet._id)}
              />
            </div>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Text className="text-start">{tweet.description}</Card.Text>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Tweet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label
                htmlFor="editTweet"
                className="form-label text-start d-block fw-bold text-primary"
              >
                Edit Tweet
              </label>
              <textarea
                type="text"
                className="form-control"
                id="editTweet"
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
              />
              <ButtonTheme
                className="btn btn-primary d-flex mt-3"
                name="Edit"
                type="submit"
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TweetCard;
