import React, { useState } from "react";
import { MdInfoOutline } from "react-icons/md";

import Header from "../../components/header";

import { Container, Content } from "./style";
import Modal from "../../components/modal";

function Home() {
  const [modal, isModal] = useState(false);

  function handleIsOpenModal() {
    isModal(true);
  }

  function handleIsCloseModal() {
    isModal(false);
  }
  return (
    <Container>
      <Header />
      <Content>
        <li>
          <p>
            Name: <strong>Thiago Lourenço</strong>
          </p>
          <p>
            Curso: <strong>Sistema da Informação</strong>
          </p>
        </li>
        <button onClick={handleIsOpenModal}>
          <MdInfoOutline size={30} color="#000" />
        </button>
      </Content>
      {modal ? (
        <Modal>
          <h1>Dados do Usuário</h1>
          <div>
            <div className="image" />
            <div>
              <label>
                Nome: <strong>Thiago Lourenço</strong>
              </label>
              <div className="rols">
                <label>
                  RG: <strong>000000000000</strong>
                </label>
                <label className="nasc">
                  Data de Nascimento: <strong>27/02/1998</strong>
                </label>
              </div>
              <label>
                Curso: <strong>Sistema de Informação</strong>
              </label>
              <label>
                Faculdade:{" "}
                <strong>Centro Universitário Estácio do Ceará</strong>
              </label>
              <label>
                Declaração: <a href="#">================</a>
              </label>
              <label>
                Grade de Horários:
                <a href="#">===================</a>
              </label>
              <label>
                Turno: <strong>Noite</strong>
              </label>
            </div>
          </div>
          <div className="groupButton">
            <button className="aceita" onClick={handleIsCloseModal}>
              ACEITAR
            </button>
            <button className="rejeita">REJEITAR</button>
          </div>
        </Modal>
      ) : null}
    </Container>
  );
}

export default Home;
