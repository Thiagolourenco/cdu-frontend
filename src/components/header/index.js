import React from "react";
import { Link } from "react-router-dom";

import Notification from "../notification";

import logo from "../../assets/image.png";

import { Container, Content, Profile } from "./style";

function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Logo" />
          <Link to="/home">CDU - Caminho do Universitário</Link>
        </nav>

        <aside>
          <Notification />
          <Profile>
            <div>
              <strong>Administrador</strong>
              <Link to="/">Perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/40/abott@adorable.png"
              alt="Perfil"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;
