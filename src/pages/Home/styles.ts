import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MainContainer = styled.main`
  width: 100vw;
  height: 90vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  overflow-y: scroll;
  margin-bottom: 2rem;

  background-color: var(--gray10);

  .top {
    background-color: var(--brand2);
    height: 50%;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;

    h1 {
      display: flex;
      flex-direction: column;
      font-family: var(--lexend);
      font-style: normal;
      font-weight: 700;
      font-size: 2.5rem;
      line-height: 3rem;

      text-align: center;

      color: var(--gray10);
    }

    p {
      font-family: var(--inter);
      font-style: normal;
      font-weight: 200;
      font-size: 1rem;
      line-height: 2rem;

      color: var(--gray10);
    }

    div {
      display: flex;
      gap: 5rem;
    }
  }

  .leilao {
    height: 40%;
    /* width: 100%; */

    padding: 4rem 2rem;

    .title-section {
      font-family: var(--lexend);
      font-style: normal;
      font-weight: 600;
      font-size: 2rem;
      line-height: 2rem;

      color: var(--gray0);
    }

    .scroll-card {
      display: flex;
      gap: 2rem;
    }
  }

  .cars {
    height: 10%;
    width: 100%;
    /* background-color: var(--random9); */
  }

  .motorsbike {
    height: 10%;
    width: 100%;
    /* background-color: var(--brand1); */
  }
`;

type ButtonProps = {
  bgColor: string;
  txColor: string;
  border?: boolean;
};

export const Button = styled.button<ButtonProps>`
  height: 2.8rem;
  width: 11rem;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: var(--inter);
  font-style: normal;
  font-size: 1rem;
  font-weight: 400;

  color: ${(props) => props.txColor};
  background-color: ${(props) => props.bgColor};

  padding: 0.5rem 0.8rem;

  border: ${(props) => props.border && `0.1rem solid var(--gray5)`};
  border-radius: 0.4rem;

  @media only screen and (max-width: 414px) {
    width: 14rem;
  }
`;
