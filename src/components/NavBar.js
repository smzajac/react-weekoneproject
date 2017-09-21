import React, { Component } from 'react';
import {Navbar,NavbarToggler,NavbarBrand  } from 'reactstrap';

export default class NavBar extends Component{
  render(){
    return(
      //need reactstrap here
      <Navbar className="nav-bar">
         <NavbarBrand className="nav-text">Play What?!</NavbarBrand>
       </Navbar>
    )
  }
}
