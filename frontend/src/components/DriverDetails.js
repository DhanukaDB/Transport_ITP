import React, {Component} from "react";
import axios from "axios";

export default class DriverDetails extends Component{
    constructor(props){
        super(props);

        this.state={
            driver:{}
        };
    }

    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get(`/driver/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    driver:res.data.driver
                });

                console.log(this.state.driver);
            }
        });
    }

    render() {
        const {fName, lName, age, address} = this.state.driver;
        return(

            <div>

            <div>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link disabled" aria-current="page" href="#">Siyatha Transports</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/driverhome">Drivers</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/adminPanel">Home</a>
                    </li>
                    </ul>
            </div>


            <div style = {{marginTop:'20px'}}>




                <h4>{fName}</h4>
                <hr/>
            <dl className="row">
                <dt className="col-sm-3">Last Name</dt>
                <dd className="col-sm-9">{lName}</dd>

                <dt className="col-sm-3">Age</dt>
                <dd className="col-sm-9">{age}</dd>

                <dt className="col-sm-3">Address</dt>
                <dd className="col-sm-9">{address}</dd>

            </dl>
            
            </div>

           

            </div>


        )
    }
}