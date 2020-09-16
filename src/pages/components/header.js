import React, { Component } from "react";
import "./header.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../images/logo.png";
import { withRouter } from "react-router";

class Header extends Component {
  handleClick = () => {
    this.props.history.goBack();
  };
  render() {
    return (
      <header className='Header'>
        <img src={logo} width={250} />
        <nav>
          <ul>
            <li>
              <NavLink exact to='/' activeClassName='is-selected'>
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink to='/videos' activeClassName='is-selected'>
                Videos
              </NavLink>
            </li>
            <li>
              <NavLink to='/contact' activeClassName='is-selected'>
                Contacto
              </NavLink>
            </li>
            <li>
              <NavLink to='/profile' activeClassName='is-selected'>
                Perfil
              </NavLink>
            </li>
            <li>
              <a onClick={this.handleClick}>Back!</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default withRouter(Header);
