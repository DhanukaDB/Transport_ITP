import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import Viewtable from "./Viewtable";
import Viewslide from "./Viewslide";
function Timetablemain(){

    return(
        <div style={{paddingBottom:"2vh",paddingTop:"2vh"}} >

<Container>
<Row>
    <Col><Viewtable/></Col>
    <Col><Viewslide/></Col>
  </Row>
</Container>
</div>
    )
}
export default Timetablemain;