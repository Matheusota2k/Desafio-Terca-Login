'use client'
import React from 'react';
import '/src/components/CSS/Login.css';

const Login = () => {
  return (
    <div className="login">
      <img class="imgs" src="/IMGs/PClogin.png" alt="Imagem PC" />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" />

      <label htmlFor="senha">Senha</label>
      <input type="password" id="senha" name="senha" />

      <button class="buttons" type="submit">Enviar</button>
    </div>
  );
};

export default Login;

