import Logo from "../../../../images/Logo/logo.png"
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
import { signOut } from "firebase/auth";
import "./Header.css";


const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className='navber' style={{ background: "black" }}>
                <Container>
                    <Navbar.Brand as={Link} to="/" className='text-white fs-4'><img
                        alt=""
                        src={Logo}
                        className="d-inline-block align-top"
                    />{' '}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{background:"white"}}/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link className='ms-3 text-white' as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link className='ms-3 text-white' href="home#services">Services</Nav.Link>
                            <Nav.Link className='ms-3 text-white' as={Link} to="/checkout">Check Out</Nav.Link>
                            <Nav.Link className='ms-3 text-white' as={Link} to="/blogs">Blogs</Nav.Link>
                            <Nav.Link className='ms-3 text-white' as={Link} to="/about">About Us</Nav.Link>
                        </Nav>
                        <Nav className="centering">
                            {user ? <button id="signout-btn" onClick={() => {signOut(auth)}}>Sign Out</button> : <Nav.Link className='text-white login' as={Link} to="/login">Login</Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;