import styled from "styled-components";
import logo from "../../assets/effects/Effect.png";
import { Col } from "reactstrap";

export const Container = styled.div`
  padding-top:38px;
  display: flex;
  flex-direction:column;
  align-items:center;
  background:#ffffff;
`;
export const Main = styled.div`
  padding:0;
`;
export const ConatinerLanding = styled(Col)`
  background:url(${logo}) no-repeat center;
  background-size:971px;
  background-color:#d73392;
  width:1563px;
  height:466px;
  border-radius:60px;
  margin-top:60px;

  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:0 10px;

  @media(min-width:360px){
    width:100%; 
    font-size:20px;
    text-align:center;
   }

   @media(min-width:1080px){
    width:100%;
    height:466px;

    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:0 10px;
  
   }

`;
export const Image = styled.img`
  width:350px;
  height:447px;
  border-radius:60px;
  
`;
export const ContainerGo = styled.div`
  height:447px;
  display:flex;
  flex-direction:column;

  align-items:center;
  justify-content:center;

`;
export const BasicTitle = styled.p`
  font-family:Audiowide;
  font-size:44px;
  @media(min-width:360px){
    width:100%; 
    font-size:20px;
    text-align:center;
    margin-top:10px;
    
   }
   @media(min-width:1080px){
    font-family:Audiowide;
    font-size:44px;
   }
`;
export const RightButton = styled.button`
  width:158px;
  height:425px;
  background:#000000;
  border-radius:60px;
  outline:none !important;
  transition:0.9s;
  &:hover {
    opacity:0.5;
  }
 
   
`;
export const Slogan = styled.p`
  font-family:B612 Mono;
  font-size:22px;
  @media(min-width:360px){
    width:100%; 
    font-size:17px;
    text-align:center;
    margin-top:10px;
   }
   @media(min-width:1080px){
    font-family:B612 Mono;
  font-size:22px;
   }
`;
export const Go = styled.button`
  width:118px;
  height:56px;

  background:#000000;
  border-radius:15px;
  transition:0.9s;
  color:#fff;
  margin-top:100px;
  outline:none !important;

  display:flex;
  align-items:center;
  justify-content:space-between;
  font-family:Audiowide;

  padding-left:30px;

  &:hover{
    opacity:0.5;
  }
 

`;




export const ContainerMenu = styled.section`
  margin-top:80px;
  width:1563px;
  display:flex;
  
  @media(min-width:360px){ 
    width:100%;
    flex-direction: column;
    display:flex;
    padding:20px;
    }
  
    @media(min-width:1080px){
      margin-top:80px;
      width:1563px;
      display:flex;
      flex-direction:row;
    }
`;
export const FirstImagePresentation = styled.div`
  width:100%;
  height:939px;
  margin-top:50px;
  display:flex;
   @media(min-width:360px){ 
    display:flex;
    }
  
    @media(min-width:1080px){
      display:flex;
    }
`;
export const ImagePresentationRight = styled.div`
  width:90%;
  height:939px;
  border-top-left-radius:100px;
  border-bottom-left-radius:100px;
  transition:0.5s;
  &:hover{
    cursor:pointer;
    box-shadow:0px 4px 91px 1px rgba(0, 0, 0, 0.25);
    width:95%;
    height:939px;
  }
`;
export const ImageRight = styled.img`
  width:100%;
  height:100%;

  object-fit:cover;
  border-top-left-radius:100px;
  border-bottom-left-radius:100px;
`;
export const DivLock = styled.div`
  width:90%;
  height:939px;
  background:linear-gradient(
    359.34deg,
    #000000 3.44%,
    rgba(255, 255, 255, 0) 99.31%
  );
  border-top-left-radius:100px;
  border-bottom-left-radius:100px;

  display:flex;
  align-items:center;
  flex-direction:column;
  justify-content:space-between;
  transition:0.5s;
`;
export const TitleAboutPrice = styled.h1`
  color:#fff;
  font-size:50px;
  font-family:B612 Mono;
  @media(min-width:360px){
    font-size:30px
 }

 @media(min-width:1080px){
  color:#fff;
  font-size:50px;
  font-family:B612 Mono;
}
`;
export const ContainerDescription = styled.div`
  width:90%;
  margin-bottom:40px;
  display:flex;
  align-items:flex-end;
  justify-content:space-between;
 
`;

export const SecondImagePresentation = styled.div`
  width:100%;
  height:939px;
  margin-top:50px;
  display:flex;
`;

export const ImagePresentationLeft = styled.div`
  width:90%;
  height:939px;
  border-top-right-radius:100px;
  border-bottom-right-radius:100px;
  transition:0.5s;
  &:hover {
    cursor: pointer;
    box-shadow:0px 4px 91px 1px rgba(0, 0, 0, 0.25);
    width:95%;
    height:939px;
  }

`;
export const DivLockLeft = styled.div`
  width:90%;
  height:939px;
  background:linear-gradient(359.34deg,#000000 3.44%,rg(255, 255, 255, 0)99.31%);
  border-top-right-radius:100px;
  border-bottom-right-radius:100px;

  display:flex;
  align-items:center;
  flex-direction:column;
  justify-content:space-between;
  transition:0.5s;
`;
export const ContainerDescriptionLeft = styled.div`
  width:90%;
  margin-bottom:40px;
  display:flex;
  align-items:flex-end;
  justify-content:space-between;
 
`;
export const ImageLeft = styled.img`
  width:100%;
  height:100%;

  object-fit:cover;
  border-top-right-radius:100px;
  border-bottom-right-radius:100px;
`;

