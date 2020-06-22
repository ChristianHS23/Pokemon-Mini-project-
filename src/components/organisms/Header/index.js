/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
// Header Component
// --------------------------------------------------------

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';
import PokemonImage from 'assets/img/pokemon.png';

class Header extends Component {
  // state = {};
  // componentDidMount() {}
  // yourFunction = () => {};

  render() {
    const { propsName } = this.props;

    return (
      <Navbar bg='info' expand='lg' className='o-header'>
        <Navbar.Brand href='#home'>
          <img src={PokemonImage} className='o-header-img' alt='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            {/* <Nav.Link href='#link'>Link</Nav.Link>
            <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Form inline>
            <FormControl type='text' placeholder='Search' className='mr-sm-2' />
            {/* <Button variant='outline-info'>Search</Button> */}
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

Header.propTypes = {
  propsName: PropTypes.string,
};

Header.defaultProps = {
  propsName: '',
};

export default Header;
