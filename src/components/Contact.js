import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import styled from 'styled-components'
import { Button, Container } from './Shared'
import Title from './Title'

const Contact = () => {
    const [nameFocus, setNameFocus] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [nameTouched, setNameTouched] = useState(false);
    const [emailTouched, setEmailTouched] = useState(false);

    const [small, setSmall] = useState(false);
    const [large, setLarge] = useState(false);

    const checkForm = (value) => {
        setNameTouched(true)
        if (value === '') {
            setNameFocus(false)
        } else {
            setNameFocus(true)
        }
    }
    const checkEmail = (value) => {
        setEmailTouched(true);
        if (value === '') {
            setEmailFocus(false)
        } else {
            setEmailFocus(true)
        }
    }

    const radioCheck = (e) => {
        e.target.previousElementSibling.checked = true;
        const name = e.target.previousElementSibling.id;
        if (name === 'large') {
            setSmall(false);
            setLarge(true);
        } else {
            setLarge(false);
            setSmall(true);
        }
    }
    return (
        <>
            <ContactContainer>
                <Wrapper>
                    <Content>
                        <Title title="START BOOKING NOW" />
                        <Form action="" method="POST" autoComplete="off">
                            <FormGroup>
                                <input onChange={(e) => checkForm(e.target.value)} className={`form__control ${nameTouched ? 'touched' : ''}`} placeholder="Full name" type="text" name="name" id="name" required />
                                <span className={`${nameFocus ? 'active' : nameTouched ? 'closing' : ''}`}>Full name</span>
                            </FormGroup>
                            <FormGroup>
                                <input onChange={(e) => checkEmail(e.target.value)} className={`form__control last ${emailTouched ? 'touched' : ''}`} placeholder="Email address" type="email" name="email" id="email" required />
                                <span className={`${emailFocus ? 'active' : emailTouched ? 'closing' : ''}`}>Email address</span>
                            </FormGroup>
                            <RadioWrapper>
                                <RadioGroup>
                                    <RadioItem type="radio" name="group" id='small' />
                                    <span onClick={(e) => radioCheck(e)} className={small ? 'checked' : ''}></span>
                                        Small tour group
                                </RadioGroup>
                                <RadioGroup>
                                    <RadioItem type="radio" name="group" id='large' />
                                    <span onClick={(e) => radioCheck(e)} className={large ? 'checked' : ''}></span>
                                        Large tour group
                                </RadioGroup>
                            </RadioWrapper>
                            <ContactButton primary='true'>Next step <Arrow /></ContactButton>
                        </Form>
                    </Content>
                </Wrapper>
            </ContactContainer>
        </>
    )
}

export default Contact

const ContactContainer = styled(Container)`
    margin-top:0;
    padding:10rem 0;
    background-image: linear-gradient(to right bottom, #7ed56f, #28b485);
    width:100%;
`
const Wrapper = styled.div`
    background-image: linear-gradient(105deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.9) 60%, transparent 60%),url(./images/nat-10.jpg);
    width: 100%;
    max-width: 70rem;
    background-size:cover;
    background-position:center;
    border-radius:4px;
    box-shadow:0 1.5rem 4rem rgba(0,0,0,0.2);

    @media screen and (max-width:768px){
        background-image: linear-gradient(105deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.9) 100%),url(./images/nat-10.jpg);
        width:90%;
        max-width:400px;
    }
`
const Content = styled.div`
    width: 60%;
    padding: 4rem 2rem;
    @media screen and (max-width:768px){
        width: 100%;
    }
`
const Form = styled.form`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
`
const FormGroup = styled.div`
    width:90%;
    color: #777;
    position:relative;
    .form__control{
        width: 100%;
        padding:1rem 2rem;
        border:none;
        outline:none;
        border-radius:2px;
        border-bottom: 3px solid transparent;
        transition:all 0.3s;
        font-size:1rem;
        margin-bottom:4rem;
        color:#777;

        &:focus {
            box-shadow: 0 1rem 2rem rgba(0,0,0,0.2);
            border-bottom:3px solid #55c57a;
        }
        &:invalid.touched{
            border-bottom:3px solid #ff7730;
        }
        @media screen and (max-width:768px){
            margin-bottom:3rem;
        }
    }
    .form__control.last{
        @media screen and (max-width:768px){
            margin-bottom:1.5rem;
        }
    }
    span{
        display:none;
        position:absolute;
        width: max-content;
        top: 0;
        left:0;
    }
    span.active{
        display: inline-block;
        animation: moveLabel;
        animation-duration: 0.4s;
        animation-fill-mode:forwards;
    }
    span.closing{
        display: inline-block;
        animation: moveLabelBack;
        animation-duration: 0.4s;
        animation-fill-mode:forwards;
    }
    
`
const RadioWrapper = styled.div`
    width: 100%;
    display:flex;
    align-items:center;
    margin-left:1rem;
    @media screen and (max-width:768px){
        flex-direction:column;
        align-items:flex-start;
    }
`
const RadioGroup = styled.span`
    //#55c57a
    color:#777;
    display:flex;
    align-items:center;
    margin: 0 1rem;
    & span{
        cursor:pointer;
        display:flex;
        justify-content:center;
        align-items:center;
        height: 2rem;
        width:2rem;
        border-radius:50%;
        border:5px solid #55c57a;
        background-color:initial;
        margin-right:1rem;
        &:after{
            content: "";
            display:inline-block;
            width: 1rem;
            height: 1rem;
            border-radius:50%;
            background:#55c57a;
            opacity:0;
            transition:all 0.2s;
        }
        &.checked:after{
            opacity:1;
        }
    }
    @media screen and (max-width:768px){
        margin:1rem 0.5rem;
    }
`
const RadioItem = styled.input`
    display:none;
`
const ContactButton = styled(Button)`
    margin-top:3rem;
    margin-left:2rem;
    align-self: flex-start;
    @media screen and (max-width:768px){
        align-self:center;
        margin-top:2rem;
        margin-left:0;
    }
`
const Arrow = styled(FaArrowRight)`
    font-size:1rem;
    margin-left:10px;
`

