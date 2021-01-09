import React from 'react'
import styled from 'styled-components'
import { Container } from './Shared'
import { InfoText, Items } from '../data/FooterItems'
import { FaCopyright, FaRegCopyright } from 'react-icons/fa'

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <Wrapper>
                    <Logo src='./images/logo-green-1x.png' />
                    <Row>
                        <Navbar>
                            {Items.map((item, index) => (
                                <ItemWrap>
                                    <Item key={index}>{item}</Item>
                                </ItemWrap>
                            ))}
                        </Navbar>
                        <Copyright>
                            <p>{InfoText}</p>
                            <Item>cmk-natours <FaRegCopyright /> build rights reserved</Item>
                        </Copyright>
                    </Row>
                </Wrapper>
            </FooterContainer>
        </>
    )
}

export default Footer

const FooterContainer = styled(Container)`
    margin-top:0;
    padding:6rem 0;
    background-color:#333;
    width:100%;
`
const Wrapper = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items: center;
`
const Logo = styled.img`
    margin-bottom:4rem;
`
const Row = styled.div`
    display:flex;
    align-items:flex-start;
    justify-content:space-between;
    width:100%;
    max-width:1200px;
    @media screen and (max-width:768px){
        flex-direction:column;
        align-items:center;
    }
`
const Navbar = styled.div`
    display:flex;
    border-top:1px solid #777;
    width: 40%;
    justify-content:space-between;
    align-items:center;
    padding:.7rem 5px;
    flex-wrap:wrap;
    @media screen and (max-width:768px){
        width: 90%;
        margin-bottom:2rem;
    }
`
const ItemWrap = styled.span`
    display:inline-block;
    margin: 5px auto;
    padding:0 8px;

`
const Item = styled.a`
    color: #fff;
    text-transform:uppercase;
    text-align:center;
    font-weight:300;
    font-size:14px;
    cursor:pointer;
    transition: all .2s;
    line-height:1.5;
    font-weight:400;
    display:inline-block;

    &:hover{
        transform : rotate(5deg)  scale(1.3);
        box-shadow: 0 .5rem 1rem rgba(0,0,0,0.4);
        color:#55c57a;
    }
`
const Copyright = styled.div`
    display:flex;
    border-top:1px solid #777;
    width: 40%;
    justify-content:center;
    color:#fff;
    padding:.7rem 5px;
    font-weight:300;
    font-size:14px;
    text-align:center;
    line-height:1.5;
    flex-direction:column;
    ${Item}{
        margin-top:2rem;
        font-size:1rem;
        font-weight:400;
    }
    @media screen and (max-width:768px){
        width: 90%;
    }
`
