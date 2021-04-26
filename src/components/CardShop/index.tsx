import React from "react";

import {
  Container,
  CardShopContainer,
  Image,
  ImageContainer,
  SimpleText,
} from "./styles";

interface CardShopProps {
  image: string;
  title: string;
  name: string;
  price: string;
  style?: {};
  event?:
    | ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void)
    | undefined;
}

const CardShop = ({
  image,
  title,
  name,
  price,
  style,
  event,
}: CardShopProps) => {
  return (
    <Container>
      <CardShopContainer style={style} onClick={event}>
        <ImageContainer>
          <Image src={image} />
        </ImageContainer>

        <SimpleText style={{ color: "#8C8C8C", marginTop: 16 }}>
          {title}
        </SimpleText>

        <SimpleText style={{ color: "#000000", marginTop: 20 }}>
          {name}
        </SimpleText>

        <SimpleText style={{ color: "#FF0000" }}>{price}</SimpleText>
      </CardShopContainer>
    </Container>
  );
};

export default CardShop;
