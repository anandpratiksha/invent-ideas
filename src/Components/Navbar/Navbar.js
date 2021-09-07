import React, { useState } from 'react'
import {
    Nav,
    NavContainer,
    NavLogo,
    NavItem,
    NavMenu,
} from './NavbarStyles';
import logo from '../img/inventIdeas-logos_black.png'
import Button from '@material-ui/core/Button';
import './Navbar.css'

const Navbar = () => {
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);
    return (
        <>
            <Nav className={colorChange ? 'navbar colorChange' : 'navbar'}>
                <NavContainer>
                    <NavLogo href="#"><img src={logo} alt="" /></NavLogo>
                    <NavMenu>
                        <NavItem>
                            <Button variant="contained">Investor SignUp</Button>
                        </NavItem>
                        <NavItem>
                            <Button variant="contained">Innovator SignUp</Button>
                        </NavItem>
                        <NavItem>
                        </NavItem>
                    </NavMenu>
                </NavContainer>
            </Nav>
        </>
    )
}

export default Navbar;

