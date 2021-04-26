import React from "react";

import { Container, ContainerList, Title, Title1 } from "./styles";
import CardShop from "../../components/CardShop";
import SimpleHeader from "../../components/SimpleHeader";

const ProductList: React.FC = () => {
  return (
    <Container>
      <SimpleHeader title="Masculino" />

      <ContainerList>

        <CardShop
          // onclick={e}
          style={{ marginRight: 30, marginBottom: 40 }}
          image="https://cdn.pixabay.com/photo/2017/04/22/10/15/sport-2250970_960_720.jpg"
          title="Exclusivo para mulheres"
          name="Ténis da Nike Preto"
          price="10.000 kzs"
        />

        <CardShop
          style={{ marginRight: 30, marginBottom: 40 }}
          image="https://cdn.pixabay.com/photo/2017/04/22/10/15/sport-2250970_960_720.jpg"
          title="Exclusivo para mulheres"
          name="Ténis da Nike Preto"
          price="10.000 kzs"
        />

        <CardShop
          style={{ marginRight: 30, marginBottom: 40 }}
          image="https://cdn.pixabay.com/photo/2017/04/22/10/15/sport-2250970_960_720.jpg"
          title="Exclusivo para mulheres"
          name="Ténis da Nike Preto"
          price="10.000 kzs"
        />

        <CardShop
          style={{ marginRight: 30, marginBottom: 40 }}
          image="https://cdn.pixabay.com/photo/2017/04/22/10/15/sport-2250970_960_720.jpg"
          title="Exclusivo para mulheres"
          name="Ténis da Nike Preto"
          price="10.000 kzs"
        />

        <CardShop
          style={{ marginRight: 30, marginBottom: 40 }}
          image="https://cdn.pixabay.com/photo/2017/04/22/10/15/sport-2250970_960_720.jpg"
          title="Exclusivo para mulheres"
          name="Ténis da Nike Preto"
          price="10.000 kzs"
        />

        <CardShop
          style={{ marginRight: 30, marginBottom: 40 }}
          image="https://cdn.pixabay.com/photo/2017/04/22/10/15/sport-2250970_960_720.jpg"
          title="Exclusivo para mulheres"
          name="Ténis da Nike Preto"
          price="10.000 kzs"
        />
      </ContainerList>
    </Container>
  );
};

export default ProductList;
