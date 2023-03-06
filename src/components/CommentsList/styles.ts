import styled from "styled-components";

export const DivComments = styled.ul`
  width: 100%;
  max-width: 750px;
  height: 34.375rem;
  display: flex;
  flex-direction: column;
  list-style: none;
  background-color: #fdfdfd;
  border-radius: 0.25rem;
  padding: 0.625rem;

  @media screen and (max-width: 900px) {
    width: 90%;
  }

  h3 {
    font-size: 1.25rem;
    font-family: var(--lexend);
    color: #212529;
  }

  @media screen and (min-width: 700px) {
    margin: 0 5.625rem;
  }
`;
