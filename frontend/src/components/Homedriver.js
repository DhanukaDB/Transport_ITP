import React, {Component} from "react";
import axios from "axios";
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';


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
        driver.did.includes(searchKey)
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



createPDF = (did,fName,lName,age,address) =>{
  console.log(did);
  console.log(fName);
  console.log(lName);
  console.log(age);
  console.log(address);

const unit = "pt";
const size = "A4"; //page size
const orientation = "landscape";
const marginLeft = 40;
const doc = new jsPDF( orientation , unit , size ); //create document
const title = `| Siyatha - Reservations |- Driver ID: ${did} `;
const fNames = `Driver First Name: ${fName} `;
const lNames = `Driver Last Name: ${lName} `;
const ages = `Driver Age: ${age} `;
const addresses = `Driver Address: ${address} `;

const image =  "https://res.cloudinary.com/hidl3r/image/upload/v1633023488/itp/red_travel_bus_clip_art_12881_tfuz8f.jpg"; 
const back ="https://res.cloudinary.com/hidl3r/image/upload/v1633023476/itp/traveling_bus_icon_classical_flat_design_6840690_c5ttaf.jpg";
const left = 30;
const top = 8;
const imgWidth = 100;
const imgHeight = 100;   
const lefts = 500;
const tops = 300;
const imgWidths = 300;
const imgHeights = 300;
doc.setFontSize( 20 );
doc.text (150, 40,title);
doc.text(60, 200, fNames);  
doc.text(60, 250, lNames);  
doc.text(60, 300, ages);  
doc.text(60, 350, addresses);  

doc.addImage(image, 'PNG', left, top, imgWidth, imgHeight);
doc.addImage(back, 'PNG', lefts, tops, imgWidths, imgHeights);
 doc.save (`Vehicle${did}.pdf`)
}

    



  render(){
    return(

      <div className="driverHome">

            <div>
                <ul className="nav nav-tabs">
                    
                    <li className="nav-item">
                        <a className="nav-link" href="/driverhome">Drivers</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/adminPanel">Admin Panel</a>
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
            <input className="form-control" type="search" placeholder="Search by ID" name="searchQuery" onChange={this.handleSearchArea}></input>
        </div>

        <table className="table" style={{ color: 'white' }}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Driver ID</th>
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

                  <td>{driver.did}</td>
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

                      <button variant="outline-dark" onClick = {()=>this.createPDF(driver.did,driver.fName,driver.lName,driver.age,driver.address)} >Generate PDF</button>
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

