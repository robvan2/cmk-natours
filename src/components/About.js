import React from 'react'
import styled from 'styled-components'
import { FaArrowRight } from 'react-icons/fa'
import Title from './Title'
import { Container, InfoLink } from './Shared'

const About = () => {
    return (
        <>
            <Container>
                <Title title='EXCITING TOURS FOR ADVENTUROUS PEOPLE' />
                <Wrapper>
                    <Info>
                        <InfoBlock>
                            <h3>Lorem ipsum dolor sit amet.</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque doloremque placeat consequatur iste tenetur sunt eligendi ipsam ut exercitationem, voluptates expedita quas molestiae corporis illo officiis, nobis nulla. Reiciendis, accusantium.</p>
                        </InfoBlock>
                        <InfoBlock>
                            <h3>Lorem ipsum dolor sit amet.</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse perspiciatis ab eos earum incidunt optio fugit repellendus, tempora ipsum expedita harum. Nesciunt magni atque pariatur non facilis, reiciendis eos perspiciatis.</p>
                        </InfoBlock>
                        <InfoLink>Learn more <Arrow /></InfoLink>
                    </Info>
                    <ImagesWrapper>
                        <Image className="first" src='./images/nat-1.jpg' />
                        <Image className="second" src='./images/nat-2.jpg' />
                        <Image className="third" src='./images/nat-3.jpg' />
                    </ImagesWrapper>
                </Wrapper>
            </Container>
        </>
    )
}

export default About

const Wrapper = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr;
    max-width:1400px;
    margin:0 auto;
    padding: 0 2rem;
    @media screen and (max-width:991px){
        grid-template-columns:1fr;
        text-align:center;
    }
`
const Info = styled.div`
    display:flex;
    flex-direction:column;
    margin-right:6rem;
    @media screen and (max-width:991px){
        margin-right:0;
        margin-bottom:7rem;
    }
`
const ImagesWrapper = styled.div`
    display:flex;
    position:relative;
    @media screen and (max-width:991px){
        justify-content:center;
    }
`
const Image = styled.img`
    position:absolute;
    box-shadow: 0 1rem 2rem rgba(0,0,0,.2);
    border-radius:2px;
    transition:all 0.3s;
    &:hover{
        z-index:4;
        transform:scale(1.1);
    }
    &.second{
        top:10%;
        left: 40%;
    }
    &.third{
       top:30%;
       left: 25%;
    }
    @media screen and (max-width:991px){
        width:40%;
        &.first{
            left:5%;
        }
        &.second{
            left: 60%;
        }
        &.third{
            left:32%;
            top: -2rem;
        }
    }
`
const InfoBlock = styled.div`
    display:flex;
    flex-direction:column;
    margin-bottom:4rem;
    color: #777;
    h3{
        font-size:clamp(1.3rem,3vw,1.8rem);
        margin-bottom:1.5rem;
    }
    p{
        font-size:clamp(1rem,2vw,1.3rem);
    }
`

const Arrow = styled(FaArrowRight)`
    margin-left:5px;
`
