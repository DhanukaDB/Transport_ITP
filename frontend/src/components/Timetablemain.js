import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import Timetable from "./Timetable";
import Timeslides from "./Timeslides";
function Timetablemain(){

    return(

<Container>
<Row>
    <Col><Timetable/></Col>
    <Col><Timeslides/></Col>
  </Row>
</Container>
    )
}
export default Timetablemain;