import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ButtonTheme from "./Button"; // Ensure the path is correct
import EditIcon from "../assets/images/icons/edit.svg"; // Ensure the path is correct
import DeleteIcon from "../assets/images/icons/trash-2.svg"; // Ensure the path is correct
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported

function TweetCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card>
        <Card.Header>
          <div className="ms-auto d-block w_fit">
            <ButtonTheme
              variant="primary"
              onClick={handleShow}
              className="btn tweet_edit p-0"
              imgSrc={EditIcon}
            />
            <ButtonTheme
              className="btn tweet_delete p-0 ms-2"
              imgSrc={DeleteIcon}
            />
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Text className="text-start">
            With supporting text below as a natural lead-in to additional
            content. With supporting text below as a natural lead-in to
            additional content.
          </Card.Text>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Tweet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div class="mb-3">
              <label
                for="addtweet"
                class="form-label text-start d-block fw-bold text-primary"
              >
                Edit Tweet
              </label>
              <input
                type="text"
                class="form-control"
                id="addtweet"
                // placeholder="Edit Tweet"
              />
              <ButtonTheme className="btn btn-primary d-flex mt-3" name="Edit" />
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
