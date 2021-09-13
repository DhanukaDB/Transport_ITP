import React, {Component} from 'react';
import axios  from 'axios';
import Card from 'react-bootstrap/Card'

export default class BookingDetails extends Component{
    constructor(props){
        super(props);
        this.state = {
            booking:{}
        };
    }
componentDidMount(){
    //save id to variable id to get booking from the all bookings
    const id = this.props.match.params.id;
    
    axios.get(`/post/${id}`).then((res)=>{
        if(res.data.success){
            this.setState({
                booking:res.data.post
            });
            console.log(this.state.post);

        }
    });
}
  render(){
    const{name,email,route,date,Time,from,to,seatno} = this.state.booking;

return(
<Card className="text-left"> 
<div className ="container py-5">
  <h2>Hi !! Your Ticket is Ready......</h2>
<div style ={{margineTop:'30px'}}>
    
       <h4>{name}</h4>
<hr/>

 <dl className = "row">
    
       <dt className ="col-sm-3">Email</dt>
       <dd className ="col-sm-9">{email}</dd>
       
       <dt className ="col-sm-3">Route</dt>
       <dd className ="col-sm-9">{route}</dd>

       <dt className ="col-sm-3">Date</dt>
       <dd className ="col-sm-9">{date}</dd>


       <dt className ="col-sm-3">Time</dt>
       <dd className ="col-sm-9">{Time}</dd>


       <dt className ="col-sm-3">From</dt>
       <dd className ="col-sm-9">{from}</dd>


       <dt className ="col-sm-3">To</dt>
       <dd className ="col-sm-9">{to}</dd>


       <dt className ="col-sm-3">Seat no</dt>
       <dd className ="col-sm-9">{seatno}</dd>
</dl>
</div>

</div>
</Card>
)}}