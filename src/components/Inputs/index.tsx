import styled from "styled-components";

interface InputProps {
  label: string;
  placeHolder: string;
  typeInput: string;
}

const Container = styled.div`
  width: 20rem;
  height: 7rem;
  display: flex;
  flex-direction: column;

  label {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 0.8rem;
    line-height: 2rem;
    color: #212529;
  }

  input {
    padding: 0.5rem 0.8rem;
    border: 0.1rem solid #e9ecef;
    border-radius: 0.4rem;
    background-color: transparent;

    :focus {
      outline: none;
      background-color: transparent;
    }

    :hover {
      border: 0.1rem solid #5126ea;
    }
  }
`;

export default function InputContainer({
  label,
  placeHolder,
  typeInput,
}: InputProps) {
  return (
    <Container>
      <label htmlFor={label}>{label}</label>
      <input type={typeInput} placeholder={placeHolder} id={label} />
    </Container>
  );
}
