import React, { useState } from 'react'
import {
    Nav,
    NavContainer,
    NavLogo,
    NavItem,
    NavMenu,
} from './NavbarStyles';
import logo from '../img/inventIdeas-logos_black.png';
import Button from '@material-ui/core/Button';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeOwner } from '../../redux/actions/owner';


const Navbar = () => {

    const [colorChange, setColorchange] = useState(false);

    const dispatch = useDispatch();

    const owner = useSelector((state) => state.owner);
    if (owner.user) {
        var { investor, innovator } = owner.user;
        // console.log('investor nav', investor)
        // console.log('innovator nav', innovator)
    }

    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };

    window.addEventListener('scroll', changeNavbarColor);

    const handleLogout = () => {
        // console.log('Logout is pressed')
        if (investor || innovator) {
            dispatch(removeOwner())
        };
    }

    const handleProfile = () => {
        if (!investor && !innovator) {
            alert('Login to continue')
        }
    }

    return (
        <>
            <Nav className={colorChange ? 'navbar colorChange' : 'navbar'}>
                <NavContainer>
                    <Link to='/'>
                        <NavLogo >
                            <img src={logo} alt="page_logo" />
                        </NavLogo>
                    </Link>
                    <NavMenu>
                        <NavItem>
                            <Button className='navigation_button' >
                                <Link to={innovator ? '/innovator-profile' : investor ? '/investor-profile' : '/'} onClick={() => handleProfile()} className='globalLink'>
                                    Profile
                                </ Link>
                            </Button>
                        </NavItem>
                        <NavItem>
                            <Button className='navigation_button'>
                                {/* <Link to='signin-investor' className='globalLink'> */}
                                <Link to={investor ? '/' : '/signin-investor'} onClick={() => handleLogout()} className='globalLink'>
                                    {investor ? 'LOGOUT' : 'Investor Login'}
                                </ Link>
                            </Button>
                        </NavItem>
                        <NavItem>
                            <Button className='navigation_button' >
                                <Link to={innovator ? '/' : '/signin-innovator'} onClick={() => handleLogout()} className='globalLink'>
                                    {innovator ? 'LOGOUT' : 'Innovator Login'}
                                </ Link>
                            </Button>
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

