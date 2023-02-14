import styled from "styled-components";

interface ButtonProps {
  backgroud: string;
  color: string;
  border?: boolean;
  borderColor?: string;
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 0.4rem 1.2rem;
  border-radius: 0.4rem;

  background: ${(props) => props.backgroud};
  border: ${(props) => props.border && `0.1rem solid ${props.borderColor}`};

  font-family: "Inter";
  font-style: normal;
  font-size: 0.8rem;
  line-height: 2rem;
  color: ${(props) => props.color};

  :hover {
    padding: 0.2rem 1rem;
    transition: 2ms;
  }
`;
