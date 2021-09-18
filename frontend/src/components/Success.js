import React from "react";
import { Button } from "react-bootstrap";

export default function Successpage (){

function returnpage(e){
    e.preventDefault();

    window.location=`/`;
}
    return(
    <div className="succeedpay">
        <h3 >Your payment was Successful</h3>
        <Button onClick={returnpage} className="rethome"> Back to home page</Button>
    </div>
)
}
