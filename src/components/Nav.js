import React, { useState } from "react";
import { ModalHover } from "react-modal-hover";
import "./Nav.css";
import {
  BsFillPlayFill,
  BsPlayCircle,
  BsFillTreeFill,
  BsNewspaper,
  BsSearch,
} from "react-icons/bs";
import { BiMoviePlay } from "react-icons/bi";
import { SiNetflix } from "react-icons/si";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

const Nav = () => {
  const [style, setStyle] = useState({ display: "none" });
  return (
    <nav className="nav justify-content-center pt-4 pb-5">
      {/* <img
        style={{ width: "150px" }}
        src="https://i.pinimg.com/favicons/a6c9f2dffa62d314fa9b145e04a33b146626bdcb4594eae98d054681.png?3f75d77b64b7165c468b4c7fa52b4618"
        alt="logo"
      /> */}
      <a className="nav-link text-primary" href="#">
        FILMA24 LOGO
      </a>

      <a className="nav-link hoverStyle text-light rounded-pill" href="#">
        <BsFillPlayFill className="iconsStyle" />
        Filma
      </a>

      <a className="nav-link hoverStyle text-light rounded-pill" href="#">
        <BiMoviePlay className="iconsStyle" />
        <span> Seriale</span>
      </a>

      <a className="nav-link hoverStyle text-light rounded-pill" href="#">
        <BsPlayCircle className="iconsStyle" />
        <span> Zhanri</span>
      </a>

      <a className="nav-link hoverStyle text-light rounded-pill" href="#">
        <SiNetflix className="iconsStyle" style={{ color: "red" }} />
        Netflix
      </a>

      <a className="nav-link hoverStyle text-light rounded-pill" href="#">
        <BsFillTreeFill className="iconsStyle" />
        Festiv
      </a>

      <a className="nav-link hoverStyle text-light rounded-pill" href="#">
        <BsNewspaper className="iconsStyle" />
        <span> Lajme</span>
      </a>

      <a className="nav-link" href="#" style={{ paddingLeft: "100px" }}>
        <BsSearch className="iconsStyle" style={{ fontSize: "2em" }} />
      </a>
    </nav>
  );
};

export default Nav;
