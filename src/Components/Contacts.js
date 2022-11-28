import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import EditContactForm from "./EditContactForm";

const Contacts = (props) => {
  const [show, setShow] = useState(false);
  const [contact, setContact] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = (item) => {
    setContact(item);
    setShow(true);
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditContactForm
            handleClose={handleClose}
            contact={contact}
            handleEdit={props.handleEdit}
          />
        </Modal.Body>
      </Modal>

      <div className="row">
        {props.contacts.map((item) => {
          return (
            <div key={item.id} className="col-md-4 my-1">
              <Card style={{ width: "13rem" }}>
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <p>{item.number}</p>
                  <p>{item.location}</p>
                  <Button variant="primary" onClick={() => handleShow(item)}>
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => props.handleDelete(item.id)}
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Contacts;
