import styled from "styled-components";
import Car from "../../assets/Photo1.svg";

export const ContainerCardAuctionButton = styled.div`
  min-width: 20rem;
  height: fit-content;
  border-radius: 3.125rem;

  @media screen and (min-width: 800px) {
    min-width: 45.9375rem;
  }

  .container--button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    font-family: var(--inter);
    font-size: 1rem;

    padding: 0 1.5625rem;
    background: var(--brand1);
    color: var(--white);
    border-radius: 0 0 0.3125rem 0.3125rem;

    width: 100%;
    height: 3.8125rem;

    button {
      background: transparent;
      color: var(--white);

      svg {
        width: 1.5625rem;
        height: 1.5625rem;
      }

      &:hover {
        transform: scale(0.8) translate(0.625rem);
        color: var(--gray5);
        transition: 0.2s;
      }
    }
  }

  .container--buttons--edit {
    display: flex;
    gap: 0.9375rem;
  }
`;

export const ContainerCardAuction = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.29) 0%,
      #000000 100%
    ),
    url(${Car});
  background-repeat: no-repeat, no-repeat;
  background-position: right bottom, center;

  color: var(--white);
  width: 100%;
  height: 100%;
  padding: 1.5625rem;
  border-radius: 0.3125rem 0.3125rem 0 0;

  &:hover {
    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.61) 0%,
        rgba(0, 0, 0, 0.81) 50%
      ),
      url(${Car});
  }

  @media screen and (min-width: 800px) {
    padding: 1.875rem;
    gap: 1.5rem;
  }

  h2 {
    font-family: var(--lexend);
    font-size: 1.25rem;
    font-weight: 600;

    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2; /* number of lines to show */
    line-clamp: 2;
    -webkit-box-orient: vertical;

    @media screen and (min-width: 31.25rem) {
      -webkit-line-clamp: 1;
      line-clamp: 1;

      margin-top: 2.5rem;
    }
  }

  .container--description {
    line-height: 1.75rem;
    font-family: var(--inter);
    font-size: 16px;
  }

  .container--time {
    display: flex;
    align-items: center;
    gap: 0.3125rem;
    padding: 0.3125rem;

    border-radius: 2rem;
    background-color: var(--white);
    width: fit-content;
    font-family: var(--lexend);
    font-size: 0.875rem;
    color: var(--black);

    svg {
      width: 1.25rem;
      height: 1.25rem;
      color: var(--brand1);
    }
  }

  .container--announcer {
    display: flex;
    align-items: center;
    gap: 0.625rem;

    font-family: var(--inter);

    .avatar {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 2rem;
      height: 2rem;
      border-radius: 100%;

      font-family: "Inter", sans-serif;

      background-color: var(--brand2);
      color: var(--white);
    }
  }

  .container--tag--price {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    @media screen and (min-width: 800px) {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }

  .container--tags {
    display: flex;
    gap: 0.625rem;

    .tag {
      background-color: var(--brand4);
      color: var(--brand1);
      padding: 0.5rem;
      border-radius: 0.25rem;

      font-size: 14px;
      font-family: var(--inter);
    }
  }
  strong {
    font-family: var(--lexend);
    font-size: 1rem;
  }
`;
