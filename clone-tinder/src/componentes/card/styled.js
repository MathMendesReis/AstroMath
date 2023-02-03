import styled from 'styled-components'

export const Container = styled.div`
    border: 2px solid;
    height: 600px;
    width: 402px;

`
export const BackgroundImg = styled.div`
height: 400px;
width: 100%;
padding: 30px;

`

export const BgImg = styled.img`
    width: 100%;
    filter: blur(15px);
    height: 100%;

`
export const PhotoPeople = styled.img`
    width: 300px;
    max-height: 350px;
    border-radius: 8px;
    position: absolute;
    top: 170px;
    left: 620px;

`


export const BoxNameAndBio = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
width: 350px;
z-index: 1;
position: absolute;
top:380px;
left: 610px;
color: white;
padding: 15px;
`


export const ContainerButtons = styled.div`
    position: absolute;
    top: 560px;
    width: 400px;
    display: flex;
    justify-content: space-around;
    height: 100px;
    align-items: center;
    /* background-color: black; */
`


export const ButtonNotMacth = styled.button`
    height: 70px;
    width: 50px;
`