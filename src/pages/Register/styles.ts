import styled from "styled-components";

export const Container = styled.div``;

export const MainContainer = styled.main`
  width: 100vw;
  height: fit-content;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  background-color: var(--gray8);
  overflow: hidden;
`;

export const FormContainer = styled.form`
  margin: 2rem 0;
  width: 100%;
  max-width: 25rem;
  margin-bottom: 10rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* gap: 2rem; */

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

  .container--title {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 2rem;
  }

  .container--inputs {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }

  p {
    font-family: var(--lexend);
    font-style: normal;
    font-weight: 500;
    font-size: 0.9rem;
    color: var(--gray0);
  }

  label {
    display: flex;
    flex-direction: column;
    gap: 10px;

    font-family: var(--inter);
    font-size: 14px;
    font-weight: 500;

    input {
      width: 100%;
      height: 50px;
      border: 1px solid var(--gray7);
      border-radius: 4px;
      padding: 0 10px;

      font-family: var(--inter);
      font-size: 16px;
      font-weight: 300;
    }
  }

  .form-account-type {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
  }

  .container--error {
    color: var(--alert1);
    font-weight: 400;
  }
`;

type ButtonAccountTypeProps = {
  bgColor: string;
  border?: boolean;
  textColor?: string;
};

export const ButtonSelectType = styled.button<ButtonAccountTypeProps>`
  width: 10rem;
  height: 3rem;

  padding: 0.5rem 0.8rem;

  font-family: var(--lexend);
  font-style: normal;
  font-weight: 500;
  font-size: 0.9rem;

  text-align: center;

  background-color: ${(props) => props.bgColor};
  color: ${(props) => (props.textColor ? props.textColor : `black`)};
  border: ${(props) => props.border && `0.1rem solid var(--gray5)`};
  border-radius: 0.4rem;

  @media only screen and (max-width: 414px) {
    width: 7rem;
    padding: 0.3rem 0.5rem;
    font-size: 0.8rem;
  }
`;

type ButtonFormProps = {
  bgColor: string;
  txColor: string;
  border?: boolean;
};

export const ButtonForm = styled.button<ButtonFormProps>`
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
