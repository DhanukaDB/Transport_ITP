import './App.css';
import Header from './components/Header';
import AddVehicle from './components/AddVehicle';
import { BrowserRouter as BRouter, Switch, Route } from "react-router-dom";
import Home from './components/Home';

const App =()=> {
  return (
  
       <BRouter>
          <main className="page-body-content">
            <Header/>
            <Switch>
              <Route exact path="/addvehicle" component={AddVehicle} />
            </Switch>
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </main>
          
        </BRouter> 
      );
    };
   

export default App;
