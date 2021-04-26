import React from "react";

import {
  Container,
  Title,
  ContainerTitle,
  Description,
  ContainerMenu,
  SwitchButtons,
  CardsPresentation,
  CardShop,
  Image,
  ButtonShop,
  ImageContainer,
} from "./styles";
import ArrowRight from "../../assets/icons/ArrowRight/arrow@3x.png";

const WamiMenu: React.FC = () => {
  return (
    <Container>
      <ContainerTitle>
        <Title>WAMI</Title>
        <Description>Sua escolhas</Description>
      </ContainerTitle>
      <ContainerMenu>
        <SwitchButtons style={{ marginRight: 15 }} to="">
          Ténis
        </SwitchButtons>
        <SwitchButtons style={{ marginRight: 15 }} to="">
          Camisas
        </SwitchButtons>
        <SwitchButtons style={{ marginRight: 15 }} to="">
          Camisolas
        </SwitchButtons>
        <SwitchButtons style={{ marginRight: 15 }} to="">
          Calças
        </SwitchButtons>
        <SwitchButtons style={{ marginRight: 15 }} to="">
          Vestidos
        </SwitchButtons>
        <SwitchButtons to="">Esportes</SwitchButtons>
      </ContainerMenu>

      <CardsPresentation>
        <CardShop style={{ marginRight: "30px" }}>
          <ImageContainer>
            <Image src="https://www.maxpixel.net/static/photo/1x/Person-Fashion-Face-Woman-People-Afro-African-5007873.jpg" />
          </ImageContainer>

          <ButtonShop to="">
            COMPRAR AGORA{" "}
            <img alt="" style={{ width: 40, height: 15 }} src={ArrowRight} />
          </ButtonShop>
        </CardShop>

        <CardShop style={{ marginRight: "30px" }}>
          <ImageContainer>
            <Image src="https://www.maxpixel.net/static/photo/1x/Culture-Fashion-Africa-Mexico-Woman-Traditional-1475557.jpg" />
          </ImageContainer>
          <ButtonShop to="">
            COMPRAR AGORA{" "}
            <img alt="" style={{ width: 40, height: 15 }} src={ArrowRight} />
          </ButtonShop>
        </CardShop>

        <CardShop style={{ marginRight: "30px" }}>
          <ImageContainer>
            <Image src="https://www.maxpixel.net/static/photo/1x/Person-Fashion-Face-Woman-People-Afro-African-5007873.jpg" />
          </ImageContainer>
          <ButtonShop to="">
            COMPRAR AGORA{" "}
            <img alt="" style={{ width: 40, height: 15 }} src={ArrowRight} />
          </ButtonShop>
        </CardShop>

        <CardShop>
          <ImageContainer>
            <Image src="https://www.maxpixel.net/static/photo/1x/Person-Fashion-Face-Woman-People-Afro-African-5007873.jpg" />
          </ImageContainer>
          <ButtonShop to="">
            COMPRAR AGORA{" "}
            <img alt="" style={{ width: 40, height: 15 }} src={ArrowRight} />
          </ButtonShop>
        </CardShop>
      </CardsPresentation>
    </Container>
  );
};

export default WamiMenu;
