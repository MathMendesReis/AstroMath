import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    border: 2px solid black;
    justify-content: center;
    align-items: center;
`;


export const Titulo = styled.div`
    width: 60%;
    height: 15%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export const ContainerButton = styled(Titulo)`
    width: 30%;
`
export const Txt = styled.h1`
    font-size: 2vw;
`
