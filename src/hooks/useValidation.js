import { useState } from 'react';
import Styles from '../Styles/styles'

export default function UseValidations() {
    
    const {input_error,input_normal,input_success} = Styles()
    const [text, setText] = useState('')
    const [borderStyle, setBorderStyle] = useState(input_normal)

    const validateEmail = (email) => {
        const re = /^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}$/;
        if (re.test(email)) {
            setText('Correo valido')
            setBorderStyle(input_success)
            return true
        } else {
            setText('Correo no valido')
            setBorderStyle(input_error)
            return false
        }
    }

    const validatePassword = (password) => {
        const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
        if (re.test(password)) {
            setText('Contraseña valida')
            setBorderStyle(input_success)
            return true
        } else {
            setText('Contraseña no valida')
            setBorderStyle(input_error)
            return false
        }
    }

    let handleText = (text, type) => {
        if (type == 'email' && text != "") {
            validateEmail(text)
        } else if (type == 'password' && text != "") {
            validatePassword(text)
        } else {
            setText('')
            setBorderStyle(input_normal)
        }
    }

    return { text, borderStyle, handleText, validateEmail, validatePassword }
}