import React, { useState } from "react";
import styled, { css } from "styled-components";
import { NavLink as Link } from "react-router-dom";

import * as colors from "../../colors";
import Arrow from "../../images/arrow-icon.png";
import SearchWhite from "../../images/search-icon-white.png";
const SideNavBar = () => {
  /* Write the necessary functions to show and hide the side bar on small devices */

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <SideNavBarCont className={isOpen ? "visible" : "visible hidden"}>
        <div className="cancel-container">
          <h2 onClick={() => setIsOpen(false)} className="visable cancel">
            X
          </h2>
        </div>
        {/* Implement a hamburger icon slide in effect for small devices */}
        <SideNavMainLink className="menu_nav_link main_nav_link" to="/">
          <h3>Wesley</h3>
          <NavIcon arrow>
            <img src={Arrow} />
          </NavIcon>
        </SideNavMainLink>
        <SideNavMainLink className="menu_nav_link" to="/discover">
          Discover
          <NavIcon search>
            <img src={SearchWhite} />
          </NavIcon>
        </SideNavMainLink>
        <SideNavHeader>
          <HeaderText>Watched</HeaderText>
        </SideNavHeader>
        <NavLink className="menu_nav_link" to="/watched/movies">
          Movies
        </NavLink>
        <NavLink className="menu_nav_link" to="/watched/tv-shows">
          Tv Shows
        </NavLink>
        <SideNavHeader>
          <HeaderText>Saved</HeaderText>
        </SideNavHeader>
        <NavLink className="menu_nav_link" to="/saved/movies">
          Movies
        </NavLink>
        <NavLink className="menu_nav_link" to="/saved/tv-shows">
          Tv Shows
        </NavLink>
      </SideNavBarCont>
      <div
        onClick={() => setIsOpen(true)}
        className={isOpen ? "hidden" : "visable line-container"}
      >
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </div>
    </>
  );
};

const SideNavBarCont = styled.div`
  position: fixed;
  z-index: 9;
  width: 280px;
  height: 100%;
  background-color: ${colors.sideNavBar};
`;

const SideNavMainLink = styled(Link)`
  position: relative;
  display: flex;
  padding: 25px 35px;
  font-size: 1.6em;
  font-weight: 700;
  color: white;
`;

const NavIcon = styled.div`
  position: absolute;
  right: 35px;
  top: 50%;
`;

const SideNavHeader = styled.div``;

const HeaderText = styled.div`
  position: relative;
  display: flex;
  padding: 25px 35px;
  font-size: 1.6em;
  font-weight: 700;
  color: white;
  border-bottom: 1px solid white;
`;

const NavLink = styled(Link)`
  position: relative;
  display: block;
  padding: 10px 35px;
  font-size: 1.2em;
  font-weight: 100;
  color: white;
`;

export default SideNavBar;
