import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { GoHome } from 'react-icons/go';
import { IoIosContact } from 'react-icons/io';
import { IoIosBriefcase } from 'react-icons/io';
import { MdWidgets } from 'react-icons/md';
import { FiShoppingCart } from 'react-icons/fi';
import { Home } from './components/Home';
import { Usuario } from './components/Usuario';
import { Material } from './components/Material';
import { Estoque } from './components/Estoque';
import { Fornecedor } from './components/Fornecedor';
import React from 'react';

function App() {
  return (
    <Container>
      	<BrowserRouter>
	  <Navbar bg='light' expand='lg'>
	    <Navbar.Brand as={Link} to="/">DRYBOX</Navbar.Brand>
	    <Navbar.Toggle aria-controls='basic-navbar-nav' />
	    <Navbar.Collapse id='basic-navbar-nav'>
	      <Nav className='mr-auto'>
		<Nav.Link as={Link} to="/"><GoHome />  Home</Nav.Link>
		<NavDropdown title='Cadastros' id='basic-nav-dropdown'>
		  <NavDropdown.Item as={Link} to='/usuario'><IoIosContact /> Usuário</NavDropdown.Item>
		  <NavDropdown.Item as={Link} to='/material'><IoIosBriefcase /> Material</NavDropdown.Item>
		  <NavDropdown.Item as={Link} to='/estoque'><MdWidgets /> Estoque</NavDropdown.Item>
		  <NavDropdown.Item as={Link} to='/fornecedor'><FiShoppingCart /> Fornecedor</NavDropdown.Item>
		</NavDropdown>
	      </Nav>
	    </Navbar.Collapse>
	  </Navbar>
	  <Switch>
		<Route path="/" exact={true} component={Home} />
		<Route path="/usuario" exact={true} component={Usuario} />
		<Route path="/material" exact={true} component={Material} />
		<Route path="/estoque" exact={true} component={Estoque} />
		<Route path="/fornecedor" exact={true} component={Fornecedor} />
	  </Switch>
	</BrowserRouter>
    </Container>
  );
}

export default App;
