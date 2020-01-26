import React from 'react'; 
import './Home.css';
import { Link } from 'react-router-dom'
import NavBar from './NavBar'; 
import {
      Collapse,
      Navbar,
      NavbarToggler,
      NavbarBrand,
      Nav,
      NavItem,
      NavLink,
      UncontrolledDropdown,
      DropdownToggle,
      DropdownMenu,
      DropdownItem } from 'reactstrap';


class Home extends React.Component{
    render(){
        const isBackgroundRed = true;
        return(
           
         
            <div>
            <NavBar>  </NavBar>
            
            
            <img src={require('./attempt4.jpeg')} />
            <header>
                More Information on Recycling:
            </header>
            <ul>
                <li>
            <a
                className = "App-link"
                href= "https://www.epa.gov/recycle"
                target = "_blank"
                rel = "noopener noreferrer">
                    https://www.epa.gov/recycle
                </a>
                </li>
                <li>
            <a
                className = "App-link"
                href= "https://www.bryantx.gov/environmental-services/recycling-programs/"
                target = "_blank"
                rel = "noopener noreferrer">
                    Recycling in the city of Bryan
                </a>
                </li>
                <li>
            <a
                className = "App-link"
                href= "https://www.cstx.gov/departments___city_hall/publicworks/solid_waste_recycling"
                target = "_blank"
                rel = "noopener noreferrer">
                    Recycling in the city of College Station
                </a>
                </li>
               </ul>
            
          </div>
       
          
        

           
        )

    }
}

export default Home; 