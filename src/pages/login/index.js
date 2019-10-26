import React from "react";
import { FaUserAlt, FaLock } from "react-icons/fa";

import { Form } from "./style";

import logo from "../../assests/image.png";

function Login({ history }) {
  function handleHome() {
    history.push("/home");
  }

  return (
    <Form onSubmit={handleHome}>
      <img src={logo} alt="Logo" />
      <div>
        <label>
          <FaUserAlt size={16} color="#000" />
          <input placeholder="Seu E-mail" type="email" />
        </label>
        <label>
          <FaLock size={16} color="#000" />
          <input placeholder="******" type="password" />
        </label>
      </div>

      <button>ENTRAR</button>
    </Form>
  );
}

export default Login;
