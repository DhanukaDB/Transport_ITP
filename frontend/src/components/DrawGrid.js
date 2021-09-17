import React,{Component} from "react";
import  AvailableList from '../components/AvailableList';
import  ReservedList  from '../components/ReservedList';
export default class DrawGrid extends Component {

    render() {
      return (
        <div className="container">
          <h2></h2>
          <table className="grid">
            <tbody>
              <tr>
                {this.props.seat.map((row) => (
                  <td
                    className={
                      this.props.reserved.indexOf(row) > -1
                        ? "reserved"
                        : "available"
                    }
                
                    key={row}
                    onClick={(e) => this.onClickSeat(row)}
                  >
                    {row}&nbsp;{" "}
                  </td>
                ))}
              </tr>
              &nbsp;
            </tbody>
          </table>

          {/*button*/}
          <div className="bt12">
          <bt12><center><a href = "/addRes" style={{textDecoration:'none',color:'Black'}}>Reserve My Seat</a></center></bt12>
        </div>

          <AvailableList available={this.props.available} />
          <ReservedList reserved={this.props.reserved} />
        </div>
      );
    }
  
    onClickSeat(seat) {
      this.props.onClickData(seat);
    }
  }