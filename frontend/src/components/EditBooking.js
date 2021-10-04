import React, {Component} from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default class EditBooking extends Component{
  constructor(props){
    super(props);

     this.state = {
      name :"",
      email : "",
      route: "",
      date : "",
      Time : "",
      from : "",
      to :"",
      seatno :""
    }

    }
handleInputChange = (e) =>{
  const {name,value}  = e.target;

 this.setState({
   ...this.state,
   [name]:value
 })
}
   
onSubmit=(e)=>{
 
  e.preventDefault();
  const id = this.props.match.params.id;

  const{name,email,route,date,Time,from,to,seatno}=this.state;

  const data={
    name : name,
    email :email,
    route: route,
    date :date,
    Time : Time,
    from :from,
    to : to ,
    seatno :seatno

  }
console.log(data)

axios.put(`/post/Update/${id}`,data).then((res)=>{
  alert("Details Updated Sucessfully");
  if(res.data.sucess){
    this.setState(
      {
        name :"",
        email : "",
        route: "",
        date : "",
        Time : "",
        from : "",
        to :"",
        seatno :""

      }
    )
  }
})
}
componentDidMount(){
  const id = this.props.match.params.id;
  
  axios.get(`/post/${id}`).then((res)=>{
      if(res.data.success){
          this.setState({
              name:res.data.post.name,
              email:res.data.post.email,
              route:res.data.post.route,
              date:res.data.post.date,
              Time:res.data.post.Time,
              from:res.data.post.from,
              to:res.data.post.to,
              seatno:res.data.post.seatno
          });
          console.log(this.state.post);

      }
  })
}
  render(){
    return(
  
      <Card className="text-left"> 
      <div className ="reserve">
      <div className ="container py-5">
      <Card.Header><h4>Edit Details</h4></Card.Header>
      <Card.Body>
      <form >	
      <Card.Text>
      <div className="form-group" style={{marginBottom:'15px'}}>
      <label style={{marginBottom:'5px'}}>Name</label>
      <input type="text"
      className="form-control"
      name="name"
      placeholder="Enter Name"
      errorText={this.state.name}
      value={this.state.name}
      onChange={this.handleInputChange}/>
      </div>
          
        
      <div className="form-group" style={{marginBottom:'15px'}}>
      <label style={{marginBottom:'5px'}}>Email</label>
      <input type= "email"
      className="form-control"
      name="email"
      placeholder="Enter Email"
      value={this.state.email}
      onChange={this.handleInputChange}/>
      </div>
        
  <select onChange={this.handleInputChange}
  className="form-select"
  aria-label="Select Bus Route" 
  value={this.state.route}
  name="route"> required
    <option selected>Select Bus Route</option>
    <option value= "1 Colombo - Kandy">1 Colombo - Kandy</option>
    <option value= "4 Colombo - Matara">4 Colombo - Matara</option> 
    <option value= "79 Colombo - Nuwaraeliya">79 Colombo-Nuwaraeliya</option>
    <option value= " 8 Colombo - Katharagama"> 8 Colombo - Katharagama</option>
    <option value= "5 Colombo -  Kurunegala">5 Colombo - Kurunegala</option>
    <option value= "49 Colombo - Trincomale">49 Colombo -Trincomale</option>
    <option value= "15 Colombo - Anuradhapura">15 Colombo - Anuradhapura</option>
    <option value= "98 Colombo - Balangoda">15 Colombo - Balangoda</option>
    <option value= "87 Colombo - Vavuniaya">87 Colombo - Vavuniaya</option>
    <option value= "19 Colombo - Gampola">15 Colombo - Gampola</option>
    <option value= "2 Colombo - Matara">2 Colombo - Matara</option>
    </select>
    

      <div className="form-group" style={{marginBottom:'15px'}}>
      <label style={{marginBottom:'5px'}}>Date</label>
      <input type="Date"
      className="form-control"
      name="date"
      placeholder="Select Date"
      value={this.state.date}
      onChange={this.handleInputChange} />
      </div>
    
  <select onChange={this.handleInputChange}
  className="form-select"
  aria-label="Select Time" 
  value={this.state.Time}
  name="Time"> required
    <option selected>Select Time</option>
    <option value= "5.15AM">5.15AM</option>
    <option value= "5.45AM">5.45AM</option>
    <option value= "6.00AM">6.00AM</option>
    <option value= "6.15AM">6.15AM</option>
    <option value= "6.45AM">6.45AM</option>
    <option value= "7.20AM">7.20AM</option>
    <option value= "7.30AM">7.30AM</option>
    <option value= "8.00AM">8.00AM</option>
    </select>
      
    
      <div className="form-group" style={{marginBottom:'15px'}}>
      <label style={{marginBottom:'5px'}}>From</label>
      <input type="text"
      className="form-control"
      name="from"
      placeholder="Enter From"
      value={this.state.from}
      onChange={this.handleInputChange} />
      </div>
    
      <div className="form-group" style={{marginBottom:'15px'}}>
      <label style={{marginBottom:'5px'}}>To</label>
      <input type="text"
      className="form-control"
      name="to"
      placeholder="Enter To....."
      value={this.state.to}
      onChange={this.handleInputChange}/>
      </div>
    
      <div className="form-group" style={{marginBottom:'15px'}}>
      <label style={{marginBottom:'5px'}}>Seat No</label>
      <input type="text"
      className="form-control"
      name="seatno"
      placeholder="Enter Seat No"
      value={this.state.seatno}
      onChange={this.handleInputChange}/>
      </div>
    
      <Button variant="primary"><a style={{textDecoration:'none',color:'Black'}} onClick={this.onSubmit}>Update</a></Button>&nbsp;
    <Button variant="primary"> <a href = "/adminall" style={{textDecoration:'none',color:'Black'}}>Back to All Bookings</a></Button>
    </Card.Text>
    </form>
    
    </Card.Body>
      </div></div>
      </Card>
    
    )}}