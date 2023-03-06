import styled from "styled-components";

export const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;

  background: linear-gradient(
    180deg,
    #4529e6 24.25%,
    #f1f3f5 24.26%,
    #f1f3f5 100%
  );

  padding: 15px 0;
  width: 100%;

  .container--card--info {
    display: flex;
    flex-direction: column;
    gap: 30px;

    height: fit-content;
    width: 90%;
    background: var(--white);

    position: relative;
    bottom: 15px;
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
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .cover--image {
    width: 90%;
    height: 350px;
    background: var(--white);
    border-radius: 4px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    font-weight: 600;
    font-size: 14px;
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

  .container--pictures {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 76px;
    grid-gap: 20px 8px;

    @media screen and (min-width: 400px) {
      grid-auto-rows: 90px;

      img {
        width: 90px;
        height: 90px;
      }
    }

    img {
      width: 100%;
      height: 100%;
      background-color: var(--gray8);
    }
  }
`;
