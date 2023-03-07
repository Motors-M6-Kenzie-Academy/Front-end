import styled from "styled-components";

export const Card = styled.div`
  /* width: 41.4375rem; */
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  /* padding: 20px; */
  margin-bottom: 15px;

  .headerCard {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* gap: 15px; */
    padding: 5px;
  }

  .container--split {
    display: flex;
    gap: 20px;
    align-items: center;
  }

  .avatar {
    display: flex;
    align-items: center;
    justify-content: center;

    min-width: 2rem;
    min-height: 2rem;
    border-radius: 100%;

    font-family: var(--inter);
    font-size: 0.875rem;

    background-color: var(--brand2);
    color: var(--white);
  }

  /* .nameUser {
    width: 32%;
  } */

  strong {
    font-size: 0.875rem;
    font-weight: 500;
    font-family: var(--lexend);
  }

  button {
    font-size: 12px;
    border-radius: 50%;
  }

  .created {
    font-family: var(--inter);
    color: var(--grey3);
    font-size: 0.75rem;
    min-width: 71px;
  }

  .comment {
    font-family: var(--inter);
    font-size: 0.875rem;
    color: var(--grey2);
    padding: 10px;

    p {
      overflow-wrap: break-word;
    }
  }
`;
