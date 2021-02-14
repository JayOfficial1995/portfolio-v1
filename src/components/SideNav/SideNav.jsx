import React, { useState, useEffect, useLayoutEffect } from "react";
import { Link } from "react-router-dom";

import {
  menuData,
  ProfileImage,
  socialNetworkData,
} from "../../jsonData/sideNav";
import { RightArrowIcon } from "../../svgs";

import {
  MenuBarStyle,
  NavbarStyle,
  SideNavStyle,
  SocialIconsStyle,
  NavItemStyle,
} from "./SideNav.style";

const Navbar = (props) => {
  const { menuActive } = props;
  const [isSelectedMenu, setSelectedMenu] = useState(menuData[0].linkText);
  return (
    <NavbarStyle menuActive={menuActive}>
      <ul className="navbar-wrapper">
        {menuData.map((navData) => {
          const { icon, url, linkText } = navData;
          const isNavSelected = isSelectedMenu === linkText;

          const ToggleNavItem = (linkText) => {
            setSelectedMenu(linkText);
          };
          return (
            <NavItemStyle
              isNavSelected={isNavSelected}
              onClick={() => ToggleNavItem(linkText)}
              menuActive={menuActive}
            >
              <Link to={url} className="nav-item-link">
                <article className="nav-detail">
                  <span className="nav-icon">{icon}</span>
                  <p className="link-text">{linkText}</p>
                </article>
                <span className="arrow-icon">
                  <RightArrowIcon />
                </span>
              </Link>
            </NavItemStyle>
          );
        })}
      </ul>
    </NavbarStyle>
  );
};

const SocialIcons = (props) => {
  const { menuActive } = props;
  return (
    <SocialIconsStyle menuActive={menuActive}>
      <h2 className="icon-title">follow me :</h2>
      <article className="social-icons-wrapper">
        {socialNetworkData.map((data) => {
          const { icon, url } = data;
          return (
            <a href={url} target="_blank" className="social-icon">
              {icon}
            </a>
          );
        })}
      </article>

      <article className="buttons-wrapper">
        <Link to="/hire-me" className="hire-me-button">
          Hire Me
        </Link>
        <a
          href="https://drive.google.com/uc?export=download&id=1BwHu0tkchSIvYTlyQnBBRukxlL8eP0WH"
          className="cv-download-link"
        >
          CV
        </a>
      </article>
    </SocialIconsStyle>
  );
};

const MenuBar = (props) => {
  const { menuActive } = props;
  return (
    <MenuBarStyle menuActive={menuActive}>
      <picture className="profile-image-wrapper">
        <img
          src={ProfileImage.image}
          alt="Profile Image"
          className="profile-image"
        />
      </picture>

      <h1 className="title">JAHANGIR KHAN</h1>
      <h2 className="designation">Web Developer & Graphic Designer</h2>

      <SocialIcons menuActive={menuActive} />
      <Navbar menuActive={menuActive} />
    </MenuBarStyle>
  );
};

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);

  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }

    window.addEventListener("resize", updateSize);
    updateSize();
  }, []);
  return size;
}

function SideNav() {
  const [isToggle, setToggle] = useState(true);
  const screenSize = useWindowSize();

  useEffect(() => {
    screenSize < "767px" ? setToggle(false) : setToggle(true);
  }, [screenSize]);

  const ToggleMenu = () => {
    setToggle(!isToggle);
  };

  return (
    <SideNavStyle toggleActive={isToggle} backgroundImage={ProfileImage.image}>
      <article className="profile-background">
        <article onClick={ToggleMenu} className="hamburger-icon">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </article>
      </article>

      <MenuBar menuActive={isToggle} />
    </SideNavStyle>
  );
}

export default SideNav;
