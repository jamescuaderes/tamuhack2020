import React, { useState } from 'react';
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
  DropdownItem,
  NavbarText
} from 'reactstrap';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Recycle Truck</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/User">User</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Driver">Driver</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Login">Sign In</NavLink>
        </NavItem>
          </Nav>
          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;