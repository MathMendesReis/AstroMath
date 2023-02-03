import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { Header } from "../header";
import { Container, ContainerProfiles, Imagem, Name, UL } from "./styled";
import { FiTrash2 } from "react-icons/fi";

export const CardMacth = () => {
  const context = useContext(GlobalContext);
  const { matchs, removeProfile } = context;
  return (
    <div>
      <Container>
        <Header />
        <UL>
          {matchs.map((profile) => (
            <ContainerProfiles key={profile.id}>
              <Imagem src={profile.photo} />
              <Name>{profile.name}</Name>
              <button
                onClick={() => {
                  removeProfile(profile);
                }}
              >
                <FiTrash2 fontSize="20" color="red" />
              </button>
            </ContainerProfiles>
          ))}
        </UL>
      </Container>
    </div>
  );
};
