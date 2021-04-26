import React from "react";

import {
  Container,
  Left,
  Right,
  Image,
  MainLeft,
  ContainerImage,
  ContanierLogin,
  FormLogin,
  Title,
  Input,
  Button,
  Span,
} from "./styles";
import LoginImage from "../../assets/images/login.png";
import SimpleHeader from "../../components/SimpleHeader";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";

const Logon: React.FC = () => {
  // const [formState, setFormState] = useState({
  //   login: true,
  //   email: "",
  //   password: "",
  //   name: "",
  // });
  return (
    <Container>
      <Left>
        <SimpleHeader />
        <MainLeft>
          <ContainerImage>
            <Image src={LoginImage} />
          </ContainerImage>
        </MainLeft>
      </Left>
      <Right>
        <ContanierLogin>
          <Title>Conecte-se</Title>
          <FormLogin>
            <Input placeholder="Email" />
            <Input placeholder="Senha" />

            <Link to="/registo-produto">
              <Button>
                Entrar
                <Span>
                  <FiLogIn />
                </Span>
              </Button>
            </Link>
          </FormLogin>
        </ContanierLogin>
      </Right>
    </Container>
  );
};

export default Logon;
