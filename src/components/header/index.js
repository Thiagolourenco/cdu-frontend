import React from "react";
import { FaUserAlt } from "react-icons/fa";

import logo from "../../assests/image.png";

import { Container } from "./style";

function Header() {
  return (
    <Container>
      <div>
        <img src={logo} alt="Logo" />
        <p>CDU - Caminho do Universitário</p>
      </div>

      <div>
        <p>Administrador</p>
        <button>
          <FaUserAlt size={20} color="#000" />
        </button>
      </div>
    </Container>
  );
}

export default Header;
