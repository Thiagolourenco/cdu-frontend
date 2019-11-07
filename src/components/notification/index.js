import React from 'react'
import {MdNotifications} from 'react-icons/md'

import { Container, Badge, NotificationList, Scroll, Notification } from './style'

function Notifications(){
  return (
    <Container>
      <Badge hasUnread>
        <MdNotifications size={20} color="rbga(0,0,0,0.6)"/>
      </Badge>

      <NotificationList>
        <Scroll>
          <Notification unread>
            <p>Nome: Thiago Lourenço <br /> Curso: Sistema de Informação</p>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification unread>
            <p>Nome: Thiago Lourenço <br /> Curso: Sistema de Informação</p>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification unread>
            <p>Nome: Thiago Lourenço <br /> Curso: Sistema de Informação</p>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification unread>
            <p>Nome: Thiago Lourenço <br /> Curso: Sistema de Informação</p>
            <button type="button">Marcar como lida</button>
          </Notification>

        </Scroll>
      </NotificationList>
    </Container>
  )
}

export default Notifications
