import styled from "styled-components";

export const ContainerBannerCreateAds = styled.div`
  .background--blue {
    background-color: var(--brand1);
    height: 200px;
    width: 100vw;
  }
  .container--create--ads {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 20px;
    margin: 0 30px;

    /* width: 343px;  */
    height: fit-content;
    background-color: var(--white);
    box-shadow: 0px 0px 15px 0px rgba(163, 163, 163, 1);

    position: relative;
    bottom: 101px;
    border-radius: 4px;

    @media screen and (min-width: 700px) {
      margin: 0 90px;
    }
  }

  .container--announcer {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    gap: 0.625rem;

    .avatar {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 5rem;
      height: 5rem;
      border-radius: 100%;

      font-family: var(--inter);
      font-size: 30px;

      background-color: var(--brand2);
      color: var(--white);
    }

    .container--name--type {
      display: flex;
      align-items: center;
      gap: 10px;

      strong {
        font-family: var(--lexend);
        font-size: 20px;
        font-weight: 500;
      }

      .tag {
        font-family: var(--inter);
        background-color: var(--brand4);
        color: var(--brand1);
        padding: 0.5rem;
        border-radius: 4px;
      }
    }
  }

  .paragraph--description {
    font-family: var(--inter);
    font-size: 15px;
    font-weight: 300;
    line-height: 28px;
  }
`;
