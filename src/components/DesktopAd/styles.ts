import styled from "styled-components";

export const DesktopContainer = styled.div`
  background: linear-gradient(
    180deg,
    #4529e6 25.25%,
    #f1f3f5 25.26%,
    #f1f3f5 100%
  );
  padding: 30px 0;
  width: 100%;

  .container--card--info {
    display: flex;
    flex-direction: column;
    gap: 30px;

    height: fit-content;
    width: 100%;
    background: var(--white);
    max-width: 750px;

    position: relative;
    bottom: 15px;
    border-radius: 4px;
    padding: 22px;

    h2 {
      font-family: var(--lexend);
      font-weight: 600;
      font-size: 20px;
      line-height: 25px;
    }

    p {
      font-family: var(--inter);
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
    }
  }

  .container--card--info--small {
    display: flex;
    flex-direction: column;
    gap: 30px;

    width: 334px;
    height: fit-content;
    background: var(--white);

    /* position: relative; */
    /* bottom: 15px; */
    border-radius: 4px;
    padding: 24px;

    h2 {
      font-family: var(--lexend);
      font-weight: 600;
      font-size: 20px;
      line-height: 25px;
    }

    p {
      font-family: var(--inter);
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
    }
  }

  .container--cover--image {
    width: 100%;
    /* height: 100%; */
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 750px;
  }

  .cover--image {
    width: 100%;
    height: 350px;
    background: var(--white);
    border-radius: 4px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .max--width {
    max-width: 400px;
  }

  .container--pictures {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 90px;
    grid-gap: 20px 8px;

    img {
      width: 100%;
      height: 100%;
      background-color: var(--gray8);
    }
  }

  .container--tag--price {
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media screen and (min-width: 500px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .container--tags {
      display: flex;
      gap: 0.625rem;

      .tag {
        background-color: var(--brand4);
        color: var(--brand1);
        padding: 0.5rem;

        font-size: 0.875rem;
        font-family: var(--inter);
      }
    }

    strong {
      font-family: var(--lexend);
      font-size: 1rem;
    }
  }

  .container--announcer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;

    font-size: 20px;
    font-family: var(--lexend);
    font-weight: 600;

    .avatar {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 77px;
      height: 77px;
      border-radius: 100%;

      background-color: var(--brand2);
      color: var(--white);

      font-size: 27px;
      font-family: var(--inter);
    }
  }

  .center--content {
    align-items: center;
  }
`;

export const RowContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  overflow: hidden;

  .bigger--container {
    width: 60%;
    margin-left: 15px;
  }

  .smaller--container {
    width: 40%;
  }
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
`;

export const BlueBackgroundDesktop = styled.div`
  width: 100vw;
  height: 400px;

  /* background-color: var(--brand1); */

  @media screen and (min-width: 800px) {
    display: flex;
    align-items: center;
  }
`;

export const GrayBackgroundDesktop = styled.div`
  width: 100vw;
  height: 100%;
  /* background-color: var(--gray8); */

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  button {
    font-weight: 600;
    font-size: 14px;
  }
`;
