import styled from "styled-components";

export const Container = styled.div`
@media(min-width:360px) {
@media(min-width:1080px) {
}
`;


export const Title = styled.text`

  `;
export const ContainerList = styled.div`
  display:flex;
  flex-wrap:wrap;
  align-items:center;
  justify-content:center;
  margin-top:50px;

 
  `;



export const Title1 = styled.text`
  
    `;

// {"obj": [{
//   "name": "Material bélico",
//   "description": "Muito bom",
//   "price": 20.000,
//   "quantity": 20,
//   "categories": [{"name": "Ferro"},{"name": "Balão de ar"} ],
//   "mainDetail": "Muto bom, por isso deves comprar.",
//   "specifications": "Muto bom, durável, excepcional"
//   }]}

// mutation($obj: [AddProductInput!]!) {
//   addProduct(productsInput: $obj) {
//     id
//     name
//   }
// }
