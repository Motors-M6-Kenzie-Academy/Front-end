import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 8vh;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 5rem;
  background: #fdfdfd;
  border-bottom: 0.2rem solid #dee2e6;

  .logo {
    img {
      width: 8rem;
    }
  }

  .hamburger {
    display: none;
  }

  .nav-bar {
    display: flex;
  }

  .nav-bar ul {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    li:nth-child(4) {
      display: flex;
      align-items: center;

      height: 4.7rem;
      border-left: 0.2rem solid #dee2e6;
      padding-left: 1.2rem;
    }

    li:nth-child(5) {
      border: 0.1rem solid #adb5bd;
      border-radius: 0.4rem;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 0.3rem 0.8rem;
    }

    .container-user {
      display: flex;
      align-items: center;

      gap: 1.2rem;

      height: 4.7rem;
      padding-left: 2rem;
      border-left: 0.2rem solid #dee2e6;
      cursor: pointer;

      .circle {
        border-radius: 50%;
        padding: 0.5rem;
        color: white;
        background-color: #5126ea;

        font-family: "Inter";
        font-style: normal;
        font-weight: bold;
        font-size: 0.8rem;
      }

      .user-name {
        font-family: "Inter";
        font-style: normal;
        font-weight: 600;
        font-size: 0.8rem;
        line-height: 2rem;
        color: #495057;
      }

      ul.active {
        display: none;
      }

      ul {
        position: absolute;
        top: 6rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }

      ul li {
        border: none;
        padding: 0;
        height: 2rem;
      }
    }
  }

  .nav-bar ul li a {
    display: block;
    color: black;
    transition: 0.2s;
    margin: 0 0.5rem;

    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 0.8rem;
    line-height: 2rem;

    color: #495057;
  }

  @media only screen and (max-width: 1320px) {
    padding: 0 5rem;
  }

  @media only screen and (max-width: 1100px) {
    padding: 0 3rem;
  }
  @media only screen and (max-width: 900px) {
    .hamburger {
      display: block;
      cursor: pointer;
    }

    .hamburger .line {
      width: 1.5rem;
      height: 0.2rem;
      background-color: black;
      margin: 0.3rem 0;
    }

    .nav-bar {
      position: absolute;
      top: 7rem;
      left: 0;
      right: 0;
      width: 100vw;
      transition: 0.2s;
      overflow: hidden;
    }

    .nav-bar ul {
      display: block;
      width: 100%;
      margin: 1rem;
      text-align: start;
      transition: 0.5s;

      li:nth-child(4) {
        display: flex;
        align-items: center;
        padding: 0;

        border-left: none;
        border-top: 0.1rem solid #dee2e6;
      }
      li:nth-child(5) {
        border: 0.1rem solid #adb5bd;
        border-radius: 0.4rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0.3rem 0.8rem;
      }
    }

    .active {
      display: none;
    }

    .nav-bar ul li {
      margin-bottom: 1.2rem;
    }

    .nav-bar ul .container-user {
      border: none;
      /* background-color: red; */
      padding: 0;
      height: 15rem;
      position: relative;
      top: -6rem;

      ul {
        position: absolute;
        top: 9rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }

      ul li {
        border: none;
        padding: 0;
        height: 0.5rem;
      }
    }
  }
`;
