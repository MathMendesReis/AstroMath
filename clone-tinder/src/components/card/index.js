import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import { Container, ContainerCard, ContainerFooter, ContainerMain, HeaderContainer, ImgProfile, TextoBio } from './styled'

const Card = () => {
  const context = useContext(GlobalContext)
    const { age, bio, id, name, photo, photo_alt } = context.profiles
    console.log(photo)
  return (
      <Container>
          <ContainerCard>
              <HeaderContainer>
                  <h1>
                      astromatch
                  </h1>
                  <button>
                      ???
                  </button>
              </HeaderContainer>
              <ContainerMain>
                  <ImgProfile src={photo} alt={photo_alt} />
                  <TextoBio>{name},{age} anos.<br/>{bio}</TextoBio>
              </ContainerMain>
              <ContainerFooter>
                  <button>
                      ???
                  </button>
                  <button>
                      ???
                  </button>
              </ContainerFooter>
          </ContainerCard>  
    </Container>
  )
}

export default Card