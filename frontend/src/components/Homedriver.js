import React, {Component} from "react";
import axios from "axios";


export default class Home extends Component {

  constructor(props){
    super(props);

    this.state = {
        driver:[]
    };
}

componentDidMount(){
    this.retrieveDrivers();
}

retrieveDrivers() {
    axios.get("driver").then(res =>{
        if(res.data.success){
            this.setState({
                driver:res.data.existingDrivers
            });
            console.log(this.state.driver)
        }
    });
}



onDelete = (id)=>{
    axios.delete(`/driver/delete/${id}`).then((res)=>{
        alert("Deleted Successfully!")
        this.retrieveDrivers();
    })
}


filterData(driver,searchKey){
    const result = driver.filter((driver)=>
        driver.topic.include(searchKey)
    )

    this.setState({driver:result})
}


handleSearchArea = (e) =>{
    const searchKey= e.currentTarget.value;

    axios.get("/driver").then(res =>{
        if(res.data.success){
        this.filterData(res.data.existingDrivers,searchKey)
        }
    })
}

    



  render(){
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


      <div className="container">
        <div className="row">
            <div className="col-lg-9 mt-2 mb-2">
                <h4>All Drivers</h4>
            </div>
        </div>
        <div className="col-lg-3 mt-2 mb-2">
            <input className="form-control" type="search" placeholder="Search" name="searchQuery" onChange={this.handleSearchArea}></input>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Age</th>
              <th scope="col">Address</th>
              <th scope="col">Action</th>
            </tr>
          </thead>

            <tbody>
              {this.state.driver.map((driver,index)=>(
                <tr key={index}>
                  <th scope= "row">{index+1}</th>
                    <td>
                        <a href={`/driverdetails/${driver._id}`} style={{textDecoration:'none'}}>
                        {driver.fName}
                        </a>
                    </td>
                    <td>{driver.lName}</td>
                    <td>{driver.age}</td>
                    <td>{driver.address}</td>
                      <a className="btn btn-outline-warning btn-sm" href={`/editdriver/${driver._id}`} role="button">
                        <i className="fas fa-edit"></i>&nbsp;Edit
                      </a>
                      &nbsp;
                    
                      <a type="button" className="btn btn-outline-danger btn-sm" href="#" onClick={()=>this.onDelete(driver._id)}>
                        <i className="far fa-trash-alt"></i>&nbsp;Delete
                      </a>
                </tr>
              ))}
            </tbody>
        </table>
        
        <a type="button" className="btn btn-success" href="/adddriver" style={{textDecoration:'none', color:'white'}}>
                        <i className="far fa-plus-square"></i>&nbsp; Create New Driver
        </a>
        
      </div>

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
      </div>
    )
  }
}

