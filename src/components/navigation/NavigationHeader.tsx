import React from "react";
import { Link } from "react-router-dom";
import { palette } from "../../palette";

interface Props {
  title: string;
}

const NavigationHeader: React.FC<Props> = ({ title }) => {
  return (
    <nav style={{ backgroundColor: palette.primaryBlue }}>
      <h1>{title}</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/counter">counter</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationHeader;
