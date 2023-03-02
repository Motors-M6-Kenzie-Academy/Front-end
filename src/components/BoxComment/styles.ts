import styled from "styled-components";

export const DivComment = styled.div`
    width: 751px;
    height: 289px;
    display: flex;
    flex-direction: column;
    background-color: #FDFDFD;
    border-radius: 4px;

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

      input{
        width: 600px;
        height: 100px;
        border: var(--gray7)
        border-radius: 4px;
      }

      placeholder{
        color: var(--gray3);
        font-size: 16px;
      }
    
      .tags{
        display: flex;
        flex-direction: row;
        gap: 10px;
        background-color: var(--gray7);
        color: var(--gray3);
        font-size: 12px;
        border-radius: 24px;
      }
      
    @media screen and (min-width: 700px) {
        margin: 0 90px;
    }
`