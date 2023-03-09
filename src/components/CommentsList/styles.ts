import styled from "styled-components";

export const DivComments = styled.ul`
  width: 100%;
  height: 34.375rem;
  display: flex;
  flex-direction: column;
  list-style: none;
  background-color: #fdfdfd;
  border-radius: 0.25rem;
  padding: 0.625rem;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 5px;
    /* display: none; */
  }

  ::-webkit-scrollbar-thumb {
    background: var(--gray6);
    border-radius: 10px;
    height: 10px;
  }

  @media screen and (min-width: 900px) {
    max-width: 750px;
  }

  h3 {
    font-family: var(--lexend);
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    padding: 20px;
  }

  @media screen and (max-width: 900px) {
    width: 90%;
  }

  @media screen and (min-width: 700px) {
    margin: 0 5.625rem;
  }

  .container--empty {
    padding: 20px;

    p {
      font-family: var(--inter);
      font-size: 20px;
    }
  }
`;
