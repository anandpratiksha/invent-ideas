import styled from 'styled-components';
export const Nav = styled.nav`
background: transparent;
height: 70px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top:0;
z-index: 10;
transition: 0.8s all ease;
`;

export const NavContainer = styled.div`
display: flex;
justify-content: space-between;
z-index: 1;
width: 100%;
padding: 0 24px;

`;

export const NavLogo = styled.a`
color: #7d2ae8;
justify-self: flex-start;
cursor: pointer;
font-size: 1.5rem;
display: flex;
align-items: center;
${'' /* margin-left:10%; */}
font-weight: bold;
text-decoration: none;
> img{
    height:9.5rem;
    width:10rem;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
list-style: none;
text-align: center;
/* margin-right: -4px;
margin-top:-50px; */
`;

export const NavItem = styled.li`
/* border: 3px solid black; */
/* margin-top: 10px; */

`;

