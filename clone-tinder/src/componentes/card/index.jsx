import React from "react";
import { useContext } from "react";
import {
  BackgroundImg,
  BgImg,
  BoxNameAndBio,
  ButtonNotMacth,
  Container,
  ContainerButtons,
  PhotoPeople,
  TextCheck,
  TextX,
} from "./styled";
import { GlobalContext } from "../../context/GlobalContext";
import { Header } from "../header";

export const Card = () => {
  const context = useContext(GlobalContext);
  const { profiles, GetProfileToChoose, listMatch } = context;
  const { photo, name, bio, age } = profiles;
  return (
    <Container>
      <Header />
      <BackgroundImg>
        <BgImg src={photo} alt="" />
        <PhotoPeople src={photo} alt="" />
      </BackgroundImg>
      <BoxNameAndBio>
        <h1>
          {name}, <span>{age} anos.</span>
        </h1>
        <p>{bio}</p>
      </BoxNameAndBio>
      <ContainerButtons>
        <ButtonNotMacth
          onClick={() => {
            GetProfileToChoose();
          }}
        >
          <TextX>x</TextX>
        </ButtonNotMacth>
        <button
          onClick={() => {
            GetProfileToChoose();
            listMatch(profiles);
          }}
        >
          <TextCheck>✓</TextCheck>
        </button>
      </ContainerButtons>
    </Container>
  );
};
