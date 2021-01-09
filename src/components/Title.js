import styled from "styled-components";

import React from 'react'

function Title({ title, marginB }) {
    return (
        <>
            <Header marginB={marginB}>
                <h1>{title}</h1>
            </Header>
        </>
    )
}

export default Title

const Header = styled.div`
    margin-bottom:${({ marginB }) => marginB ? marginB : '4rem'};
    h1 {
        color: transparent;
        -webkit-background-clip:text;
        background-clip:text;
        background-image:linear-gradient(to right,#7ed56f,#28b485);
        font-size:40px;
        font-weight:700;
        text-align:center;
        text-transform:uppercase;
        transition: all 0.2s;

        :hover{
            -webkit-transform: skewY(2deg) skewX(15deg) scale(1.1);
            transform: skewY(2deg) skewX(15deg) scale(1.1);
            text-shadow: 0.5rem 1rem 2rem rgba(0,0,0,.2);
        }
        @media screen and (max-width:768px){
            font-size: clamp(1.5rem,5vw,2rem);
        }
    }
`