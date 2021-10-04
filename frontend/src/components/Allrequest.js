import React, {Component} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button'



export default class Allrequest extends Component{
  constructor(props){
    super(props);

    this.state={
    addrequests:[]
    };
  }


  /////////////
  componentDidMount(){
    this.retrieveAddrequests();
  }

retrieveAddrequests(){
  axios.get("/addrequests").then(res=>{
    if(res.data.success){
      this.setState({
        addrequests:res.data.existingAddrequests
      });
    
    }

  });
}  


//create  search by email
filterData(addrequests,searchKey){
  const result = addrequests.filter((post)=>
  post.email.includes(searchKey)
  )
  this.setState({addrequests:result})
}
handleSearchArea = (e)=>{
 const searchKey = e.currentTarget.value;

 axios.get("/addrequests").then(res=>{
    if(res.data.success){
      this.filterData(res.data.existingAddrequests,searchKey)
      }
    });
}

render(){
    return( 

   <div className= "container py-5">
    <div className="row">
      <div className="col-lg-9 mt-2 mb-2">
        <h2>ALL Edit Delete Requests</h2>  
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
        <th scope ="col">Comment</th>
      </tr>
    </thead>

    <tbody>
      
    { this.state.addrequests.map((addrequests,index)=>(
      <tr key={index}>
          
            <th scope="row"> {index+1}</th>
            <td>
                <a href={`/postRes/${addrequests._id}`} style={{textDecoration:'none'}} >
                {addrequests.name}</a></td>  
              <td>{addrequests.email}</td>
              <td>{addrequests.comment}</td>
        <td>
          
          
      
      </td>
         </tr>
    ))}
    
         </tbody></table>
         
         <Button variant="primary"><a href = "/adminall" style={{textDecoration:'none',color:'Black'}}>Back to All Bookings</a></Button>

 </div></div>
    )

}}