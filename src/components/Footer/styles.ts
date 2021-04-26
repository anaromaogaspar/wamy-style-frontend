import styled from "styled-components";

export const Container = styled.div`
  width:100%;
  margin-top:50px;
  background:#f9c2e2;

`;
export const Main = styled.div`
  width:100%;
  height:330px;
  background:#f9c2e2;
  @media(min-width:360px){
    width:100%;
   display:flex;
   flex-direction:column;
 }

 @media(min-width:1080px){
  width:100%;
  height:330px;
  background:#f9c2e2;
}
`;
export const ContainerFollowUsAndNewslatter = styled.div`
  width:100%;
  height:200px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding-left:100px;
  padding-right:100px;
  @media(min-width:360px){
    width:100%;
   display:flex;
   flex-direction:column;
 }

 @media(min-width:1080px){
  width:100%;
  height:200px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding-left:100px;
  padding-right:100px;
  flex-direction:row;
}
`;


export const ContainerFollowUs = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
 
`;
export const Text = styled.p`
  color:#000000;
  font-family:Audiowide;
  font-size:40px;
  @media(min-width:360px){
    font-size:24px;
    width:100%;
    display:flex;

  }
  @media(min-width:1080px){
    font-family:Audiowide;
    font-size:40px;
    width:100%;
    padding:20px;
  }
  
`;
export const ContainerNewslatter = styled.div`

`;
export const SocialNetwork = styled.div`
  display:flex;
  margin-top:20px;
  
`;
export const Input = styled.input`
  width:809px;
  height:65px;
  padding:20px;
  font-family:B612 Mono;
  background:#fda0d6;
  outline:none;
  color:#fff;

  border-radius:10px;

  &::placeholder{
    color:#fff;
  }
  @media(min-width:360px){
    width:300px;
    height:50px;
 }

 @media(min-width:1080px){
  width:809px;
  height:65px;
  padding:20px;
  font-family:B612 Mono;
  background:#fda0d6;
  outline:none;
  color:#fff;
  border-radius:10px;

}
`;

export const ContaineMenu = styled.section`
  

  @media(min-width:360px){ 
    width:100%;
    display:none;
    padding:20px;
    }


          @media(min-width:1080px){
            width:100%;
            display:flex;
            flex-direction:column;
          }

`;
