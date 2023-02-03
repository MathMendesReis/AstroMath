import React, { useContext, useState } from "react";
import { ButtonMatches, ContainerHeader, Title } from "./styed";
import ImgAstromatch from "../../img/Astromatch.png";
import { goHome, goMacths } from "../../Router/nagegacao";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";

export const Header = () => {
  const navigate = useNavigate();
  const context = useContext(GlobalContext);
  const { showButton, mudarButton } = context;

  return (
    <ContainerHeader>
      <Title src={ImgAstromatch} alt="" />

      {showButton ? (
        <ButtonMatches
          onClick={() => {
            goHome(navigate);
            mudarButton();
          }}
        >
          <h1>←</h1>
        </ButtonMatches>
      ) : (
        <ButtonMatches
          onClick={() => {
            goMacths(navigate);
            mudarButton();
          }}
        >
          false
        </ButtonMatches>
      )}
    </ContainerHeader>
  );
};
