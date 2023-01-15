import React from 'react'
import { Container, DivInfo, Imagem } from './styled'

const Pessoas = ({ profile }) => {
    const { age, bio, id, name, photo, photo_alt } = profile
    console.log(age)
    return (
        <Container>
            <Imagem src={photo} alt="???" />
            <h1>{name}</h1>
            <br />
            <p>{bio}</p>
        </Container>
    )
}

export default Pessoas
