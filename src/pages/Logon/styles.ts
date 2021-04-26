import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  @media(min-width:360px){
   text-align:center;
   }
   @media(min-width:1080px){
    width: 100vw;
    height: 100vh;
    display: flex;
   }
 
`;
export const Left = styled.div`
  width:50%;
  height:100%;
  display:flex;
  flex-direction:column;

  background:#fda0d6;
  @media(min-width:360px){
    display:none;
   }
   @media(min-width:1080px){
    width:50%;
    height:100%;
    display:flex;
    flex-direction:column;
  
    background:#fda0d6;
   }
`;
export const Right = styled.div`
  width:50%;
  height:100%;

  background: #ffffff;
  border:1px solid #d73392;
  box-sizing: border-box;

  display:flex;
  align-items:center;
  justify-content:center;
  @media(min-width:360px){
    width:100%; 
 
   }
   @media(min-width:1080px){
    width:50%;
    height:100%;
    background: #ffffff;
    border:1px solid #d73392;
    box-sizing: border-box;
    display:flex;
    align-items:center;
    justify-content:center;
   }

`;
export const Image = styled.img`
  width:100%;
  height:100%;
  object-fit: cover;
`;
export const MainLeft = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ContainerImage = styled.div`
  width: 716px;
  height: 495px;
`;
export const ContanierLogin = styled.div`
`;
export const FormLogin = styled.div`
  width: 500px;
  height: 363px;
  @media(min-width:360px){ 
    align-itens:center;
   }
   width:300px;
  
`;
export const Title = styled.h1`
  font-size: 50px;
  font-family: Audiowide;
  @media(min-width:360px){ 
    font-size: 30px;
    
   }
   width:300px;
   @media(min-width:1080px){
    font-size: 50px;
    font-family: Audiowide;
  
   }
`;
export const Input = styled.input`
  width: 450px;
  height: 66px;
  outline: none;
  padding: 25px;
  margin-top: 25px;
  border: 1px solid #d73392;
  font-family: B612 Mono;
  border-radius: 10px;
  transition: 0.9s;

  &:hover {
    width: 550px;
  }
  &:focus {
    width: 550px;
  }
  &::placeholder {
    color: #d73392;
  }

  @media(min-width:360px){ 
    justfy-content:center;
    align-itens:center;
    text-align:center;
    padding:5px;
    
    &:hover {
      width: 350px;
    }
    &:focus {
      width: 350px;
    }
    &::placeholder {
      color: #d73392;
    }
   }
   width:300px;
   @media(min-width:1080px){
    width: 450px;
  height: 66px;
  outline: none;
  padding: 25px;
  margin-top: 25px;
  border: 1px solid #d73392;
  font-family: B612 Mono;
  border-radius: 10px;
  transition: 0.9s;

  &:hover {
    width: 550px;
  }
  &:focus {
    width: 550px;
  }
  
  
   }
`;
export const Button = styled.button`
  width: 347px;
  height: 60px;
  color: #fff;
  background: #000000;
  border-radius: 15px;
  font-family: B612 Mono;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-left: 25px;
  /* padding-right: 25px; */

  margin-top: 30px;

  outline: none !important;
  transition: 0.9s;

  &:hover {
    opacity: 0.8;
  }

  @media(min-width:360px){ 
    width: 247px;
    height: 50px;
  
   }
   width:300px;
   @media(min-width:1080px){
    width: 347px;
  height: 60px;
  
   }
`;
export const Span = styled.span`
  width: 50px;
  background: #d73392;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-bottom-right-radius: 15px;
  border-top-right-radius: 15px;

  @media(min-width:360px){ 
    width: 50px;
    height: 50px;
  
   }
   width:300px;
   @media(min-width:1080px){
    width: 50px;
    height: 60px;
  
   }
`;
