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
            <Footer/> 
            <Switch>
              <Route exact path="/aboutus" component={AboutUS} />
            </Switch>
          </main>
        </BRouter> 
      );
    };

    
   

export default App;
