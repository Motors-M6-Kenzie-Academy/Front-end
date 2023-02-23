import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MainContainer = styled.main`
  width: 100vw;
  height: 80vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--gray8);
`;

export const FormContainer = styled.form`
  width: 25rem;

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

  .formInputs {
    display: flex;
    flex-direction: column;
  }

  .formSubmit {
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  a {
    font-family: var(--inter);
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 2.4rem;

    color: var(--gray2);
  }

  a .tx-center {
    display: flex;
    justify-content: center;
  }

  a .tx-end {
    display: flex;
    justify-content: flex-end;
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
`;
