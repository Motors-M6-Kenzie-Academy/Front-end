import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MainContainer = styled.main`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: var(--gray10);

  .top {
    background-color: var(--brand2);
    height: 50vh;
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

    @media only screen and (max-width: 716px) {
      h1 {
        font-size: 1.5rem;
      }
      p {
        font-size: 0.8rem;
      }
    }

    @media only screen and (max-width: 414px) {
      h1 {
        font-size: 1.2rem;
      }
      p {
        font-size: 0.7rem;
      }
    }
  }

  .leilao {
    padding: 4rem 2rem;

    .title-section {
      font-family: var(--lexend);
      font-style: normal;
      font-weight: 600;
      font-size: 2rem;
      line-height: 2rem;

      margin-bottom: 2rem;
      color: var(--gray0);
    }

    .scroll-card-leilao {
      display: flex;
      gap: 0.5rem;

      overflow-x: scroll;

      ::-webkit-scrollbar {
        width: 0;
      }

      @media screen and (min-width: 800px) {
        gap: 1.5rem;
      }
    }
  }

  .cars {
    width: 100%;
    padding: 4rem 2rem;

    .title-section {
      font-family: var(--lexend);
      font-style: normal;
      font-weight: 600;
      font-size: 2rem;
      line-height: 2rem;

      margin-bottom: 2rem;
      color: var(--gray0);
    }

    .scroll-card-cars {
      display: flex;
      gap: 2rem;

      overflow-x: scroll;

      ::-webkit-scrollbar {
        width: 0;
      }
    }
  }

  .motorsbike {
    width: 100%;
    padding: 4rem 2rem;
    margin-bottom: 7rem;

    .title-section {
      font-family: var(--lexend);
      font-style: normal;
      font-weight: 600;
      font-size: 2rem;
      line-height: 2rem;

      margin-bottom: 2rem;
      color: var(--gray0);
    }

    .scroll-card-motorsbike {
      display: flex;
      gap: 2rem;

      overflow-x: scroll;

      ::-webkit-scrollbar {
        width: 0;
      }
    }
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

  @media only screen and (max-width: 716px) {
    width: 8rem;
  }

  @media only screen and (max-width: 414px) {
    width: 6rem;
  }
`;
