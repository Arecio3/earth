import React from 'react'
import styled from 'styled-components'

const HeroSection = () => {
  return (
    <HeroContainer>
        <Logo>Just a friendly reminder</Logo>
        <Slogan>Your in the Matrix</Slogan>
    </HeroContainer>
  )
}

const HeroContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #1756dd81;
    opacity: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Logo = styled.h1`
    margin: 0;
    color: #fff;
    font-weight: 700;
    font-size: 55px;
`

const Slogan = styled.h4`
margin: 0;
color: crimson;
font-size: 30px;
`
export default HeroSection