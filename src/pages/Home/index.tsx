import React from "react";
import Header from "../../components/Header";
import { Icon } from "../../components/Header/styles";

import {
  Container,
  Image,
  ConatinerLanding,
  ContainerGo,
  BasicTitle,
  RightButton,
  Slogan,
  Go,
  ContainerMenu,
  FirstImagePresentation,
  ImagePresentationRight,
  ImageRight,
  DivLock,
  TitleAboutPrice,
  ContainerDescription,
  SecondImagePresentation,
  ImagePresentationLeft,
  DivLockLeft,
  ContainerDescriptionLeft,
  ImageLeft,
} from "./styles";
import arrowright2 from "../../assets/icons/arrow-right2.png";
import Menu from "../../components/Menu";
import WamiMenu from "../../components/WamiMenu";
import News from "../../components/News";
import Spotlight from "../../components/Spotlight";
import Footer from "../../components/Footer";

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <ConatinerLanding>
        <Image src="https://cdn.pixabay.com/photo/2018/05/11/16/29/portrait-3390965_960_720.jpg" />
        <ContainerGo>
          <BasicTitle>Sabe o que é melhor?</BasicTitle>
          <BasicTitle>Viver a vida com mais estilo</BasicTitle>
          <Slogan>Encontre seu estilo</Slogan>

          <Go>
            Go <Icon src={arrowright2} style={{ width: 80 }} />
          </Go>
        </ContainerGo>
        <RightButton>
          <Icon src={arrowright2} />
        </RightButton>
      </ConatinerLanding>

      <ContainerMenu>
        <Menu isSmall={false} />
        <WamiMenu />
      </ContainerMenu>

      <FirstImagePresentation>
        <div style={{ width: "10%" }}></div>
        <ImagePresentationRight>
          <DivLock style={{ zIndex: 2, position: "absolute" }}>
            <div></div>
            <ContainerDescription>
              <TitleAboutPrice>
                Os melhores <br /> preços
              </TitleAboutPrice>
              <TitleAboutPrice style={{ fontSize: 20 }}>
                E a melhor qualidade
              </TitleAboutPrice>
            </ContainerDescription>
          </DivLock>
          <ImageRight src="https://www.maxpixel.net/static/photo/1x/Kenya-Portrait-Mombasa-Model-Beautiful-Africa-3786065.jpg" />
        </ImagePresentationRight>
      </FirstImagePresentation>

      <SecondImagePresentation>
        <ImagePresentationLeft>
          <DivLockLeft style={{ zIndex: 2, position: "absolute" }}>
            <div></div>
            <ContainerDescriptionLeft>
              <TitleAboutPrice>
                Os melhores <br /> preços
              </TitleAboutPrice>
              <TitleAboutPrice style={{ fontSize: 20 }}>
                E a melhor qualidade
              </TitleAboutPrice>
            </ContainerDescriptionLeft>
          </DivLockLeft>
          <ImageLeft src="https://www.maxpixel.net/static/photo/1x/Culture-Fashion-Africa-Mexico-Woman-Traditional-1475557.jpg" />
        </ImagePresentationLeft>
        <div style={{ width: "10%" }}></div>
      </SecondImagePresentation>

      <News />
      <Spotlight />

      <Footer />
    </Container>
  );
};

export default Home;
