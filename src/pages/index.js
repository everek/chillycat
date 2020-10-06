import React from "react"
import styled from "styled-components"

import Cat from '../assets/cat.svg'

const Container = styled.div`
  text-align: center;
`

const Title = styled.h1`
  margin-bottom: 1rem;
  font-family: 'montserrat', sans-serif;
  font-size: 5rem;
  font-weight: 400;
`

const Subtitle = styled.h3`
  margin-top: -1rem;
  font-family: "montserrat", sans-serif;
`

const Fat = styled.span`
  font-weight: 600;
`
const Logo = styled.div`
  width: 15rem;
  margin: 0 auto;
  width: 300px;
  max-width: 80%;
  text-align: center;

  svg {
    width: 100%;
    height: auto;
  }
`

export default function Home() {
  console.log(Cat);
  return (
    <Container>
      <Title>
        <Fat>c</Fat>hilly<Fat>c</Fat>at
      </Title>
      <Logo>
        <Cat />
      </Logo>
      <Subtitle>original hot sauce</Subtitle>
    </Container>
  )
}
