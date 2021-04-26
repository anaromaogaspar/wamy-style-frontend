import styled from "styled-components";

export const Container = styled.div`
  display:flex;
  width:778px;
  flex-direction:row;
  @media(min-width:360px){
    width:100%;
   padding:10px;
  }
  @media(min-width:1080px){
    width:778px;
    display:flex;
    flex-direction:row;
  }
`;

export const Image = styled.img`

`;



export const AskInput = styled.input`
width:778px;
height:70px;
background:#f0f0f0;
border-radius:10px;
outline:none;
padding:20px;
font-family:B612 Mono;

@media(min-width:360px) {
  width:100%;
}
@media(min-width:1080px) {
  width:778px;
  height:70px;
  background: #f0f0f0;
  border-radius:10px;
  outline:none;
  padding:20px;
}
`;
export const ContainerAskIntput = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
@media(min-width:360px){
  width:100%;
}
@media(min-width:1080px) {
  display:flex;
  align-items:center;
  justify-content:space-between;

}

`;
export const ButtonAsk = styled.button`
width:77px;
height:70px;
background:#000000;
border-radius:20px;
margin-eft:20px;
display:flex;
align-items:center;
justify-content: center;
border:none;
outline:none!important;
transition:0.7s;

  &:active{
  outline:none;
  border:none;
}

  &:hover{
  opacity:0.9;
  background: #d73392;
}

`;
export const Icon = styled.img`


  `;
