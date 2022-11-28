import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function EditContactForm(props) {
  const [name, setName] = useState(props.contact.name);
  const [number, setNumber] = useState(props.contact.number);
  const [location, setLocation] = useState(props.contact.location);
  const [id, setId] = useState(props.contact.id);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleEdit(props.contact.id, { name, number, location, id });
    setName("");
    setNumber("");
    setLocation("");
    props.handleClose();
  };

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Save
        </Button>
      </Form>
    </div>
  );
}

export default EditContactForm;
