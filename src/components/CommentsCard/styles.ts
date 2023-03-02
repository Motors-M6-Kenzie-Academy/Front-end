import styled from "styled-components";

export const Card = styled.div`
    width: 663px;
    height: 70px;
    display: flex;
    flex-direction: column;
    background-color: transparent;

    .headerBox{
        display: flex;
        flex-direction: row;
    }

    .avatar {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 32px;
        height: 32px;
        border-radius: 100%;

        font-family: var(--inter);
        font-size: 30px;

        background-color: var(--brand2);
        color: var(--white);
    }

      strong{
        font-size: 14px;
        font-weight: 500;
        font-family: var(--lexend);
      }
`