import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { FiSave } from "react-icons/fi";
import {
  Container,
  ContainerFormTitle,
  Title,
  Main,
  ContainerForm,
  Input,
  InputGroup,
  Form,
  TextArea,
  Button,
} from "./styles";
import SimpleHeader from "../../components/SimpleHeader";

const ProductRegister: React.FC = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
    quantity: 0,
    categories: [{ name: "Ferro" }, { name: "Balão de ar" }],
    mainDetail: "",
    specifications: "",
  });

  const EXCHANGE_RATES = gql`
    query {
      allUsers {
        name
        email
      }
    }
  `;
  const ADD_PRODUCT = gql`
    mutation($obj: [AddProductInput!]!) {
      addProduct(productsInput: $obj) {
        id
        name
      }
    }
  `;
  // const { loading, error, data } = useQuery(EXCHANGE_RATES);
  const [addProduct, { data }] = useMutation(ADD_PRODUCT);

  function onSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    addProduct({ variables: { obj: [product] } }).then((data) => {
      console.log(data);
    });
    console.log(data);
    console.log([product]);
  }

  return (
    <Container>
      <SimpleHeader />

      <Main>
        <ContainerFormTitle>
          <Title>
            Cadastre <br /> seu produto
          </Title>
          <ContainerForm>
            <Form>
              <InputGroup>
                <Input
                  placeholder="Nome"
                  style={{ marginRight: 25 }}
                  onChange={(e) => {
                    setProduct({ ...product, name: e?.target?.value });
                    console.log(product?.name);
                  }}
                />
                <Input
                  placeholder="Categoria"
                  // onChange={(e) => {
                  //   setProduct({ ...product, name: e.target.value });
                  //   console.log(product.name);
                  // }}
                />
              </InputGroup>

              <InputGroup>
                <Input
                  placeholder="Preço"
                  style={{ marginRight: 25 }}
                  onChange={(e) => {
                    setProduct({
                      ...product,
                      price: parseFloat(e?.target?.value),
                    });
                    console.log(product?.price);
                  }}
                />
                <Input
                  placeholder="Quantidade"
                  onChange={(e) => {
                    setProduct({
                      ...product,
                      quantity: parseFloat(e?.target?.value),
                    });
                    console.log(product?.quantity);
                  }}
                />
              </InputGroup>

              <InputGroup>
                <Input placeholder="Cores" style={{ marginRight: 25 }} />
                <Input
                  placeholder="Principal Detalhe"
                  onChange={(e) => {
                    setProduct({
                      ...product,
                      mainDetail: e?.target?.value,
                    });
                    console.log(product?.mainDetail);
                  }}
                />
              </InputGroup>
              <TextArea
                placeholder="Descrição"
                style={{ width: "825px", height: "134px" }}
                onChange={(e) => {
                  setProduct({
                    ...product,
                    description: e?.target?.value,
                  });
                  console.log(product?.description);
                }}
              />
              <TextArea
                placeholder="Especificações"
                style={{ width: "825px", height: "134px" }}
                onChange={(e) => {
                  setProduct({
                    ...product,
                    specifications: e?.target?.value,
                  });
                  console.log(product.specifications);
                }}
              />
              <div style={{ width: "825px", height: "134px" }}>
                <Button onClick={onSubmit}>
                  Cadastrar <FiSave />
                </Button>
              </div>
            </Form>
          </ContainerForm>
        </ContainerFormTitle>
      </Main>
    </Container>
  );
};

export default ProductRegister;
