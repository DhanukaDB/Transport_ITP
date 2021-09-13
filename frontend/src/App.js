import './App.css';
import Header from './components/Header';
import AddVehicle from './components/AddVehicle';
import AllVehicle from './components/AllVehicle';
import VehicleDetails from './components/VehicleDetails';
import { BrowserRouter as BRouter, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import Footer from './components/Footer';
import HireBus from './components/HireBus';
import AboutUS from './components/AboutUs';
import EditVehicleDetails from './components/EditVehicleDetails';
import VHome from './components/VehicleHome';
import DeleteVehicle from './components/DeleteVehicle';

//it20190798
import Signin from './components/Signin';
import Signup from './components/Signup';
import Profile from './components/Profile';
import AllPassengers from './components/AllPassengers';


//IT20205256
import AddPayment from './components/AddPayment';
import AllPayment from './components/AllPayments';
import Aboutus from './components/AboutUs';
import Successpage from './components/Success';
import UpdatePayment from './components/Updatepayment';

//IT20197032
import AddEmployee from './components/AddEmployee';
import EmployeeList from './components/EmployeeList';
import AddSalaryDetails from './components/AddSalaryDetails';
import FetchEmployee from './components/FetchEmployee';
import UpdateEmployee from './components/UpdateEmployee';
import DeleteEmployee from './components/DeleteEmployee';
import SalaryDetailsList from './components/SalaryDetailsList';
import EmployeeManagementHome from './components/EmployeeManagementHome';
import AdminPanel from './components/AdminPanel';

const App =()=> {
  return (
  
       <BRouter>
          <main className="page-body-content">
          <Header/>
            <Switch>
              <Route exact path="/addvehicle" component={AddVehicle} />
            </Switch>
            <Switch>
              <Route exact path="/allvehicle" component={AllVehicle} />
            </Switch>
            <Switch>
              <Route exact path="/vehicledetails/:id" component={VehicleDetails} />
            </Switch>
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
            <Switch>
              <Route exact path="/hirebus" component={HireBus} />
            </Switch>
              <Switch>
              <Route exact path="/aboutus" component={AboutUS} />
            </Switch>
            <Switch>
              <Route exact path="/editvdetails" component={EditVehicleDetails} />
            </Switch>
            <Switch>
              <Route exact path="/vhome" component={VHome} />
            </Switch>
            <Switch>
              <Route exact path="/vehicledelete/:id" component={DeleteVehicle} />
            </Switch>
            

            <Route path = "/signin">
         <Signin/>
      </Route>

      <Route path = "/signup">
          <Signup/>
      </Route>

       <Route path = "/profile/:email" exact>
          <Profile/>
       </Route>
       
       <Route path = "/AllPassengers">
          <AllPassengers/>
       </Route>
      

       



       {/* Kishan's */}
       <Switch>
              <Route exact path="/about" component={Aboutus} />
            </Switch>
            <Switch>
              <Route exact path="/addpayment" component={AddPayment} />
            </Switch>
            <Switch>
              <Route exact path="/allpayment" component={AllPayment} />
            </Switch>
            <Switch>
              <Route exact path="/success" component={Successpage} />
            </Switch>
            <Switch>
              <Route exact path="/updatepayment" component={UpdatePayment} />
            </Switch>
          

         {/* Sayuri */}
        
            <Switch>
              <Route path="/adminPanel" exact>
                <AdminPanel/>
              </Route> 
            </Switch> 
            <Switch> 
              <Route path="/employeeManagementHome" exact>
                <EmployeeManagementHome/>
              </Route>
            </Switch>
            <div className="body"> 
            <Switch><Route exact path="/add" component={AddEmployee}/></Switch>
            <Switch><Route exact path="/update/:id" component={UpdateEmployee}/></Switch>
            <Switch><Route exact path="/delete/:id" component={DeleteEmployee}/></Switch>
            <Switch><Route exact path="/enter" component={AddSalaryDetails}/></Switch>
            <Switch><Route exact path="/get/:id" component={FetchEmployee}/></Switch>
            <Switch><Route exact path="/allemployee" component={EmployeeList}/></Switch>
            <Switch><Route exact path="/getall" component={SalaryDetailsList}/></Switch>
            </div>
         



            <Footer/> 

          </main>
        </BRouter> 
      );
    };

    
   

export default App;
