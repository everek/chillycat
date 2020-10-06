import React from "react"
import styled from "styled-components"

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

const Logo = styled.img`
  width: 15rem;
  max-width: 80%;
`

export default function Home() {
  return (
    <Container>
      <Title>
        <Fat>c</Fat>hilly<Fat>c</Fat>at
      </Title>
      <Logo src="/cat.svg" />
      <Subtitle>original hot sauce</Subtitle>
    </Container>
  )
}
