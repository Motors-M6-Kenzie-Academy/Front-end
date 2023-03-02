import styled from "styled-components";

type UISpanProps = {
  propHeight?: string;
  propWidth?: string;
  propPadding?: string;
  propFontSize?: string;
  propBorder?: boolean;
  propRadios?: string;
  propBG?: string;
};

export const UISpan = styled.span<UISpanProps>``;
