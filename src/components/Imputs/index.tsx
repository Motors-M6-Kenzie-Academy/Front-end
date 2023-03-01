import styled from "styled-components";

interface InputProps {
  label?: string;
  placeHolder?: string;
  typeInput?: string;
}

const Container = styled.div`
  width: 20rem;

  display: flex;
  flex-direction: column;

  margin-bottom: 1rem;

  label {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 1rem;
    line-height: 2rem;
    color: #212529;
  }

  input {
    height: 2.2rem;
    width: 21rem;
    padding: 0.5rem 0.8rem;
    font-size: 0.8rem;
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

  @media only screen and (max-width: 414px) {
    input {
      width: 14rem;
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
