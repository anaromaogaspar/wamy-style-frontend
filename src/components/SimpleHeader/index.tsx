import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Image } from "../Header/styles";
import logo from "../../assets/logo/logo.png";
import { Container, Header, Text } from "./styles";



interface SimpleHeaderProps {
  title?: string;
}



const SimpleHeader = ({ title }: SimpleHeaderProps) => {
  return (
    <Container>
      <Header>
        <Link to="/">
          <FiArrowLeft size={30} style={{ marginRight: 40, marginLeft: 50 }} />
        </Link>
        <Image style={{ width: 180 }} src={logo} />
      </Header>
      <Text>{title}</Text>
    </Container>
  );
};

export default SimpleHeader; 
