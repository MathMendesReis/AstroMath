import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
width: 100vw;
`;

export const ContainerCard = styled.div`
    height: 600px;
    width: 400px;
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const HeaderContainer = styled.header`
display: flex;
justify-content: flex-end;
gap: 80px;
border: 1px solid gray;
`

export const ContainerMain = styled.main`
display: flex;
flex-direction: column;
align-items: center;
`

export const ContainerFooter = styled.footer`
    display: flex;
    justify-content: space-around;
`

export const ImgProfile = styled.img`
    height: 100%;
    width: 100%;
`

export const TextoBio = styled.p`
    z-index: 10;
    position: absolute;
    color: #FFFF;
    top: 400px;
    left: 580px;
    width: 400px;
    white-space: wrap;
`