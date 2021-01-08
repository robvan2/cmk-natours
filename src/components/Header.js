import React, { useState } from 'react'
import styled from 'styled-components'
import { FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <Navbar className={isOpen ? 'active' : ''}>
                <Menu className={isOpen ? 'active' : ''}>
                    <MenuItem>About Natours</MenuItem>
                    <MenuItem>Your Benifits</MenuItem>
                    <MenuItem>Popular Tours</MenuItem>
                    <MenuItem>Stories</MenuItem>
                    <MenuItem>Book now</MenuItem>
                </Menu>
            </Navbar>
            <NavIcon onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (<FaTimes />) : (<FaBars />)}
            </NavIcon>
        </>
    )
}

export default Header


const Navbar = styled.nav`
    z-index:101;
     & * {
        z-index:110;
     }
     &:before{
        content:"";
        position:fixed;
        top:4.5rem;
        right:4.5rem;
        height:50px;
        width:50px;
        border-radius:50%;
        background-image: radial-gradient(rgba(126,213,111,.9),rgba(40,180,133,.9));
        z-index:101;
        transition: transform .5s cubic-bezier(0.86, 0, 0.07, 1);
        @media screen and (max-width:768px){
            top: 2.2rem;
            right: 2.2rem;
            height: 40px;
            width:40px;
        }
    }
    &.active{
        position:fixed;
        display:flex;
        align-items:center;
        top:0;
        left:0;
        height:100vh;
        width:100%;
    }
    &.active:before{
        transform: scale(80);
    }
`
const NavIcon = styled.button`
    display:flex;
    justify-content:center;
    align-items:center;
    position: fixed;
    top:4rem;
    right:4rem;
    height:70px;
    width:70px;
    border-radius:50%;
    outline:none;
    border:none;
    box-shadow: 0 1rem 3rem rgba(0,0,0,.2);
    cursor:pointer;
    z-index:150;
    font-size:2.1rem;
    font-weight:400;

    @media screen and (max-width:768px){
        top: 2rem;
        right: 2rem;
        height: 50px;
        width:50px;
        font-size:1.5rem;
    }
`

const Menu = styled.ul`
    position:absolute;
    left:-150vw;
    width:100%;
    display:flex;
    list-style:none;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    z-index:110;
    opacity:0;
    transition: opacity 0.2s ease-in-out;
    transition-delay:0.32s;
    &.active{
        opacity:1;
        left: 0;
    }
`
const MenuItem = styled.li`
    font-size:2rem;
    color:#FFF;
    margin-bottom:1rem;
    padding: 1rem 2rem;
    text-transform:uppercase;
    background-image:linear-gradient(120deg,transparent 0%,transparent 50%,#fff 50%);
    background-size:240%;
    transition:all 0.3s;
    cursor:pointer;

    &:hover{
        color:#55c57a;
        transform: translateX(1rem);
        background-position:100%;
    }
    @media screen and (max-width:768px){
        font-size:1.3rem;
    }
`