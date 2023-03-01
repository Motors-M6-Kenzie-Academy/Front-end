import styled from "styled-components";

type UISpanProps = {
  propColor?: string;
  propPadding?: string;
  propFontSize?: string;
  propBG?: string;
};

export const UISpan = styled.span<UISpanProps>`
  color: ${(props) => (props.propBG ? props.propBG : "red")};

  padding: ${(props) => (props.propPadding ? props.propPadding : "0 1rem")};

  font-size: ${(props) => (props.propFontSize ? props.propFontSize : "0.8rem")};

  background-color: ${(props) => (props.propBG ? props.propBG : "transparent")};

  :focus {
    outline: none;
    background-color: transparent;
  }

  :hover {
    border: 0.1rem solid #5126ea;
  }

  @media only screen and (width < 414px) {
  }
`;
