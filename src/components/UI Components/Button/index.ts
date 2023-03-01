import styled from "styled-components";

type UIButtonProps = {
  propHeight?: string;
  propWidth?: string;

  propFamily?: string;
  propStyle?: string;
  propFontSize?: string;
  propWeight?: string;

  propTextColor?: string;
  propBG?: string;

  propPadding?: string;

  propBorder?: boolean;
  propRadios?: string;
};

export const UIButton = styled.button<UIButtonProps>`
  height: ${(props) => (props.propHeight ? props.propHeight : "2.8rem")};
  width: ${(props) => (props.propWidth ? props.propWidth : "auto")};

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: var(
    ${(props) => (props.propFamily ? props.propFamily : "--inter")}
  );
  font-style: ${(props) => (props.propStyle ? props.propStyle : "normal")};
  font-size: ${(props) => (props.propFontSize ? props.propFontSize : "1rem")};
  font-weight: ${(props) => (props.propWeight ? props.propWeight : "600")};

  color: var(
    ${(props) => (props.propTextColor ? props.propTextColor : "--gray10")}
  );
  background-color: var(
    ${(props) => (props.propBG ? props.propBG : "--gray6")}
  );

  padding: ${(props) => (props.propPadding ? props.propPadding : "0 0.8rem")};

  border: ${(props) => (props.propBorder ? "0.1rem solid var(--gray5)" : null)};
  border-radius: ${(props) => (props.propRadios ? props.propRadios : "0.4rem")};

  @media (width < 414px) {
  }
`;
