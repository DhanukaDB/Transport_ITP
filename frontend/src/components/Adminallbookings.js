import React, {Component} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button'
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';



export default class Allbooking extends Component{
  constructor(props){
    super(props);

    this.state={
      bookings:[]
    };
  }
  getPDF = (_id,name,email,route,date,Time,from,to,seatno)=>{
console.log(_id);
console.log(name);
console.log(email);
console.log(route);
console.log(date);
console.log(Time);
console.log(to);
console.log(from);
console.log(seatno);
 
const unit = "pt";
const size = "A4"; //page size
const orientation = "landscape";
const marginLeft = 40;
const doc = new jsPDF( orientation , unit , size ); //create document
const title = `| Siyatha - Reservation   Reservation ID: ${_id} `;
name = `name: ${name} `;
email = `email: ${email} `;
route = `route: ${route} `;
date = `date: ${date} `;
Time = `Time: ${Time} `;
to = `to: ${to} `;
from = `from: ${from} `;
seatno = `seatno: ${seatno} `;

//const image =  "https://res.cloudinary.com/hidl3r/image/upload/v1633023488/itp/red_travel_bus_clip_art_12881_tfuz8f.jpg"; 
    //const back ="https://res.cloudinary.com/hidl3r/image/upload/v1633023476/itp/traveling_bus_icon_classical_flat_design_6840690_c5ttaf.jpg";
    const left = 30;
    const top = 8;
    const imgWidth = 100;
    const imgHeight = 100;   
    const lefts = 500;
    const tops = 300;
    const imgWidths = 300;
    const imgHeights = 300;
    doc.setFontSize( 20 );
    doc.text (150, 40,title);
    doc.text(60, 150, name);  
    doc.text(60, 200, email);  
    doc.text(60, 250, route);  
    doc.text(60, 300, date);  
    doc.text(60, 350, Time); 
    doc.text(60, 400, from); 
    doc.text(60, 450, seatno); 
    
    //doc.addImage(image, 'PNG', left, top, imgWidth, imgHeight);
   // doc.addImage(back, 'PNG', lefts, tops, imgWidths, imgHeights);
    //doc.text(60, 575, success);

       doc.save (`${_id}'s Reservation.pdf`)
    }
  

  componentDidMount(){
    this.retrieveBookings();
  }

retrieveBookings(){
  axios.get("/bookings").then(res=>{
    if(res.data.success){
      this.setState({
        bookings:res.data.existingBookings
      });
    
    }

  });
}  
//create delete button
onDelete =(id)=>{
  axios.delete(`/post/delete/${id}`).then((res)=>{
    alert("Delete Reservation Sucessfully");
    this.retrieveBookings();
  })
}

//create  search by email
filterData(bookings,searchKey){
  const result = bookings.filter((post)=>
  post.email.includes(searchKey)
  )
  this.setState({bookings:result})
}
handleSearchArea = (e)=>{
 const searchKey = e.currentTarget.value;

 axios.get("/bookings").then(res=>{
    if(res.data.success){
      this.filterData(res.data.existingBookings,searchKey)
      }
    });

  }
render(){
    return( 

   <div className= "container py-5">
    <div className="row">
      <div className="col-lg-9 mt-2 mb-2">
        <h2>ALL BOOKINGS</h2>  
        </div>
        <br></br>


<div className="book">
<div className="col-lg-3 mt-2 mb-2">
</div>
<input
className ="form-control"
type ="search"
placeholder="Search"
onChange={this.handleSearchArea}>
</input>

</div>
       <table className ="table table-hover" style={{marginTop:'40'}}>
  <thead>
    <tr>
        <th scope = "col">RefNo</th>
        <th scope = "col">Name</th>
        <th scope = "col">Email</th>
        <th scope ="col">Bus Route Name</th>
        <th scope ="col">Date</th>
        <th scope ="col">Time</th>
        <th scope ="col">From</th>
        <th scope ="col">To</th>
        <th scope ="col">Seat No</th>
      </tr>
    </thead>

    <tbody>
      
    { this.state.bookings.map((bookings,index)=>(
      <tr key={index}>
          
            <th scope="row"> {index+1}</th>
            <td>
                <a href={`/postRes/${bookings._id}`} style={{textDecoration:'none'}} >
              {bookings.name}</a></td>  
              <td>{bookings.email}</td>
              <td>{bookings.route}</td>
              <td>{bookings.date}</td>
              <td>{bookings.Time}</td>
              <td>{bookings.from}</td>
              <td>{bookings.to}</td>
              <td>{bookings.seatno}</td>
        <td>
          
          <a className ="btn btn-warning" href={`/editRes/${bookings._id}`}>Edit</a>&nbsp;
          <a className ="btn btn-danger"  href="#" onClick={()=>this.onDelete(bookings._id)} >Delete</a>&nbsp;
          <Button variant="success" onClick={()=>this.getPDF(bookings._id,bookings.name,bookings.email,bookings.route,bookings.date,bookings.Time,bookings.to,bookings.from,bookings.seatno)} >Generate PDF</Button>

      
      </td>
         </tr>
    ))}
    
         </tbody></table>
         
         <Button variant="primary"><a href = "/reservationHome" style={{textDecoration:'none',color:'Black'}}>Back to Home</a></Button>&nbsp;
         <Button variant="primary"><a href = "/allrequest" style={{textDecoration:'none',color:'Black'}}> All Requests</a></Button>&nbsp;
         
 </div></div>
    )

}}