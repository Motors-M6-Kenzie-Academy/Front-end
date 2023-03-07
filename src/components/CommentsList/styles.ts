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

  h3{
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
`;
