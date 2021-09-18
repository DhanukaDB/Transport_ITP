import React,{Component} from 'react';
import '../App.css';
import  DrawGrid  from '../components/DrawGrid';

export default class Seat extends Component {
    constructor() {
      super();
      this.state = {
        seat: [
    
          "01","02","03","04","05","06","07","08","09","10","11","12",
          "13","14","15","16","17","18","19","20","21","22","23","24",  
          "25","26","27","28","29","30","31","32","33","34","35","36", 
          "37","38","39","40","41","42","43","44","45","46","47","48", 
          "49","50","51","52","53","54","55","56","57","58","59","60", 
          ],
        seatAvailable: [
            "01","02","03","04","05","06","07","08","09","10","11","12",
            "13","14","15","16","17","18","19","20","21","22","23","24",  
            "25","26","27","28","29","30","31","32","33","34","35","36", 
            "37","38","39","40","41","42","43","44","45","46","47","48", 
            "49","50","51","52","53","54","55","56","57","58","59","60", 
        ],
        seatReserved: []
      };
    }
  
    onClickData(seat) {
      if (this.state.seatReserved.indexOf(seat) > -1) {
        this.setState({
          seatAvailable: this.state.seatAvailable.concat(seat),
          seatReserved: this.state.seatReserved.filter((res) => res != seat)
        });
      } else {
        this.setState({
          seatReserved: this.state.seatReserved.concat(seat),
          seatAvailable: this.state.seatAvailable.filter((res) => res != seat)
        });
      }
    }
  
    render() {
      return (
        <div >
          <h1>Let's Reserve Your Preferred Seat</h1>
          <h4>&nbsp;Seat number 01 starting from left hand side at the Enterance of bus</h4>
          
          <DrawGrid
            seat={this.state.seat}
            available={this.state.seatAvailable}
            reserved={this.state.seatReserved}
            onClickData={this.onClickData.bind(this)}
          />
         
        </div>
      );
    }
  }
  
  
  