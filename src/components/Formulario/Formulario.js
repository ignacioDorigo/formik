import React from "react";
import "./Formulario.css";
import { ErrorMessage, Field, Form, Formik } from "formik";

export default function Formulario() {
  return (
    <Formik
      initialValues={{ nombre: "", email: "", password: "" }}
      onSubmit={(formulario) => console.log(formulario)}
      validate={(formulario) => {
        const errores = {};
        const { nombre, email, password } = formulario;
        if (nombre.length === 0) {
          errores.nombre = "El nombre no puede estar vacio";
        }
        if (email.length === 0) {
          errores.email = "El correo no puede estar vacio";
        }
        if (password.length === 0) {
          errores.password = "El password no puede estar vacio";
        }
        return errores;
      }}
    >
      <Form className="form">
        <h2 className="form__titulo">FormularioLoco 2.0</h2>

        <div className="form__campos">
          <div className="form__campo">
            <label className="form__label" htmlFor="nombre">
              Nombre
            </label>
            <Field
              className="form__input"
              name="nombre"
              placeholder="Nombre"
              id="nombre"
              type="text"
            ></Field>
            <ErrorMessage
              style={{ color: "red" }}
              component={"div"}
              name="nombre"
            />
          </div>
          <div className="form__campo">
            <label className="form__label" htmlFor="email">
              Correo
            </label>
            <Field
              className="form__input"
              name="email"
              placeholder="Correo"
              id="email"
              type="email"
            ></Field>
            <ErrorMessage
              style={{ color: "red" }}
              component={"div"}
              name="email"
            />
          </div>

          <div className="form__campo">
            <label className="form__label" htmlFor="password">
              Password
            </label>
            <Field
              className="form__input"
              name="password"
              placeholder="Password"
              id="password"
              type="password"
            ></Field>
            <ErrorMessage
              style={{ color: "red" }}
              component={"div"}
              name="password"
            />
          </div>
        </div>
        <button type="submit" className="form__button">
          Enviar
        </button>
      </Form>
    </Formik>
  );
}
