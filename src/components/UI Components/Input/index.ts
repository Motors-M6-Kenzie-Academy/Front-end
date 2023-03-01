import styled from "styled-components";

type UIInputProps = {
  propHeight?: string;
  propWidth?: string;
  propPadding?: string;
  propFontSize?: string;
  propBorder?: boolean;
  propRadios?: string;
  propBG?: string;
};

export const UIInput = styled.input<UIInputProps>`
  height: ${(props) => (props.propHeight ? props.propHeight : "2.3rem")};

  width: ${(props) => (props.propWidth ? props.propWidth : "auto")};

  padding: ${(props) => (props.propPadding ? props.propPadding : "0 1rem")};

  font-size: ${(props) => (props.propFontSize ? props.propFontSize : "0.8rem")};

  border: ${(props) => (props.propBorder ? "0.1rem solid #e9ecef" : "none")};

  border-radius: ${(props) => (props.propRadios ? props.propRadios : "0.5rem")};

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
