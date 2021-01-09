import React from 'react'
import { IoMdClose } from 'react-icons/io'
import styled from 'styled-components'
import { Button } from './Shared'
import Title from './Title'

const Modal = ({ state, setState }) => {
    return (
        <>
            <Container className={state ? 'active' : ''}>
                <ClosingBackground onClick={() => setState(false)}></ClosingBackground>
                <Content className={state ? 'active' : ''}>
                    <CloseIcon onClick={() => setState(false)}></CloseIcon>
                    <Wrapper>
                        {/*<Images>
                            <img src='./images/nat-8.jpg' alt='first' />
                            <img src='./images/nat-9.jpg' alt='second' />
                        </Images>*/}
                        <Text>
                            <Title title="START BOOKING NOW" marginB='2rem' />
                            <h3>IMPORTANT – PLEASE READ THESE TERMS BEFORE BOOKING</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem eos incidunt eum praesentium,
                            quasi voluptatum id! Magnam maiores beatae soluta officia voluptatum sed laborum consequatur
                            aut eum ducimus nisi repellat facilis, deserunt,ex libero cumque reiciendis veritatis unde
                            quos ad. Consequuntur amet tempore quasi? Commodi sunt odio dolorem atque architecto? Lorem
                            ipsum dolor sit amet consectetur adipisicing elit. Ducimus sunt distinctio incidunt quasi
                            et ipsam iure iusto, quae necessitatibus assumenda repudiandae nesciunt maiores minima voluptate.
                            Sapiente ut eius assumenda asperiores!</p>
                        </Text>
                    </Wrapper>
                    <Button primary='true'>Book now</Button>
                </Content>
            </Container>
        </>
    )
}

export default Modal

const Container = styled.div`
    z-index:100;
    position:fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    backdrop-filter:blur(10px);
    display:flex;
    justify-content:center;
    align-items:center;
    opacity:0;
    visibility:hidden;
    transition: opacity 0.2s;
    
    &.active{
        opacity:1;
        visibility:visible;
    }
`
const Content = styled.div`
    background-color:#fff;
    border-radius:4px;
    box-shadow: 0 2rem 4rem rgba(0,0,0,0.4);
    width:70%;
    max-width:800px;
    max-height:80vh;
    overflow-y:scroll;
    display:flex;
    flex-direction:column;
    align-items :center;
    position:relative;
    padding-bottom:1rem;
    transform:scale(0);
    transition: transform 0.3s;

    &.active{
        transform:scale(1);
    }
    &::-webkit-scrollbar{
        display:none;
    }

    @media screen and (max-width:768px){
        width:90%;
        height:85vh;
    }
`
const CloseIcon = styled(IoMdClose)`
    position:absolute;
    top: 0.7rem;
    right: 1rem;
    font-size: 1.8rem;
    cursor:pointer;
    color:#666;
    font-weight:300;
    transition: all 0.2s;

    &:hover{
        color:#55c57a;
    }
    @media screen and (max-width:768px){
        left: .7rem;
        font-size: 1.5rem;
    }
`

const Wrapper = styled.div`
    display:flex;
    width:100%;
    margin-bottom:1rem;
`
/*const Images = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;
    width: 30%;
    height:100%;
    flex-shrink:0;
    img{
        width: 100%;
        object-fit:contain;
    }
`*/
const Text = styled.div`
    padding:1rem 3rem;
    margin-top:1rem;
    color:#777;

    ${Title}{
        text-align:center;
    }
    h3{
        margin-bottom: 1rem;
    }
    p{
        column-count:2;
        column-rule: 1px solid #eee;
        column-gap:2rem;
        text-align:justify;
    }
    @media screen and (max-width:768px){
        padding:1.5rem 2rem;
        h3{
            margin-bottom: 1rem;
            font-size:1rem;
            font-weight:600;
        }
        p{
            column-count:unset;
        }
    }
`
const ClosingBackground = styled.div`
    position:absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity:0;
`