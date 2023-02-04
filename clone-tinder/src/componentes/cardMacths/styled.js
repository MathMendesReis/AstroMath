import styled from "styled-components";

export const Container = styled.div`
    height: 600px;
    width: auto;
    border: 2px solid black;
    overflow-y: scroll;

`;

export const Imagem = styled.img`
    width: 35px;
    height: 35px;
    border-radius: 25px ;
`

export const ContainerProfiles = styled.li`
    display: flex;
    align-items: center;
    gap: 25px;
    justify-content: space-around;
    
`

export const UL = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 20px;
    align-items: center;
`

export const Name = styled.p`
    width: 180px;
`