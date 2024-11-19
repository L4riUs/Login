import { useState } from 'react';
import useValidation from "./useValidation"

export default function UseForm(handleText, tipo, onChangeText) {

  const { validateEmail, validatePassword } = useValidation()

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleChangeText = (text) => {
    handleText(text, tipo);
    onChangeText(text);
  };

  const handleSubmit = (type, value) => {
    setForm({ ...form, [type]: value });
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

  const submit = async () => {
    if (verify()) {
      const response = await fetch("https://gist.githubusercontent.com/L4riUs/252acb2307018f81ff65e4421e9f87f8/raw/b5b188038e6f728d8b5cc41428724b359780d467/.json");
      const json = await response.json();

      if (json.user === form.email && json.password === form.password) {
        //aqui deberia ir la redireccion a la pagina de inicio
        alert('Sesion iniciada');
        setForm({ email: '', password: '' });
      } else {
        alert('correo o contraseña incorrectos');
      }
    } else {
      alert('comprueba los datos');
    }
  }


  return { handleChangeText, handleSubmit, submit, verify, form };
};