import { useState } from 'react';
import useValidation from "./useValidation"
import json from '../../api';

export default function UseForm (handleText, tipo, onChangeText){
  
    const {validateEmail,validatePassword} = useValidation()

    const [form, setForm] = useState({
      email: '',
      password: '',
    });

    const handleChangeText = (text) => {
      handleText(text, tipo);
      onChangeText(text);
    };

    const handleSubmit = (type,value) => {
        setForm({...form, [type]: value});
    }

    const verify = () => {
      if (form.email !== '' && form.password !== '') {
        if (validateEmail(form.email) && validatePassword(form.password)) {
          return true;
        } else {
          return false;
        }
      }
    }

    const submit = () => {
      if (verify()) {
        //aqui iria el fetch pero aja
        //suponiendo que el json es un archivo que contiene un objeto con el usuario y contraseña
        //q seria lo q se traeria de la base de datos
        //y se compara con el form
        if(json.user === form.email && json.password === form.password){
          //aqui se pondria un window.location.href = '/home' o algo asi
          alert('Sesion iniciada');
          setForm({email: '', password: ''});
        } else {
          alert('correo o contraseña incorrectos');
        }
      } else {
        alert('comprueba los datos');
      }
    }

  
    return {handleChangeText, handleSubmit, submit, verify, form};
  };