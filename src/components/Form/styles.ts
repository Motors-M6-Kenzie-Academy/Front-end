import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  font-size: 20px;
  color: #fff;
  gap: 0.5rem;
  align-items: center;

  input {
    width: 90%;
    height: 45px;
    border-radius: 4px;
    background-color: #FDFDFD;
    color: #000;
    border: 2px solid #DEE2E6;
  }

  h2 {
    font-size: 16px;
    color: #000;
  }

  h3{
    font-size: 14px;
    color: #000;
  }
`;