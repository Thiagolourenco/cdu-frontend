import React, { useState } from "react";
import { MdNotifications } from "react-icons/md";

import {
  Container,
  Badge,
  NotificationList,
  Scroll,
  Notification
} from "./style";

function Notifications() {
  const [visible, setVisible] = useState(false);

  function handleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <Badge onClick={handleVisible} hasUnread={false}>
        <MdNotifications size={20} color="rbga(0,0,0,0.6)" />
      </Badge>

      <NotificationList visible={visible}>
        <Scroll>
          <Notification unread>
            <p>Documentação de usuário cadastrado</p>
            <strong>
              Nome: Thiago Lourenço <br /> Curso: Sistema de Informação
            </strong>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification unread>
            <p>Documentação de usuário cadastrado</p>
            <strong>
              Nome: Thiago Lourenço <br /> Curso: Sistema de Informação
            </strong>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification unread>
            <p>Documentação de usuário cadastrado</p>
            <strong>
              Nome: Thiago Lourenço <br /> Curso: Sistema de Informação
            </strong>
            <button type="button">Marcar como lida</button>
          </Notification>
        </Scroll>
      </NotificationList>
    </Container>
  );
}

export default Notifications;
