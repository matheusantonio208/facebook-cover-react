import React, { Component } from 'react';
import logo from '../../public/img/logo.png';
import Postlist from './Postlist';

class Header extends Component{

  render(){
    return(
      <>
      <ul class="header">
        <li class="logo"><img src={logo} /></li>
        <li class="profile"><span class="material-icons">face</span> Meu Perfil</li>
      </ul>

      <Postlist />
      </>
    )
  }
}

export default Header;