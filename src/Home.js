import React from 'react'; 
import './Home.css';
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
                Benefits of Recyling:
            </header>
            
          </div>
       
          
        

           
        )

    }
}

export default Home; 