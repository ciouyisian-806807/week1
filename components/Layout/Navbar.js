import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { layoutStyle } from "../../styles";

const Navbar = () => {
  return (
    <nav className={layoutStyle.CNavbar}>
      <Link href="/">
        <a>
          <FontAwesomeIcon icon={faHome} />
          Home
        </a>
      </Link>
      <Link href="/Sign">Sign</Link>
    </nav>
  );
};
export default Navbar;
