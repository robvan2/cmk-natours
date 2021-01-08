import React from 'react'
import styled from 'styled-components'
import { IoIosGlobe, IoIosTimer } from 'react-icons/io'
import { FaRegHeart, FaRegMap } from 'react-icons/fa'
import { IconContext } from 'react-icons'

const Services = () => {
    return (
        <>
            <ServicesContainer>
                <ServicesRow>
                    <ServiceWrapper>
                        <ServiceItem>
                            <svg width="90px" height="90px">
                                <defs>
                                    <linearGradient id="myGradient">
                                        <stop offset="0%" stopColor="#7ed56f" />
                                        <stop offset="100%" stopColor="#28b485" />
                                    </linearGradient>
                                </defs>
                                <IconContext.Provider value={{ attr: { fill: "url('#myGradient')" }, className: 'icon' }}>
                                    <IoIosGlobe />
                                </IconContext.Provider>
                            </svg>
                            <h3>Lorem, ipsum dolor.</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, distinctio.</p>
                        </ServiceItem>
                    </ServiceWrapper>
                    <ServiceWrapper>
                        <ServiceItem>
                            <svg width="90px" height="90px">
                                <defs>
                                    <linearGradient id="myGradient">
                                        <stop offset="0%" stopColor="#7ed56f" />
                                        <stop offset="100%" stopColor="#28b485" />
                                    </linearGradient>
                                </defs>
                                <IconContext.Provider value={{ attr: { fill: "url('#myGradient')" }, className: 'icon' }}>
                                    <IoIosTimer />
                                </IconContext.Provider>
                            </svg>
                            <h3>Lorem, ipsum dolor.</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, distinctio.</p>
                        </ServiceItem>
                    </ServiceWrapper>
                    <ServiceWrapper>

                        <ServiceItem>
                            <svg width="90px" height="90px">
                                <defs>
                                    <linearGradient id="myGradient">
                                        <stop offset="0%" stopColor="#7ed56f" />
                                        <stop offset="100%" stopColor="#28b485" />
                                    </linearGradient>
                                </defs>
                                <IconContext.Provider value={{ attr: { fill: "url('#myGradient')" }, className: 'icon' }}>
                                    <FaRegMap />
                                </IconContext.Provider>
                            </svg>
                            <h3>Lorem, ipsum dolor.</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, distinctio.</p>
                        </ServiceItem>
                    </ServiceWrapper>
                    <ServiceWrapper>
                        <ServiceItem>
                            <svg width="90px" height="90px">
                                <defs>
                                    <linearGradient id="myGradient">
                                        <stop offset="0%" stopColor="#7ed56f" />
                                        <stop offset="100%" stopColor="#28b485" />
                                    </linearGradient>
                                </defs>
                                <IconContext.Provider value={{ attr: { fill: "url('#myGradient')" }, className: 'icon' }}>
                                    <FaRegHeart />
                                </IconContext.Provider>
                            </svg>
                            <h3>Lorem, ipsum dolor.</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, distinctio.</p>
                        </ServiceItem>
                    </ServiceWrapper>
                </ServicesRow>
            </ServicesContainer>
        </>
    )
}

export default Services

const ServicesContainer = styled.div`
    margin-top:-9rem;
    padding: 8rem 2rem;
    background-image : linear-gradient(to right bottom,rgba(126,213,111,.8),rgba(40,180,133,.8)),
                        url('./images/nat-4.jpg');
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    -webkit-transform: skewY(-7deg);
    transform: skewY(-7deg);
    @media screen and (max-width:991px){
        margin-top:-1.5rem;
    }
`
const ServicesRow = styled.div`
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    flex-wrap:wrap;
    -webkit-transform: skewY(7deg);
    transform: skewY(7deg);
`
const ServiceWrapper = styled.div`
    padding:0 1rem;
`
const ServiceItem = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding:2rem;
    color: #777;
    background-color: rgba(255,255,255,0.8);
    border-radius:4px;
    width:250px;
    margin:2rem auto;
    text-align:center;
    box-shadow: 0 1rem 2rem rgba(0,0,0,0.2);
    transition: all 0.3s;
    &>svg{
        margin-bottom:3rem;
    }
    .icon{
        width:100%;
        height:100%;
        font-size:90px;
    }
    h3{
        text-transform:uppercase;
        margin-bottom:2rem;
    }
    &:hover{
        transform:scale(1.05);
    }

`
