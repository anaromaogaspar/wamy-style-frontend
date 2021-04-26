import { Card } from "reactstrap";
import styled from "styled-components";


export const Container = styled.div`
@media (min-width:360px){
  width:100%;
  font-size:30px;
  padding:20px;
  text-align:center;
 
}

@media (min-width:1080px){
  text-align:left;
 justfy-content:center;
 width: 100%;

}

 `;


export const CardShop = styled(Card)`
  width: 410px;
  height: 500px;
  display: flex;
  flex-direction: column;
  transition: 0.5s;
  /* border: 1px solid #d3d3d3; */
  box-sizing: border-box;
  border-radius: 30px;
 
  &:hover {
    box-shadow: 0px 4px 91px 1px rgba(0, 0, 0, 0.25);
    cursor: pointer;


  }
  
  @media (min-width:360px){
    width: 100%;
    font-size:30px;
    padding:20px;
    text-align:center;
   
  }
  
  @media (min-width:1080px){
  
    width:271px;
    height:500px;
    display: flex;
    flex-direction: column;
    transition: 0.5s;
    /* border: 1px solid #d3d3e3; */
    box-sizing: border-box;
    border-radius: 30px;
    font-size:0px;
    padding:0px;
  }



`;

export const ImageContainer = styled.div`
  width: 410px;
  height: 350px;
  @media (min-width:360px){
    width: 100%;
    font-size:30px;
    padding:20px;
    text-align:center;
   
  }
  
  @media (min-width:1080px){
    width: 100%;
    height: 350px;
    font-size:0px;
    padding:0px;
    text-align:center;
  }
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  @media (min-width: 360px) {
    width: 100%;

    }
    @media (min-width:1080px){
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-top-left-radius: 30px;
    }

  
  @media (min-width: 1080px) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-left-radius: 30px;
  }

`;
export const CardsPresentation = styled.div`
  margin-top: 60px;
  display: flex;

  @media (min-width:360px){
    width:100%;
    display:flex;
    flex-direction:column;
  
    
  }
  @media (min-width:1080px){
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    justify-content:center;
    align-itens:center;
    
  }
  

`;
export const Title = styled.h1`
  margin-top: 40px;
  font-family: Audiowide;
  font-size: 50px;

  @media (min-width:360px){
    width: 100%;
    font-size:40px;
  }
  @media (min-width:1080px){
    margin-top: 40px;
    font-family: Audiowide;
    font-size: 60px;
  text-align:center;
  }

`;
export const SimpleText = styled.p`
  margin-left: 20px;
  font-family: B612 Mono;
  font-size: 15px;
`;
