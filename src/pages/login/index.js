import React from 'react'
import {FaUserAlt} from 'react-icons/fa'

import {Form} from './style'

import logo from '../../assests/image.png'

function Login(){
    return (
    <Form>
        <img src={logo} alt="Logo"/>
        <div>
            <label>
                <FaUserAlt color="#000" size={16}/>
                <input placeholder="Seu E-mail" type="email"/>
            </label>
            <label>
                <input placeholder="******" type="password" />
            </label>
        </div>

        <button>ENTRAR</button>
    </Form>
    )
}

export default Login