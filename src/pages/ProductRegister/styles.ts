import styled from "styled-components";

export const Container = styled.div``;
export const Header = styled.div`
  display: flex;
  align-items: center;
  padding-top: 20px;
 
`;
export const ContainerFormTitle = styled.div` 
`;
export const Title = styled.h1`
  font-family: Audiowide;
  font-size: 30px;
`;
export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

`;
export const ContainerForm = styled.div`
  width: 1110px;
  height: 750px;

  background: #fef5fa;
  border-radius: 10px;

  display: flex;
  justify-content: center;

  
`;
export const Input = styled.input`
  width: 400px;
  height: 70px;
  background: transparent;
  color: #000000;
  border: 1px solid #d73392;
  border-radius: 10px;
  padding: 20px;
  outline: none;
  font-family: B612 Mono;
  margin-top: 30px;

  &::placeholder {
    color: #d73392;
  }
`;
export const TextArea = styled.textarea`
  color: #000000;
  background: transparent;
  border: 1px solid #d73392;
  border-radius: 10px;
  padding: 20px;
  outline: none;
  font-family: B612 Mono;
  margin-top: 30px;
  max-height: 20%;
  &::placeholder {
    color: #d73392;
  }
 
`;
export const InputGroup = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

 
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 50px;

 
`;
export const Button = styled.button`
  width: 347px;
  height: 55px;
  color: #fff;
  background: #000000;
  border-radius: 15px;
  font-family: B612 Mono;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-left: 25px;
  padding-right: 25px;

  margin-top: 30px;

  outline: none !important;
  transition: 0.9s;

  &:hover {
    opacity: 0.8;
  }
`;
