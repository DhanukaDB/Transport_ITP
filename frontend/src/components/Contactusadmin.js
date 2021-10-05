import React, {Component} from "react";
import axios from "axios";


export default class Contactusadmin extends Component{

    constructor(props){
        super(props);
        this.state={
            email:"",
            comment:"",
        }
    }

    handleInputChange = (e) => {
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }


    onSubmit = (e) =>{
        e.preventDefault();

        const {email,comment} = this.state;

        const isValid = this.validate();
        if(isValid){

        const data = {
            email:email,
            comment:comment
            
        }
        console.log(data)

        axios.post("/driver/save", data).then((res)=>{
            if(res.data.success){
                alert("Driver Added!")
                this.setState(
                    {
                        email:"",
                        comment:""}
                       
                )
            }
        })
    }
    }

    render() {
        return(

             <div className="driverHome">

        
            <div className="container">
                <br/>

                <h1 className="h3 mb-3 font-weight-normal">Contact Us</h1>
                    <form className="needs-validation" noValidate>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}}>E-Mail</label>
                            <input type="text" 
                                   className="form-control"
                                   name="email"
                                   value={this.state.email}
                                   onChange={this.handleInputChange} ></input>
                                  
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}}>Comment</label>
                            <input type="text" 
                                   className="form-control"
                                   name="comment"
                                   value={this.state.comment}
                                   onChange={this.handleInputChange} ></input>
                                   
                        </div>

                        

                        <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                            <i className="far fa-save"></i>&nbsp; Save
                        </button>

                    </form>
            </div>

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