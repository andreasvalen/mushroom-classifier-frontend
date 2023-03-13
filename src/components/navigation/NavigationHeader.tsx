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
          <Link to="/">
            <StyledShroomyImage
              src={`/chantarell-icon.png`} //matblekksopp.png`}
              alt={"Shroomy"}
            />
          </Link>
          <Link to="/">
            <StyledFontWrapper>
              <h1 className="l1">{"Shroomy"}</h1>
              <h1 className="l2">{"Shroomy"}</h1>
              <h1 className="l3">{"Shroomy"}</h1>
              <h1 className="l4">{"Shroomy"}</h1>
              <h1 className="l5">{"Shroomy"}</h1>
              <h1 className="l6">{"Shroomy"}</h1>
            </StyledFontWrapper>
          </Link>
        </div>
        <StyledLinkWrapper>
          <Link to="/">Home</Link>
          <Link to="/search">Search</Link>
          <Link to="/prediction?name=testy&edible=False">Prediction</Link>
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
    color: #ff000080;
    z-index: 9;
  }
  .l3 {
    position: absolute;
    top: 2px;
    left: 4px;
    color: green;
    z-index: 8;
  }

  .l4 {
    position: absolute;
    top: 6px;
    left: 6px;
    color: blue;
    z-index: 7;
  }
  .l5 {
    position: absolute;
    top: 8px;
    left: 8px;
    color: yellow;
    z-index: 6;
  }
  .l6 {
    position: absolute;
    top: 9px;
    left: 9px;
    color: pink;
    z-index: 5;
  }

  h1 {
    font-family: retro;
    font-size: 35px;

    transition: transform 0.3s ease-in-out;

    :hover {
      transform: scale(1.2) rotate(745deg);
      cursor: pointer;
    }
  }
`;

const StyledLinkWrapper = styled.div`
  @font-face {
    font-family: retro;
    src: url(retroFont.ttf);
  }

  a {
    font-family: retro;
    color: ${palette.lightOrange};
    padding: 10px;
    font-size: 25px;
    text-shadow: -1px -1px 0 ${palette.brownDarker},
      1px -1px 0 ${palette.brownDarker}, -1px 1px 0 ${palette.brownDarker},
      1px 1px 0 ${palette.brownDarker};
  }
`;

const StyledShroomyImage = styled.img`
  height: 70px;
  width: auto;
  border-radius: 50%;
  margin-left: 18px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  transition: transform 0.25s ease-in-out;

  :hover {
    transform: scale(1.2) rotate(745deg);
    box-shadow: 0 0 15px rgba(0, 100, 100, 0.5);
    cursor: pointer;
  }
`;
