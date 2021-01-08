import styled from "styled-components";

export const Button = styled.button`
    position:relative;
    border-radius:50px;
    background: ${({ primary }) => (primary ? '#55C57A' : '#fffff')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '1.2rem 3rem' : '12px 30px')};
    color: ${({ primary }) => (primary ? '#fff' : '#777')};
    font-size : ${({ big }) => (big ? '1.5rem' : '16px')};
    outline : none;
    border:none;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    transition : all 0.2s;

    &:hover {
        transform:translateY(-3px);
        box-shadow:0 1rem 2rem rgba(0,0,0,.2);

        &:after{
            transform:scaleX(1.4) scaleY(1.6);
            opacity:0;
        }
    }
    &:active{
        transform: translateY(-1px);
        box-shadow: 0 0.5rem 1rem rgba(0,0,0,.15);
    }
    &:after{
        content:"";
        display:inline-block;
        position: absolute;
        top:0; 
        left: 0;
        height:100%;
        width:100%;
        border-radius:50px;
        z-index:-1;
        opacity:1;
        background-color:${({ primary }) => (primary ? '#55C57A' : '#fff')};
        transition:all .4s;
    }
    @media screen and (max-width:768px){
        font-size: 1.2rem;
        padding : 1rem 1.5rem;
    }
`
export const InfoLink = styled.a`
    font-size:clamp(1rem,2vw,1.3rem);
    color:#55c57a;
    text-decoration:none;
    border-bottom: 1px solid #55c57a;
    min-width:100px;
    padding:10px 0;
    display:flex;
    align-self:flex-start;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    transition: all 0.2s;

    &:hover{
        background-color:#55c57a;
        transform:translateY(-.4rem);
        color:#fff;
        box-shadow: 0 1rem 2rem rgba(0,0,0,0.2);
    }
    @media screen and (max-width:991px){
        align-self: center;
    }
`
export const Container = styled.div`
    padding:20rem 0;
    margin-top:-15rem;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background-color:#f7f7f7;
`
