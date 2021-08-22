import './App.css';
import Header from './components/Header';
import AddVehicle from './components/AddVehicle';
import { BrowserRouter as BRouter, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import Footer from './components/Footer';
import HireBus from './components/HireBus';
import Faq from './components/Faq';
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
            <Switch>
              <Route exact path="/hirebus" component={HireBus} />
            </Switch>
            <Switch>
              <Route exact path="/faq" component={Faq} />
            </Switch>
            <Footer/> 
          </main>
        </BRouter> 
      );
    };

    
   

export default App;
