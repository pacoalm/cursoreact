import React, { useState } from "react";
import "./index.css";
import { authenticateDN } from "./valida";

export default function Login() {
  /*update the url according to your ldap address*/

  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleUserNameChange = (event) => {
    setValues({ ...values, username: event.target.value });
  };
  const handlePasswordChange = (event) => {
    setValues({ ...values, password: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (values.username && values.password) setValid(true);
    setSubmitted(true);

    if (values.username && values.password) {
      if (authenticateDN("cn=07Admin,ou=Administradores,o=sjd", "tenerife")) {
        alert("okkkk");
      }
    } else alert(values.username);
  };

  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>
        {/* Uncomment the next line to show the success message */}
        {submitted && valid ? (
          <div class="success-message">Success! Thank you for registering</div>
        ) : null}
        <input
          onChange={handleUserNameChange}
          value={values.username}
          id="Usuario"
          class="form-field"
          type="text"
          placeholder="Usuario"
          name="username"
        />
        {/* Uncomment the next line to show the error message */}
        {submitted && !values.username ? (
          <span id="first-name-error">Escriba un nombre de usuario</span>
        ) : null}
        <input
          onChange={handlePasswordChange}
          value={values.password}
          id="password"
          class="form-field"
          type="text"
          placeholder="Contraseña"
          name="password"
        />
        {/* Uncomment the next line to show the error message */}
        {submitted && !values.password ? (
          <span id="password-error">Escriba una contraseña</span>
        ) : null}

        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
