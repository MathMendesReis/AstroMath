import React from "react";
import { ButtonMatches, ContainerHeader, Title } from "./styed";
import ImgAstromatch from "../../img/Astromatch.png";

export const Header = () => {
  return (
    <ContainerHeader>
      <Title src={ImgAstromatch} alt="" />
      <ButtonMatches>???</ButtonMatches>
    </ContainerHeader>
  );
};
