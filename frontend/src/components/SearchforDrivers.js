import React, {Component} from "react";
import axios from "axios";
import "../assets/css/styles.css";


export default class searchfordrivers extends Component {

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




filterData(driver,searchKey){
    const result = driver.filter((driver)=>
        driver.fName.includes(searchKey)
    )

    this.setState({driver:result})
}


handleSearchArea = (e) =>{
    const searchKey= e.currentTarget.value;

    axios.get("driver").then(res =>{
        if(res.data.success){
        this.filterData(res.data.existingDrivers,searchKey)
        }
    })
}

    



  render(){
    return(

      <div className="backgroundDriver">

            <br></br>
            
            

      <div className="container">
        <div className="row">
            <div className="col-lg-9 mt-2 mb-2">
                <h4 className="topic1" style={{ color: 'white' }}>All Drivers</h4>
                <br></br>
            </div>
            
        </div>
        <div className="col-lg-3 mt-2 mb-2">
            <input className="form-control" type="search" placeholder="Search by Name" name="searchQuery" onChange={this.handleSearchArea}></input>
            <br></br><br></br>
        </div>

        <table className="table table-striped table-dark" style={{ color: 'white' }}>
          <thead className="thead-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Driver ID</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Age</th>
              <th scope="col">Address</th>
              
            </tr>
          </thead>

            <tbody>
              {this.state.driver.map((driver,index)=>(
                <tr key={index}>
                  <th scope= "row">{index+1}</th>

                    <td>{driver.did}</td>
                    <td>{driver.fName}</td>
                    <td>{driver.lName}</td>
                    <td>{driver.age}</td>
                    <td>{driver.address}</td>
                      
                </tr>
              ))}
            </tbody>
        </table>
        
        
        
      </div>

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

