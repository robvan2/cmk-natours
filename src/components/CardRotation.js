import React from 'react'
import styled from 'styled-components'
import { Button } from './Shared'

function CardRotation({ title, image, info, price, startColor, endColor, setState }) {
    return (
        <Scene>
            <ProductCard>
                <CardFront start={startColor} end={endColor} className="card__face">
                    <CardImage start={startColor} end={endColor} image={image}>
                    </CardImage>
                    <h3>{title}</h3>
                    <CardInfo>
                        {info.map((item, index) => (<li key={index}>{item}</li>))}
                    </CardInfo>
                </CardFront>
                <CardBack start={startColor} end={endColor} className="card__face">
                    <p>only</p>
                    <h1>${price}</h1>
                    <Button onClick={() => setState(true)}>BOOK NOW!</Button>
                </CardBack>
            </ProductCard>
        </Scene>
    )
}

export default CardRotation

const Scene = styled.div`
    height: 40rem;
    perspective: 150rem;
    padding:2rem;
    width:400px;
    margin:auto;

    @media screen and (max-width:768px){
        padding:2rem 1rem;
        height: auto;
    }    
`
const ProductCard = styled.div`
    position: relative;
    box-shadow: 0 1.5rem 4rem rgba(0,0,0,.2);
    height:100%;
    transition-duration: 0.6s;
    transition-timing-function: ease-in-out;
    transform-style: preserve-3d;
    text-align:center;
    border-radius:4px;

    &:hover{
        transform: rotateY(-180deg);
    }
    .card__face{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        border-radius:4px;
        overflow:hidden;
    }
    @media screen and (max-width:768px){
        height: auto;
        display:flex;
        flex-direction:column;
        box-shadow: 0 1rem 2rem rgba(0,0,0,.2);
        &:hover{
            transform: rotateY(0);
        }
        .card__face{
            position: relative;
            width: 100%;
            height: auto;
            backface-visibility: initial;
            border-radius:0;
        }
    } 
`
const CardFront = styled.div`
    display:flex;
    flex-direction:column;
    z-index: 2;
    h3 {
        position:absolute;
        top: 30%;
        right: 5px;;
        color: #fff;
        background-image:linear-gradient(to right bottom,${({ start }) => (start ? start : '#ffb900')},${({ end }) => (end ? end : '#ff7730')});
        padding:.5rem 1rem;
        font-size:24px;
        max-width:200px;
        font-weight:300;
        z-index:100;
    }
    @media screen and (max-width:768px){
        h3{
            font-size:18px;
            top: 20%;
        }
    }
`
const CardBack = styled.div`
   transform: rotateY(-180deg);
   display:flex;
   flex-direction:column;
   justify-content:center;
   align-items:center;
   color: #fff;
   background-image:linear-gradient(to right bottom,${({ start }) => (start ? start : '#ffb900')},${({ end }) => (end ? end : '#ff7730')});
   p{
       text-transform:uppercase;
       font-size:1.2rem;
       margin-bottom:1rem;
   }
   h1{
       font-size:3rem;
       font-weight:300;
       margin-bottom:6rem;
   }
   & ${Button} {
    padding: 1.2rem 2rem;
   }
    @media screen and (max-width:768px){
        transform: rotateY(0);
        padding:2rem 0;
        clip-path:polygon(0 20%,100% 0,100% 100%,0 100%);
        margin-top:-2rem;
        padding-top:4rem;
        p{
            font-size:1rem;
        }
        h1{
            font-size:2rem;
            margin-bottom:2rem;
        }
        & ${Button} {
            padding: 1rem 2rem;
            font-size:1rem;
        }
    }
`
const CardImage = styled.div`
    height:50%;
    background-image:linear-gradient(to right bottom,${({ start }) => (start ? start : '#ffb900')},${({ end }) => (end ? end : '#ff7730')})
                    ,url( ${({ image }) => (image ? image : './images/nat-5.jpg')});
    background-repeat:no-repeat;
    background-blend-mode: screen;
    background-size:cover;
    background-position:center;
    clip-path: polygon(0 0 , 100% 0, 100% 85%, 0 100%);

    @media screen and (max-width:768px){
        padding-top:67%;
    }
`

const CardInfo = styled.ul`
    list-style:none;
    color: #777;
    display:flex;
    flex-direction:column;
    justify-content: flex-start;
    align-items:center;
    padding:2rem;
    height: 50%;
    margin-top:-2rem;
    font-size:1rem;
    li{
        padding:1rem;
    }
    li:not(:last-child){
        border-bottom: 1px solid lightgray;
    }

    @media screen and (max-width:768px){
        transform: rotateY(0);
        li{
            font-size:1rem;
        }
    }
   
`