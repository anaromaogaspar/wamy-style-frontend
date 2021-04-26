import { Link } from "react-router-dom";
import { Card } from "reactstrap";
import styled from "styled-components";

export const Container = styled.div`
  margin-left: 25px;
  width:100%;
`;

export const Title = styled.p`
font-family:Audiowide;
font-size:50px;
`;
export const ContainerTitle = styled.div`

@media(min-width:360px){
  width:100%;
  flex-direction:column;
  display:flex;
 padding:10px;
}
@media(min-width:1080px){
 
  flex-direction:column;
  display:flex;
 padding:0;
}`;

export const Description = styled.p`
font-family:B612 Mono;
margin-top:-10px;
display:flex;
width:100%;
`;
export const ContainerMenu = styled.div`
margin-top:5px;
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;

@media(min-width:360px){
  width:100%;
  flex-direction:column;
  display:flex;
 padding:10px;
}
@media(min-width:1080px){
  margin-top:5px;
display:flex;
width:100%;
align-items:center;
justify-content:center;
flex-direction:row;
}
`;
export const SwitchButtons = styled(Link)`
width:184px;
height:50px;
background:#ffffff;
border:1px solid #d3d3d3;
font-family:B612 Mono;
border-radius:10px;
transition:0.5s;

display:flex;
align-items:center;
justify-content:center;

  &:hover{
  cursor:pointer;
  box-shadow:0px 4px 50px 1px rgba(0, 0, 0, 0.25);
}

@media(min-width:360px){
  width:100%;
  flex-direction:column;
  display:flex;
 padding:20px;
}
@media(min-width:1080px){
  width:184px;
  height:50px;

  display:flex;
align-items:center;
justify-content:center;
}
`;
export const CardsPresentation = styled.div`
margin-top:60px;
display:flex;

@media(min-width:360px){
  width:100%;
  flex-direction:column;
  display:flex;
 padding:10px;
}
@media(min-width:1080px){
  margin-top:60px;
  display:flex;
  flex-direction:row;
  width:100%;
}
`;
export const CardShop = styled(Card)`
width:271px;
height:500px;
display:flex;
align-items:center;
flex-direction:column;
border:1pxsolid #d3d3d3;
box-sizing:border-box;
border-radius:30px;

@media(min-width:360px){
  width:100%;
  justfy-content:center;
  width:100%;
}
@media(min-width:1080px){
  width:100%;
  height:500px;
  display:flex;
  align-items:center;
  flex-direction:column;

}
`;

export const ButtonShop = styled(Link)`
display:flex;
align-items:center;
justify-content:space-between;
  width:100%;
height:45px;
padding:10px;

margin-top:90px;

border:1px solid #d3d3d3;
box-sizing:border-box;
border-radius:10px;
transition:0.5s;

  &:hover{
  background: #f9c2e2;
  border:none;

}
`;
export const ImageContainer = styled.div`
width:100%;
height:350px;
`;
export const Image = styled.img`
width:100%;
height:100%;

object-fit: cover;
border-top-left-radius:30px;
border-top-right-radius:30px;
`;
