import styled from "styled-components";

export const Container = styled.div``;

export const MainContainer = styled.main`
  width: 100vw;
  height: fit-content;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  background-color: var(--gray8);
`;

export const FormContainer = styled.form`
  margin: 2rem 0;
  width: 25rem;
  margin-bottom: 10rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;

  padding: 3rem 2rem;

  background-color: var(--gray10);
  border-radius: 0.3rem;
  box-shadow: 0.5rem 0.3rem 0.5rem var(--gray5);

  h2 {
    font-family: var(--lexend);
    font-style: normal;
    font-weight: 500;
    font-size: 1.5rem;
    color: var(--gray0);
  }

  p {
    font-family: var(--lexend);
    font-style: normal;
    font-weight: 500;
    font-size: 0.9rem;
    color: var(--gray0);
  }

  div {
    margin-bottom: 1rem;
  }

  .form-account-type {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  .teste {
    display: flex;
    width: 25rem;

    div {
      display: flex;
      align-items: flex-start;

      input {
        width: 8rem;
      }
    }
  }

  @media only screen and (max-width: 414px) {
    width: 19rem;

    .formSubmit {
      display: flex;
      align-items: center;
    }

    .teste {
      display: flex;
      width: 18rem;

      div {
        input {
          width: 6rem;
          font-size: 0.6rem;
        }
      }
    }
  }
`;

type InputsAccountTypeProps = {
  bgColor: string;
  border?: boolean;
};

export const FormSelectType = styled.input<InputsAccountTypeProps>`
  width: 9rem;
  height: 3rem;

  padding: 0.5rem 0.8rem;

  font-family: var(--lexend);
  font-style: normal;
  font-weight: 500;
  font-size: 0.9rem;

  text-align: center;

  background-color: ${(props) => props.bgColor};
  color: ${(props) => (props.border ? `black` : `white`)};
  border: ${(props) => props.border && `0.1rem solid var(--gray5)`};
  border-radius: 0.4rem;

  @media only screen and (max-width: 414px) {
    width: 6rem;
    padding: 0.3rem 0.5rem;
    font-size: 0.8rem;
  }
`;

type ButtonProps = {
  bgColor: string;
  txColor: string;
  border?: boolean;
};

export const Button = styled.button<ButtonProps>`
  height: 2.8rem;
  width: 21rem;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: var(--inter);
  font-style: normal;
  font-size: 1rem;
  font-weight: 600;

  color: ${(props) => props.txColor};
  background-color: ${(props) => props.bgColor};

  padding: 0.5rem 0.8rem;

  border: ${(props) => props.border && `0.1rem solid var(--gray5)`};
  border-radius: 0.4rem;

  @media only screen and (max-width: 414px) {
    width: 14rem;
  }
`;
