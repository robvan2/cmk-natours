import React from 'react'
import styled from 'styled-components'
import { Button } from './Shared'


const HeroSection = () => {
    return (
        <Container>
            <Logo>
                <img src="./images/logo-white.png" alt="Logo" />
            </Logo>
            <Wrapper>
                <h1>
                    OUTDOORS
                </h1>
                <h3>
                    IS WHERE LIFE HAPPENS
                </h3>
                <Button big='true'>
                    Discover our tours
                </Button>
            </Wrapper>
        </Container>
    )
}

export default HeroSection

//linear-gradient(to right bottom,rgba(126,213,111,.8),rgba(40,180,133,.8)),url(../img/hero-small.jpg)
const Container = styled.div`
    height:100vh;
    width:100%;
    position:relative;
    background-image: linear-gradient(to right bottom,rgba(126,213,111,.8),rgba(40,180,133,.8)),
                        url('./images/hero-small.jpg');
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    clip-path: polygon(0 0, 100% 0, 100% 80vh, 0 100%);
    display:flex;
    justify-content:center;
    align-items:center;
`;
const Logo = styled.div`
    position:absolute;
    top:4rem;
    left:4rem;

    img{
        height: 3rem;
    }
    @media screen and (max-width:768px){
        top:2rem;
        left: 2rem;
        img{
            height: 2.5rem;
        }
    }
`;
const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    color: #fff;
    text-align:center;
    text-transform:uppercase;
    h1{
        font-size:72px;
        letter-spacing:2rem;
        margin-bottom:1.5rem;
        font-weight:400;
        animation: moveInLeft;
        animation-duration : 1s;
    }
    h3{
        font-size:32px;
        letter-spacing:1rem;
        margin-bottom:4rem;
        font-weight:400;
        animation: moveInRight;
        animation-duration : 1s;
    }
    Button{
        animation: moveInTop;
        animation-delay:.5s;
        animation-duration : .75s;
        animation-timing-function:ease-in-out;
        animation-fill-mode:backwards;
    }
    @media screen and (max-width:768px){
        h1{
            font-size:clamp(1.5rem,6vw,2.5rem);
            letter-spacing:1rem;
            font-weight:700;
        }
        h3{
            font-size:clamp(1.1rem,4vw,1.5rem);
            letter-spacing:0.7rem;
            line-height:2;
        }
    }
`;