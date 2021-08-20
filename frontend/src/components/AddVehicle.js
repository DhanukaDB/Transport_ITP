import React,{useState} from "react";

import { Form, Button,Col,InputGroup} from "react-bootstrap";

//export default function AddVehicle(){

  //  return(
//<div>
     



function AddVehicle() {
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
          <Form.Label>Vehicle Number</Form.Label> 
          <Form.Control
            required
            type="text"
            placeholder="Vehicle Number"
            defaultValue=""
            id="vehicleID"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Vehicle Model</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Vehicle Model"
            defaultValue=""
            id="vModel"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>NIC Number</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type="text"
              placeholder="NIC Number"
              aria-describedby="inputGroupPrepend"
              required
              id="nicNum"
            />
            <Form.Control.Feedback type="invalid">
              Select NIC Number!
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Owner Name</Form.Label>
          <Form.Control type="text" placeholder="Owner Name" required id="manufacYear"/>
          <Form.Control.Feedback type="invalid">
            Select Owner's name!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>Manufactured Year</Form.Label>
          <Form.Control type="text" placeholder="Manufactured Year" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Manufactured Year.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Vehicle Type</Form.Label>
          <Form.Control type="text" placeholder="Vehicle Type" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Vehicle Type.
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

export default AddVehicle;

//render(<FormExample />);

//</div>

  //  );

//}