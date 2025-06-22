import { useFormik } from "formik";
import React from "react";
import "./App.css";

export default function App() {
  const formik = useFormik({
    initialValues: { nombre: "", email: "", password: "" },
    validate: (formulario) => {
      const errores = {};
      if (formulario.nombre.length === 0) {
        errores.nombre = "El nombre no puede estar vacío";
      }
      return errores;
    },
    onSubmit: async (formulario) => {
      try {
        console.log(formulario);
        formik.resetForm();
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <h2 className="form__titulo">FormularioLoco</h2>
      <div className="form__campos">
        {/* Inicio Input */}
        <div className="form__campo">
          <label className="form__label" htmlFor="nombre">
            Nombre
          </label>
          <input
            className="form__input"
            placeholder="Nombre"
            type="text"
            name="nombre"
            value={formik.values.nombre}
            onChange={formik.handleChange}
            id="nombre"
            onBlur={formik.handleBlur}
          ></input>
          {formik.errors.nombre ? (
            <div className="form__input__error">{formik.errors.nombre}</div>
          ) : null}
        </div>
        {}
        {/* FIN Input */}

        <div className="form__campo">
          <label className="form__label" htmlFor="nombre">
            Email
          </label>
          <input
            className="form__input"
            placeholder="Email"
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            id="email"
          ></input>
        </div>
        <div className="form__campo">
          <label className="form__label" htmlFor="password">
            Password
          </label>
          <input
            className="form__input"
            placeholder="Password"
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            id="password"
          ></input>
        </div>
      </div>

      <button type="submit" className="form__button">
        Enviar
      </button>
    </form>
  );
}
