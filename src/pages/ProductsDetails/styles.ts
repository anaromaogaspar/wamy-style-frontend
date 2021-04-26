import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  @media(min-width:360px){
  display: grid;
  width:100%;
  }

 @media(min-width:1080px){
  display: flex;
  width: 100vw;
  height: 100vh;
  }
`;
export const Right = styled.div`
  height: 100%;
  width: 20%;
  background: #ffffff;
  border: 1px solid #afafaf;

  display: flex;
  align-items: center;
  flex-direction: column;
  @media(min-width:360px){
    display:flex;
    width:100%;
    flex-direction: column;
    }
  
   @media(min-width:1080px){
    
    }

`;
export const Left = styled.div`
  height: 100%;
  width: 80%;
  background: #ffffff;
  @media(min-width:360px){
    display:flex;
    width:100%;
    flex-direction: column;
    }
  
   @media(min-width:1080px){
    display: flex;
    width: 100vw;
    height: 100vh;
    }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media(min-width:360px){
    display:flex;
    width:100%;
    flex-direction: column;
    }
  
   @media(min-width:1080px){
    
    }
`;
export const ContainerImage = styled.div`
  height: 50%;
`;
export const Header = styled.div`
  padding: 20px;
  margin-top: 10px;
  width: 100%;
  height: 3%;
`;
export const Original = styled.h1`
  font-family: B612 Mono;
`;

export const ContainerTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 50px;

  padding-left: 20px;
  padding-right: 20px;
`;
export const ProductTitle = styled.h1`
  font-family: Audiowide;
  font-style: normal;
  font-weight: normal;
  font-size: 45px;
  line-height: 76px;
`;
export const Description = styled.p`
  font-family: B612 Mono;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 27px;
`;
export const ContainerPriceDescont = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 50px;

  padding-left: 20px;
  padding-right: 20px;
`;
export const Price = styled.h1`
  font-family: B612 Mono;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 49px;

  color: #ff0000;
`;
export const Descont = styled.p`
  font-family: B612 Mono;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 27px;

  margin-top: 15px;
`;
export const AddInMarketCart = styled.button`
  width: 337px;
  height: 60px;
  margin-top: 25px;
  color: #ffffff;
  font-size: 22px;
  font-family: B612 Mono;

  padding-left: 20px;
  padding-right: 20px;
  background: #000000;
  border-radius: 15px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  outline: none !important;
  transition: 0.9s;

  &:hover {
    opacity: 0.5;
  }


`;
export const ContainerEspecify = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  padding-left: 20px;
  padding-right: 20px;
`;
export const EspecifyTitle = styled.h1`
  font-family: Audiowide;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 76px;
`;
export const Especify = styled.p`
  font-family: B612 Mono;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 27px;

  margin-top: 12px;
`;
export const ContainerPaymentMode = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  padding-left: 20px;
  padding-right: 20px;
  @media(min-width:360px){
    width:100%;
    width: 100%;
    flex-direction:column;
    display:flex;
 }

 @media(min-width:1080px){
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  padding-left: 20px;
  padding-right: 20px;
}
`;
export const PaymentMode = styled.p`
  display: flex;
  font-family: B612 Mono;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 27px;

  margin-top: 12px;
`;
export const ContainerFullDescriptionProduct = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  padding-left: 20px;
  padding-right: 20px;

 
`;
export const ContainerFullDescription = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  width: 600px;
  height: 352px;
`;
export const ContainerImageFullDescription = styled.div`
  width: 494px;
  height: 352px;
`;
export const TitleFullDescription = styled.p`
  margin-top: 16px;
  font-family: Audiowide;
  font-style: normal;
  font-weight: normal;
  font-size: 19px;
  line-height: 24px;
`;
export const DescriptionFull = styled.p`
  margin-top: 27px;
  font-family: B612 Mono;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
`;
