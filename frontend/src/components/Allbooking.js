import React, {Component} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button'


export default class Allbooking extends Component{
  constructor(props){
    super(props);

    this.state={
      bookings:[]
    };
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
          <a className ="btn btn-danger"  href="#" onClick={()=>this.onDelete(bookings._id)} >Delete</a>
      
      </td>
         </tr>
    ))}
    
         </tbody></table>
         <button className ="btn btn-success"><a href = "/addRes" style={{textDecoration:'none',color:'Black'}}>Reserve New Seat</a></button>&nbsp;&nbsp;
         <Button variant="secondary"><a href = "/reservationHome" style={{textDecoration:'none',color:'Black'}}>Back to Home</a></Button>

 </div></div>
    )

}}