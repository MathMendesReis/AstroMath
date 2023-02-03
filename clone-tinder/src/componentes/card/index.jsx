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
} from "./styled";
import { GlobalContext } from "../../context/GlobalContext";
import { Header } from "../header";

export const Card = () => {
  const context = useContext(GlobalContext);
  const { profiles, GetProfileToChoose } = context;
  console.log(profiles);
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
          {name}, <span>{age}</span>
        </h1>
        <p>{bio}</p>
      </BoxNameAndBio>
      <ContainerButtons>
        <ButtonNotMacth
          onClick={() => {
            GetProfileToChoose();
          }}
        >
          not macth
        </ButtonNotMacth>
        <button
          onClick={() => {
            GetProfileToChoose();
          }}
        >
          match
        </button>
      </ContainerButtons>
    </Container>
  );
};
