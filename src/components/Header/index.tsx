import React from "react";

import {
  Container,
  Image,
  AskInput,
  ContainerAskIntput,
  ButtonAsk,
  Icon,
} from "./styles";
import logo from "../../assets/logo/logo.png";
import arrowright2 from "../../assets/icons/arrow-right2.png";
import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <Container>
      <Image src={logo} />
      <ContainerAskIntput>
        <AskInput placeholder="O que procura?" />
        <ButtonAsk>
          <Icon src={arrowright2} />
        </ButtonAsk>
        <Link to="/entrar">
          <FiUser size={30} style={{ marginLeft: 50 }} />
        </Link>
      </ContainerAskIntput>
    </Container>
  );
};

export default Header;
