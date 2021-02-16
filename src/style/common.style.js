import styled, { css } from "styled-components";

export const FlexBoxStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CommonGridStyle = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  align-items: center;
`;

export const CustomContainerStyle = css`
  max-width: 124rem;
  margin: 0 auto;
`;

export const CenterdLayoutStyle = css`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

export const BoxShadowStyle = css`
  box-shadow: ${(props) => props.theme.boxShadow.primaryShadow};
`;

export const InnerShadowStyle = css`
  box-shadow: ${(props) => props.theme.boxShadow.secondaryShadow};
`;

export const TextShadowStyle = css`
  text-shadow: ${(props) => props.theme.boxShadow.textShadow};
`;

export const AppStyle = styled.section`
  ${CustomContainerStyle};
  ${CenterdLayoutStyle};
  ${CommonGridStyle};

  grid-template-columns: auto 1fr;
  height: 100vh;
`;
