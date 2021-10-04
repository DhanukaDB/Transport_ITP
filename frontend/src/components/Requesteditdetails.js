import React,{Component} from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {Form} from "react-bootstrap"




export default class Requesteditdeletedetails extends Component{
  constructor(props){
    super(props);

     this.state = {
      name :"",
      email : "",
      comment:"",
     };

    }

     
handleInputChange = (e) =>{
  const {name,value}  = e.target;

 this.setState({
   ...this.state,
   [name]:value,
 });
 
};

onSubmit=(e)=>{
  e.preventDefault();
  
  const{name,email,comment}=this.state;

  
    const data={
      name : name,
      email : email,
      comment:comment
  
  }
console.log(data)

axios.post("/addrequest/save",data).then((res)=>{
  alert("Request send Sucessfully");
  if(res.data.sucess){
    this.setState(
      {
      name :"",
      email : "",
      comment:""

      }
    )
  }
})
}

  render(){
    return(
      
      <Card className="text-Left"> 
      <div className="reserve" >
      <div className= "container py-5">

    
  <Card.Header><h4>Delete Edit Requests</h4></Card.Header>
  <Card.Body>
  <Form >	
  <Card.Text>

  <div className="form-group" style={{marginBottom:'15px'}}>
  <label style={{marginBottom:'5px'}}>Name</label>
  <input type="text" required
  className="form-control"
  name="name" 
  placeholder="Enter Name"
  errorText={this.state.name}
  value={this.state.name}
  onChange={this.handleInputChange}/>


  </div>
  
  <div className="form-group" style={{marginBottom:'15px'}}>
  <label style={{marginBottom:'5px'}}>Email</label>
  <input type= "email" required
  className="form-control"
  name="email" 
  placeholder="Enter Email"
  value={this.state.email}
  onChange={this.handleInputChange}/>
  
  </div>

    
  <div className="form-group" style={{marginBottom:'15px'}}>
  <label style={{marginBottom:'5px'}}>Request</label>
  <textarea  style={{height:200}}required
  className="form-control"
  name="comment" 
  placeholder="Write Your Request......."
  errorText={this.state.comment}
  value={this.state.comment}
  onChange={this.handleInputChange}/>

 </div>


<Button variant="primary"> <a href = "/" type="submit" style={{textDecoration:'none',color:'Black'}}onClick={this.onSubmit}>Send Request</a></Button> &nbsp;


</Card.Text>
</Form>
</Card.Body>
</div></div>
  
  </Card>

)}}
