import React from "react";
import { Title } from "../News/styles";

import {
  Container,
  ConatinerSpotlight,
  Image,
  SimpleText,
  ConatinerSpotlightImage,

} from "./styles";

const Spotlight: React.FC = () => {
  return (
    <Container>
      <Title>Em destaque</Title>
      <ConatinerSpotlight>
        <ConatinerSpotlightImage>
          <Image src="https://cdn.pixabay.com/photo/2017/04/22/10/15/sport-2250970_960_720.jpg" />
        </ConatinerSpotlightImage>
        <SimpleText style={{ color: "#8C8C8C", marginTop: 16 }}>
          Mulher original
        </SimpleText>

        <SimpleText style={{ color: "#000000", marginTop: 20 }}>
          Ténis disportivo W
        </SimpleText>

        <SimpleText style={{ color: "#FF0000", marginTop: 20 }}>
          Kzs 79,000
        </SimpleText>
      </ConatinerSpotlight>
    </Container>
  );
};

export default Spotlight;
