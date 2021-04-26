import styled from "styled-components";

export const Container = styled.div``;
export const CardShopContainer = styled.div`
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
`;

export const ImageContainer = styled.div`
  width: 410px;
  height: 350px;
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
  @media (min-width: 1080px) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-left-radius: 30px;
  }
`;
export const SimpleText = styled.p`
  margin-left: 20px;
  font-family: B612 Mono;
  font-size: 15px;
`;
