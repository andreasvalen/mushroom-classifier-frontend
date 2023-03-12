import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { palette } from "../../palette";

const NavigationHeader: React.FC = () => {
  return (
    <nav
      style={{
        backgroundColor: palette.primaryBlue,
        position: "sticky",
        top: 0,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={`/chantarell-icon.png`} //matblekksopp.png`}
            style={{
              height: "70px",
              width: "auto",
              borderRadius: "50%",
              marginLeft: "18px",
            }}
            alt={"edible"}
          />
          <StyledFontWrapper>
            <h1 className="l1">{"Shroomy"}</h1>
            <h1 className="l2">{"Shroomy"}</h1>
            <h1 className="l3">{"Shroomy"}</h1>
            <h1 className="l4">{"Shroomy"}</h1>
            <h1 className="l5">{"Shroomy"}</h1>
            <h1 className="l6">{"Shroomy"}</h1>
          </StyledFontWrapper>
        </div>
        <StyledLinkWrapper>
          <Link to="/">Home</Link>
          <Link to="/counter">counter</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/search">Search</Link>
        </StyledLinkWrapper>
      </div>
    </nav>
  );
};

export default NavigationHeader;

const StyledFontWrapper = styled.div`
  @font-face {
    font-family: retro;
    src: url(retroFont.ttf);
  }

  link {
    color: red;
    padding: 10px;
  }

  position: relative;
  margin-left: 8px;
  height: 100px;
  width: 100px;
  .l1 {
    position: absolute;
    top: 0;
    left: 0;
    color: ${palette.lighterOrange};
    z-index: 10;
  }
  .l2 {
    position: absolute;
    top: 2px;
    left: 2px;
    color: blue;
    z-index: 9;
  }
  .l3 {
    position: absolute;
    top: 3px;
    left: 4px;
    color: green;
    z-index: 8;
  }

  .l4 {
    position: absolute;
    top: 5px;
    left: 6px;
    color: yellow;
    z-index: 7;
  }
  .l5 {
    position: absolute;
    top: 7px;
    left: 7px;
    color: pink;
    z-index: 6;
  }
  .l6 {
    position: absolute;
    top: 9px;
    left: 8px;
    color: black;
    z-index: 5;
  }

  h1 {
    font-family: retro;
    font-size: 35px;
  }
`;

const StyledLinkWrapper = styled.div`
  @font-face {
    font-family: retro;
    src: url(retroFont.ttf);
  }

  a {
    font-family: retro;
    color: ${palette.brownDarker};
    padding: 10px;
    font-size: 25px;
  }
`;
