import styled, { css } from "styled-components";

import {
  FlexBoxStyle,
  InnerShadowStyle,
  BoxShadowStyle,
} from "../../style/common.style";

export const SideNavStyle = styled.aside`
  width: ${(props) => (props.toggleActive ? "24.8rem" : "10rem")};
  transition: 0.3s all linear;

  .profile-background {
    ${(props) =>
      props.toggleActive &&
      css`
        background: url("${(props) => props.backgroundImage}") no-repeat;
      `};
    width: 100%;
    height: 25rem;
    background-position: center;
    background-size: 100%;
    position: relative;
    margin-bottom: ${(props) => (props.toggleActive ? "-11rem" : "-13rem")};
    border-radius: 2rem;
    overflow: hidden;

    &:before {
      content: " ";
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: ${(props) => props.theme.color.gradientPurpleColor};
      opacity: 0.5;
    }

    .hamburger-icon {
      position: absolute;
      top: 3rem;
      left: 2.5rem;
      z-index: 2;
      cursor: pointer;

      .bar {
        width: 2rem;
        height: 0.3rem;
        background: ${(props) => props.theme.color.whiteColor};
        margin-bottom: 0.4rem;
      }
    }
  }
`;

export const MenuBarStyle = styled.section`
  ${BoxShadowStyle}

  position: relative;
  background: ${(props) => props.theme.color.background};
  border-radius: 4rem;
  z-index: 2;
  padding: 1rem;
  text-align: center;

  .profile-image-wrapper {
    ${FlexBoxStyle}

    justify-content: center;

    .profile-image {
      width: ${(props) => (props.menuActive ? "11.8rem" : "8.8rem")};
      height: ${(props) => (props.menuActive ? "11.8rem" : "8.8rem")};
      border-radius: 50%;
      border: 0.5rem solid ${(props) => props.theme.color.purpleColor};
      margin-top: -5rem;
      position: relative;
      transition: 0.3s all linear;
    }
  }

  .title {
    display: ${(props) => (props.menuActive ? "block" : "none")};
    margin-top: 0.5rem;
    color: ${(props) => props.theme.color.darkestGrayColor};
  }

  .designation {
    display: ${(props) => (props.menuActive ? "block" : "none")};
    color: ${(props) => props.theme.color.grayColor};
    font-size: ${(props) => props.theme.fontSize.h5};
    font-weight: ${(props) => props.theme.fontWeight.regular};
  }
`;

export const SocialIconsStyle = styled.article`
  margin-top: 1rem;

  .icon-title {
    display: ${(props) => (props.menuActive ? "block" : "none")};
    font-size: ${(props) => props.theme.fontSize.h5};
    font-weight: ${(props) => props.theme.fontWeight.medium};
    color: ${(props) => props.theme.color.darkestGrayColor};
  }

  .social-icons-wrapper {
    ${FlexBoxStyle};

    flex-direction: ${(props) => (props.menuActive ? "row" : "column")};
    margin-top: 1rem;

    .social-icon {
      ${FlexBoxStyle};

      box-shadow: ${(props) => props.theme.boxShadow.innerItems};
      padding: 1.2rem;
      border-radius: 50%;
      margin-bottom: ${(props) => (props.menuActive ? "0" : "1rem")};
      margin-right: 1rem;

      &:hover {
        box-shadow: ${(props) => props.theme.boxShadow.secondaryShadow};
      }

      &:last-child {
        margin: unset;
      }

      > svg {
        width: 1.5rem;
        height: 1.5rem;

        path {
          fill: ${(props) => props.theme.color.grayColor};
        }
      }
    }
  }

  .buttons-wrapper {
    ${FlexBoxStyle};

    width: ${(props) => (props.menuActive ? "20rem" : "unset")};
    margin: 2rem auto;

    .hire-me-button,
    .cv-download-link {
      box-shadow: ${(props) => props.theme.boxShadow.innerItems};
      padding: 1rem;
      text-decoration: none;
      font-size: ${(props) => props.theme.fontSize.h4};
      color: ${(props) => props.theme.color.grayColor};
    }

    .hire-me-button {
      font-weight: ${(props) => props.theme.fontWeight.medium};
      background: ${(props) => props.theme.color.gradientPurpleColor};
      color: ${(props) => props.theme.color.whiteColor};
      flex: 1;
      border-radius: 5rem;
      margin-right: 1rem;
      display: ${(props) => (props.menuActive ? "block" : "none")};
    }

    .cv-download-link {
      border-radius: 50%;

      &:hover {
        ${InnerShadowStyle};
      }
    }
  }
`;

export const NavbarStyle = styled.nav`
  padding-top: 1.2rem;

  .navbar-wrapper {
    list-style: none;
  }
`;

export const NavItemStyle = styled.li`
  .nav-item-link {
    ${FlexBoxStyle};

    justify-content: ${(props) =>
      props.menuActive ? "space-between" : "center"};
    text-decoration: none;
    padding: 1.5rem;
    border-radius: 5rem;
    font-size: ${(props) => props.theme.fontSize.h4};
    color: ${(props) => props.theme.color.grayColor};
    box-shadow: ${(p) =>
      p.isNavSelected ? (props) => props.theme.boxShadow.secondaryShadow : ""};

    &:hover {
      ${InnerShadowStyle};
    }

    .nav-detail {
      ${FlexBoxStyle};

      .nav-icon {
        margin-right: 1rem;

        > svg {
          width: 1.5rem;
          height: 1.5rem;
          fill: ${(props) => props.theme.color.grayColor};
        }
      }

      .link-text {
        display: ${(props) => (props.menuActive ? "block" : "none")};
      }
    }

    .arrow-icon {
      display: ${(props) => (props.menuActive ? "block" : "none")};

      > svg {
        width: 1rem;
        height: 1rem;
        fill: ${(props) => props.theme.color.grayColor};
      }
    }
  }
`;
