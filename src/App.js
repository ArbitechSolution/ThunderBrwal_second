
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Component/Navbar/Navbar"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FooterDown from './Component/FooterDown/FooterDown';
import Footer from './Component/Footer/Footer';
import Home from './Home';
import StakePages from './StakePages';
import Mintpage from './Mintpage';
import Traitspage from './Traitspage';
import BreedPage from './BreedPage';
function App() {
  return (
    <div className="App">
      <ToastContainer/>
      {/* <Router> */}
      <Router>
        {/* <Navbar /> */}
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/StakePages" component={StakePages}/>
        <Route exact path="/mint" component={Mintpage} />
        <Route exact path="/traits" component={Traitspage} />
        <Route exact path="/Breed" component={BreedPage} />
      </Switch>
        <FooterDown />
        <Footer />
      </Router>
        
    </div>
  );
}

export default App;
