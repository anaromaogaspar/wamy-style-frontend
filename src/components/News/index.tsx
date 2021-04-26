import React from "react";

import {
  Container,
  CardShop,
  Image,
  ImageContainer,
  CardsPresentation,
  Title,
  SimpleText,
} from "./styles";

const News: React.FC = () => {
  return (
    <Container>
      <Title>Novidades</Title>
      <CardsPresentation>
        <CardShop style={{ marginRight: "30px" }}>
          <ImageContainer>
            <Image src="https://cdn.pixabay.com/photo/2017/04/22/10/15/sport-2250970_960_720.jpg" />
          </ImageContainer>

          <SimpleText style={{ color: "#8C8C8C", marginTop: 16 }}>
            Mulher original
          </SimpleText>

          <SimpleText style={{ color: "#000000", marginTop: 20 }}>
            Ténis disportivo W
          </SimpleText>

          <SimpleText style={{ color: "#FF0000" }}>Kzs 79,000</SimpleText>
        </CardShop>

        <CardShop style={{ marginRight: "30px" }}>
          <ImageContainer>
            <Image src="https://blogs.flinders.edu.au/fit/wp-content/uploads/sites/19/2017/12/dumbbells-2465478_1920-pixabay_FIT.jpg" />
          </ImageContainer>
          <SimpleText style={{ color: "#8C8C8C", marginTop: 16 }}>
            Mulher original
          </SimpleText>

          <SimpleText style={{ color: "#000000", marginTop: 20 }}>
            Ténis disportivo W
          </SimpleText>

          <SimpleText style={{ color: "#FF0000" }}>Kzs 79,000</SimpleText>
        </CardShop>

        <CardShop style={{ marginRight: "30px" }}>
          <ImageContainer>
            <Image src="https://i2.wp.com/www.redbrick.me/wp-content/uploads/2020/09/skateboard-5221914_1920.jpg?ssl=1" />
          </ImageContainer>
          <SimpleText style={{ color: "#8C8C8C", marginTop: 16 }}>
            Mulher original
          </SimpleText>

          <SimpleText style={{ color: "#000000", marginTop: 20 }}>
            Ténis disportivo W
          </SimpleText>

          <SimpleText style={{ color: "#FF0000" }}>Kzs 79,000</SimpleText>
        </CardShop>

        <CardShop>
          <ImageContainer>
            <Image src="https://i2.wp.com/blog.parse.ly/wp-content/uploads/2018/11/feet-1840619_1920.jpg?ssl=1" />
          </ImageContainer>
          <SimpleText style={{ color: "#8C8C8C", marginTop: 16 }}>
            Mulher original
          </SimpleText>

          <SimpleText style={{ color: "#000000", marginTop: 20 }}>
            Ténis disportivo W
          </SimpleText>

          <SimpleText style={{ color: "#FF0000" }}>Kzs 79,000</SimpleText>
        </CardShop>


      </CardsPresentation>
    </Container>
  );
};

export default News;
