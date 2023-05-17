import { BrowserRouter as Router, NavLink , Route ,Link, Routes} from "react-router-dom";
import EduPage from "./Components/EduPage";
import MainPage from "./Components/MainPage";
import './App.css';
import ava from './img/ava.jpg'
import Projects from "./Components/Projects";
import Button from "./Components/Button";

function App() {
  return (
    <div className="App">
        <header className="submenu">
          <img src={ava} className="submenu-img"/>     
          <div className="name"> Olena Andriushchenko</div> 
          <div className="position"> Frontend developer</div> 
          <Button/>
        </header>
      <div className="main-block">
      <Router >
        <menu >
            <div className="menu-container">
               <div> <NavLink  to="/" >Projects</NavLink > </div> 
               <div> <NavLink  to="MainPage" >About</NavLink > </div> 
               <div> <NavLink  to="EduPage" >Edukation</NavLink > </div>
            </div>
                
            
            
        </menu>
        <Routes>
          <Route exact path="/" element={<Projects/>} />
          
          <Route exact path="MainPage" element={<MainPage />} />
          <Route exact path="EduPage" element={<EduPage />} />
        
        </Routes>
     
        </Router>
      </div>
   

    
     
    </div>
  );
}

export default App;
