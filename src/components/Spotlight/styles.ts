import styled from "styled-components";


export const Container = styled.div`
@media (min-width:360px){
  width: 100%;
 padding:20px;
justify-content:center;
text-align:center;
  
}
`;


export const ConatinerSpotlight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.5s;
  border-radius: 30px;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 4px 91px 1px rgba(0, 0, 0, 0.25);
  }
`;
export const ConatinerSpotlightImage = styled.div`
  background-color: #d73392;
  width:1712px;
  height:466px;
  border-radius:30px;

  @media (min-width:360px){
    width:100%;
  justify-content:center;
  text-align:center;
    
  }
  @media (min-width:1080px){
    width:100%;
    height:466px;
    border-radius:30px;
  
  }
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 30px;
  object-fit: cover;
`;
export const SimpleText = styled.p`
  margin-left: 20px;
  font-family: B612 Mono;
  font-size: 15px;
`;
