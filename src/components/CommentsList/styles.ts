import styled from "styled-components";

export const DivComments = styled.ul`
    width: 46.9375rem;
    height: 34.375rem;
    display: flex;
    flex-direction: column;
    list-style: none;
    background-color: #FDFDFD;
    border-radius: .25rem;
    padding: .625rem;
    

    h3{
        font-size: 1.25rem;
        font-family: var(--lexend);
        color: #212529
    }

    @media screen and (min-width: 700px) {
        margin: 0 5.625rem;
    }
`