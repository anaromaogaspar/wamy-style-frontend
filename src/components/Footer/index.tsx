import React from "react";

import {
  ContaineMenu,
  Container,
  Main,
  ContainerFollowUsAndNewslatter,
  ContainerFollowUs,
  Text,
  ContainerNewslatter,
  SocialNetwork,
  Input,
} from "./styles";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import Menu from "../Menu";

const Footer: React.FC = () => {
  return (
    <Container>
      <Main>
        <ContainerFollowUsAndNewslatter>
          <ContainerFollowUs>
            <Text>Siga-nos</Text>
            <SocialNetwork>
              <FiInstagram style={{ marginRight: 20 }} size={20} />
              <FiTwitter style={{ marginRight: 20 }} size={20} />
              <FiFacebook size={20} />
            </SocialNetwork>
          </ContainerFollowUs>
          <ContainerNewslatter>
            <Text>Newslatter</Text>
            <Input placeholder="Email" />
          </ContainerNewslatter>

        </ContainerFollowUsAndNewslatter>

        <ContaineMenu>
          <Menu isSmall={true} />
        </ContaineMenu>


      </Main>
    </Container>
  );
};

export default Footer;
