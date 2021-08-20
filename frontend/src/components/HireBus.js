import React,{useState} from "react";

import { Form, Button,Col,InputGroup} from "react-bootstrap";

function Hirebus() {
    const [validated, setValidated] = useState(false);
  
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
  
    return (
      <div className="container">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>From</Form.Label> 
            <Form.Control
              required
              type="text"
              placeholder="From"
              defaultValue="Colombo"
              id="from"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>To</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="To"
              defaultValue="Kandy"
              id="to1"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>NIC number</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="text"
                placeholder="NIC number"
                aria-describedby="inputGroupPrepend"
                required
                id="manufacYear"
              />
              <Form.Control.Feedback type="invalid">
                Select NIC number!
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="City" required id="manufacYear"/>
            <Form.Control.Feedback type="invalid">
              Select Your name!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>Date</Form.Label>
            <Form.Control type="text" placeholder="Date" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Date.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Comment</Form.Label>
            <Form.Control type="text" placeholder="Comment" required />
            <Form.Control.Feedback type="invalid">
              Add a Comment.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Group>
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
          />
        </Form.Group>
        <Button type="submit">Add Vehicle</Button>
      </Form>
      </div>
    );
  }
  
  export default Hirebus;