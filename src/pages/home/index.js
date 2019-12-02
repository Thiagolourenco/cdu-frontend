import React, { useState } from "react";
import { MdInfoOutline } from "react-icons/md";

import Header from "../../components/header";

import { Container, Content } from "./style";
import Modal from "../../components/modal";

import perfil from "../../assets/perfil.jpeg";

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
            Name: <strong>Thiago Lourenço Saraiva da Silva</strong>
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
            <img className="image" src={perfil} />
            <div>
              <label>
                Nome: <strong>Thiago Lourenço Saraiva da Silva</strong>
              </label>
              <div className="rols">
                <label>
                  CPF: <strong>07086823325</strong>
                </label>
                <label className="nasc">
                  Data de Nascimento: <strong>27/02/1998</strong>
                </label>
              </div>
              <label>
                Curso: <strong>Sistema de Informação</strong>
              </label>
              <label>
                Faculdade:
                <strong>Centro Universitário Estácio do Ceará - FIC</strong>
              </label>
              <label>
                Declaração:
                <a
                  href="file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252Fcdu-279259f1-55ef-4fc9-b768-15a364b0f01b/DocumentPicker/6267958c-32ea-4c5f-80ae-cfa3cd83ebb5.pdf"
                  target="blank"
                >
                  declaracao.pdf
                </a>
              </label>
              <label>
                Grade de Horários:
                <a
                  href="file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252Fcdu-279259f1-55ef-4fc9-b768-15a364b0f01b/DocumentPicker/6267958c-32ea-4c5f-80ae-cfa3cd83ebb5.pdf"
                  target="blank"
                >
                  gradehorario.pdf
                </a>
              </label>
              <label>
                Turno: <strong>Noite</strong>
              </label>
              <label>
                Status: <input type="checkbox" />
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
