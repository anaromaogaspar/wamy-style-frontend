import React from "react";
import { FiHome, FiArrowRight } from "react-icons/fi";

import {
  Container,

  Home,
  OtherMenu,
  ButtonArrow,
  SmallHome,
  SmallOtherMenu,
  SmallButtonArrow,
  ContainerSmall,
} from "./styles";

interface Props {
  isSmall: boolean;
}

const Menu = ({ isSmall }: Props) => {
  function bigMenu() {
    return (
      <>

        <Home to="">
          <h1>Home</h1>
          <FiHome size={25} />
        </Home>

        <OtherMenu to="/lista-de-produtos">
          <h1>Masculino</h1>
          <ButtonArrow>
            <FiArrowRight color="#000000" size={25} />
          </ButtonArrow>
        </OtherMenu>

        <OtherMenu to="/lista-de-produtos" style={{ background: " #d73392" }}>
          <h1>Feminino</h1>
          <ButtonArrow style={{ background: "#000000" }}>
            <FiArrowRight size={25} />
          </ButtonArrow>
        </OtherMenu>

        <OtherMenu to="/lista-de-produtos">
          <h1>Infantil</h1>
          <ButtonArrow>
            <FiArrowRight color="#000000" size={25} />
          </ButtonArrow>
        </OtherMenu>

        <OtherMenu to="/lista-de-produtos" style={{ background: " #d73392" }}>
          <h1>Promoções</h1>
          <ButtonArrow style={{ background: "#000000" }}>
            <FiArrowRight size={25} />
          </ButtonArrow>
        </OtherMenu>

      </>
    );
  }

  function smallMenu() {
    return (
      <ContainerSmall>
        <SmallHome to="">
          <h1>Home</h1>
          <FiHome size={20} />
        </SmallHome>

        <SmallOtherMenu to="#">
          <h1>Masculino</h1>
          <SmallButtonArrow>
            <FiArrowRight color="#000000" size={20} />
          </SmallButtonArrow>
        </SmallOtherMenu>

        <SmallOtherMenu to="#" style={{ background: " #d73392" }}>
          <h1>Feminino</h1>
          <SmallButtonArrow style={{ background: "#000000" }}>
            <FiArrowRight size={20} />
          </SmallButtonArrow>
        </SmallOtherMenu>

        <SmallOtherMenu to="#">
          <h1>Infantil</h1>
          <SmallButtonArrow>
            <FiArrowRight color="#000000" size={20} />
          </SmallButtonArrow>
        </SmallOtherMenu>

        <SmallOtherMenu to="#" style={{ background: " #d73392" }}>
          <h1>Promoções</h1>
          <SmallButtonArrow style={{ background: "#000000" }}>
            <FiArrowRight size={20} />
          </SmallButtonArrow>
        </SmallOtherMenu>
      </ContainerSmall>
    );
  }

  return (
    <Container>
      {!isSmall && bigMenu()}
      {isSmall && smallMenu()}
    </Container>
  );
};

export default Menu;
