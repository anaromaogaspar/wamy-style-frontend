import React from "react";

import {
  Container,
  Right,
  Left,
  Image,
  ContainerImage,
  Header,
  Original,
  ContainerTitle,
  ProductTitle,
  Description,
  ContainerPriceDescont,
  Price,
  Descont,
  AddInMarketCart,
  ContainerEspecify,
  EspecifyTitle,
  Especify,
  ContainerPaymentMode,
  PaymentMode,
  ContainerFullDescriptionProduct,
  ContainerFullDescription,
  ContainerImageFullDescription,
  TitleFullDescription,
  DescriptionFull,
} from "./styles";
import { FiShoppingBag, FiCreditCard, FiDollarSign } from "react-icons/fi";

const ProductsDetails: React.FC = () => {
  return (
    <Container>
      <Left>
        <ContainerImage>
          <Image src="https://i2.wp.com/blog.parse.ly/wp-content/uploads/2018/11/feet-1840619_1920.jpg?ssl=1" />
        </ContainerImage>

        <ContainerFullDescriptionProduct>
          <ContainerFullDescription>
            <ProductTitle>Calça Adidas</ProductTitle>
            <TitleFullDescription>
              COMEMORE O ANIVERSÁRIO DO NMD EM GRANDE ESTILO.
            </TitleFullDescription>

            <DescriptionFull>
              A série NMD completa cinco anos e, no verdadeiro estilo NMD,
              estamos comemorando fazendo barulho. Visualmente, é isso. Volume e
              localização são tudo você. Estes sapatos adidas combinam
              inspiração dos NMDs mais icônicos e criam uma declaração ousada
              com gráficos de destaque. Continue o legado com plugues NMD
              exclusivos e uma parte superior flexível em forma de meia. O
              amortecimento com retorno de energia mantém você confortável o dia
              todo. A festa já começou bem com estes.
            </DescriptionFull>
          </ContainerFullDescription>
          <ContainerImageFullDescription>
            <Image src="https://i2.wp.com/blog.parse.ly/wp-content/uploads/2018/11/feet-1840619_1920.jpg?ssl=1" />
          </ContainerImageFullDescription>
        </ContainerFullDescriptionProduct>
      </Left>
      <Right>
        <Header>
          <Original>Original</Original>
        </Header>
        <ContainerTitle>
          <ProductTitle>Calça Adidas</ProductTitle>
          <Description>Preta/Vermelha/Azul</Description>
        </ContainerTitle>

        <ContainerPriceDescont>
          <Price>Kzs 5000</Price>
          <Descont>
            Este produto está excluído de todas as promoções e descontos.
          </Descont>
          <AddInMarketCart>
            Comprar Agora <FiShoppingBag />
          </AddInMarketCart>
        </ContainerPriceDescont>

        <ContainerEspecify>
          <EspecifyTitle>Especificações</EspecifyTitle>
          <Especify>
            PAGUE O TEMPO EM PARCELAS SEM JUROS COM AFFIRM, KLARNA OU AFTERPAY
          </Especify>
          <Especify>
            PAGUE O TEMPO EM PARCELAS SEM JUROS COM AFFIRM, KLARNA OU AFTERPAY
          </Especify>
          <Especify>
            PAGUE O TEMPO EM PARCELAS SEM JUROS COM AFFIRM, KLARNA OU AFTERPAY
          </Especify>
        </ContainerEspecify>

        <ContainerPaymentMode>
          <FiCreditCard />
          <PaymentMode>
            PAGUE O TEMPO EM PARCELAS SEM JUROS COM AFFIRM, KLARNA OU AFTERPAY
          </PaymentMode>

          <FiDollarSign />
          <PaymentMode>
            PAGUE O TEMPO EM PARCELAS SEM JUROS COM AFFIRM, KLARNA OU AFTERPAY
          </PaymentMode>
        </ContainerPaymentMode>
      </Right>
    </Container>
  );
};

export default ProductsDetails;
