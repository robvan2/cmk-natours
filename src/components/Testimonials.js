import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import styled from 'styled-components'
import { InfoLink } from './Shared'
import Title from './Title'
import { TestimonialsData } from '../data/Testimonials'

const Testimonials = () => {
    return (
        <>
            <Container>
                <VideoBg>
                    <VideoContent src='./videos/video.mp4' autoPlay muted loop />
                </VideoBg>
                <Title title='WE MAKE PEOPLE GENUINELY HAPPY' />
                <Wrapper>
                    {TestimonialsData.map((item, index) => (
                        <Item key={index}>
                            <Image>
                                <img src={item.image} alt={item.name} />
                                <Caption>{item.name}</Caption>
                            </Image>
                            <Content>
                                <h3>{item.title}</h3>
                                <p>{item.content}</p>
                            </Content>
                        </Item>
                    ))}
                </Wrapper>
                <InfoLink>Read all stories <Arrow /></InfoLink>
            </Container>
        </>
    )
}

export default Testimonials

const Container = styled.div`
    position:relative;
    width:100%;
    padding:10rem 0;
    display:flex;
    flex-direction:column;
    align-items:center;

    ${InfoLink}{
        margin:0 auto;
    }
`
const VideoBg = styled.div`
    position:absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index:-1;
    opacity:0.2;
`
const VideoContent = styled.video`
    height: 100%;
    width: 100%;
    object-fit:cover;
`
const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width: 100%;
    margin:2rem 0 4rem 0;
    padding:0 10rem;

    @media screen and (max-width:991px){
        padding:0 4rem;
    }
    @media screen and (max-width:480px){
        padding:0 2rem;
    }
`
const Item = styled.div`
    padding: 4rem;
    padding-left:6rem;
    transform:skew(-12deg);
    background-color: rgba(255,255,255,0.6);
    box-shadow: 0 1rem 2rem rgba(0,0,0,0.1);
    position:relative;
    margin-bottom:4rem;
    width:80%;

    &:hover img{
        transform:scale(1) translateX(-2rem);
        filter:blur(3px) brightness(80%);
    }
    @media screen and (max-width:768px){
        width: 100%;
        padding: 2rem;
        padding-left:4rem;
    }
    @media screen and (max-width:480px){
        transform:skew(0);
        padding:2rem 1rem;
        display:flex;
        flex-direction:column;
    }
`
const Arrow = styled(FaArrowRight)`
    margin-left:5px;
`
const Image = styled.figure`
    width:9rem;
    height:9rem;
    overflow: hidden;
    float:left;
    border-radius:50%;
    margin:0 auto;
    transform: skew(12deg) translateX(-2rem);
    shape-outside: circle(50% at 50% 50%);
    clip-path:circle(50% at 50% 50%);

    img{
        height:100%;
        transform:translateX(-2rem) scale(1.4);
        transition:all .5s;
    }
    @media screen and (max-width:768px){
        width:7rem;
        height:7rem;
    }
    @media screen and (max-width:480px){
        transform:skew(0) translateX(0);
        margin-bottom:2rem;
    }
`
const Caption = styled.figcaption`
    position:absolute;
    top: 50%;
    left: 50%;
    color: #fff;
    text-align:center;
    transform:translate(-50%,20%);
    font-size:1.2rem;
    font-weight:400;
    opacity:0;
    backface-visibility:hidden;
    text-transform:uppercase;
    transition:all .5s;

    ${Item}:hover &{
        transform:translate(-50%,-50%);
        opacity:1;
    }
`
const Content = styled.div`
    color: #777;
    transform: skew(12deg);
    margin: 0 auto;
    h3{
        font-size:1.2rem;
        margin-bottom:1.5rem;
    }
    p{
        line-height:1.5;
    }
    @media screen and (max-width:991px){
        h3{
            font-size:1rem;
            margin-bottom:1.2rem;
        }
        p{
            line-height:1.3;
        }
    }
    @media screen and (max-width:480px){
        transform:skew(0);
        text-align:center;
    }
`
