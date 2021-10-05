import React, {Component} from "react";
import axios from "axios";


export default class EditDriver extends Component{


    constructor(props){
        super(props);
        this.state={
            did:"",
            fName:"",
            lName:"",
            age:"",
            email:"",
            comment:"",
            address:"",
            didError:"",
            fNameError:"",
            lNameError:"",
            ageError:"",
            addressError:""
        }
    }

    handleInputChange = (e) => {
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    validate = () => {
            let didError="";
            let fNameError="";
            let lNameError="";
            let ageError="";
            let addressError="";

            if(!this.state.did) {
                didError = 'This field cannot be Empty!';
            }
            if(!this.state.fName) {
                fNameError = 'First Name cannot be Empty!';
            }
            if(!this.state.lName) {
                lNameError = 'Last Name cannot be Empty!';
            }
            if(!this.state.age) {
                ageError = 'This field cannot be Empty!';
            }
            if(!this.state.address) {
                addressError = 'This field cannot be Empty!';
            }

            if(fNameError || didError || lNameError || ageError || addressError){
                this.setState({didError,fNameError,lNameError,ageError,addressError});
                return false;
            }
            return true;
    };

    onSubmit = (e) =>{
        
        e.preventDefault();
        const id = this.props.match.params.id;

        const {did,fName,lName,age,address} = this.state;

        const isValid = this.validate();
        if(isValid){

        const data = {
            did:did,
            fName:fName,
            lName:lName,
            age:age,
            
            address:address,
            
        }
        console.log(data)

        axios.put(`/driver/update/${id}`, data).then((res)=>{
            if(res.data.success){
                alert("Driver Updated!")
                this.setState(
                    {
                        did:"",
                        fName:"",
                        lName:"",
                        age:"",
                        
                        address:""
                    }
                )
            }
        })
    }
    }





    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get(`/driver/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    did:res.data.driver.did,
                    fName:res.data.driver.fName,
                    lName:res.data.driver.lName,
                    age:res.data.driver.age,
                    address:res.data.driver.address
                });

                console.log(this.state.driver);
            }
        });
    }

    



    render() {
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


            <div className="col-md-8 mt-4 mx-auto">
            <h1 className="h3 mb-3 font-weight-normal">Edit Drivers</h1>
                <form className="needs-validation" noValidate>

                <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Driver ID</label>
                        <input type="text" 
                               className="form-control"
                               name="did"
                               value={this.state.did}
                               onChange={this.handleInputChange} ></input>
                               <div style={{fontSize:20, color: "red"}}>{this.state.didError}</div>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>First Name</label>
                        <input type="text" 
                               className="form-control"
                               name="fName"
                               value={this.state.fName}
                               onChange={this.handleInputChange} ></input>
                               <div style={{fontSize:20, color: "red"}}>{this.state.fNameError}</div>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Last Name</label>
                        <input type="text" 
                               className="form-control"
                               name="lName"
                               value={this.state.lName}
                               onChange={this.handleInputChange} ></input>
                               <div style={{fontSize:20, color: "red"}}>{this.state.lNameError}</div>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Age</label>
                        <input type="number" 
                               className="form-control"
                               name="age"
                               value={this.state.age}
                               onChange={this.handleInputChange} ></input>
                               <div style={{fontSize:20, color: "red"}}>{this.state.ageError}</div>
                    </div>

                    

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Address</label>
                        <input type="text" 
                               className="form-control"
                               name="address"
                               value={this.state.address}
                               onChange={this.handleInputChange} ></input>
                               <div style={{fontSize:20, color: "red"}}>{this.state.addressError}</div>
                    </div>

                    

                    <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                        <i className="far fa-save"></i>&nbsp; Update
                    </button>

                </form>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        </div>
        )
    }
}