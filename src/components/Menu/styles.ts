import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div` 
`;
export const Home = styled(Link)`
  width: 335px;
  height: 69px;
  background: #f0f0f0;
  border-radius: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 24px;
  font-family: B612 Mono;
  font-size: 22px;
  transition: 0.9s;

  &:hover {
    opacity: 0.5;
  }
`;
export const OtherMenu = styled(Link)`
  width: 335px;
  height: 133px;
  background: #000000;
  border-radius: 20px;
  color: #fff;
  margin-top: 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 24px;
  font-family: B612 Mono;
  font-size: 22px;
  transition: 0.9s;

  &:hover {
    opacity: 0.9;
  }

  @media(min-width:360px){ 
    width:100%;
    flex-direction: column;
    display:flex;
    }
  
    @media(min-width:1080px){
      width:100%;
      height:133px;
      background: #000000;
      border-radius:20px;
      color: #fff;
      margin-top:30px;
    
      display:flex;
      justify-content: column;
      align-items: center;
      flex-direction: row;
      padding: 24px;
      font-family: B612 Mono;
      font-size: 22px;
      transition: 0.9s;
    
      &:hover {
        opacity: 0.9;
    }
`;
export const ButtonArrow = styled.span`
  width: 79px;
  height: 74px;
  background: #ffffff;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

export const SmallHome = styled(Link)`
  width: 335px;
  height: 69px;
  background: #f0f0f0;
  border-radius: 20px;
  margin-right: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 24px;
  font-family: B612 Mono;
  font-size: 22px;
  transition: 0.9s;

  &:hover {
    opacity: 0.5;
  }
`;
export const SmallOtherMenu = styled(Link)`
  width: 335px;
  height: 69px;
  background: #000000;
  border-radius: 20px;
  color: #fff;
  margin-right: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 24px;
  font-family: B612 Mono;
  font-size: 22px;
  transition: 0.9s;

  &:hover {
    opacity: 0.9;
  }
`;
export const SmallButtonArrow = styled.span`
  width: 30px;
  height: 28px;
  background: #ffffff;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ContainerSmall = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width:100%;
  
`;

