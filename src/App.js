import React from "react";
import { useFormik } from "formik";
import "./App.css";

export default function App() {
  const formik = useFormik({
    initialValues: { nombre: "", email: "", password: "" },
    validate: (formulario) => {
      const errores = {};
      if (formulario.nombre.length === 0) {
        errores.nombre = "El nombre no puede estar vacío";
      }
      if (formulario.email.length === 0) {
        errores.email = "El correo no puede estar vacío";
      }
      if (formulario.password.length === 0) {
        errores.password = "El password no puede estar vacío";
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
            autoComplete="off"
          ></input>
          {formik.touched.nombre && formik.errors.nombre ? (
            <div className="form__input__error">{formik.errors.nombre}</div>
          ) : null}
        </div>
        {}
        {/* FIN Input */}

        <div className="form__campo">
          <label className="form__label" htmlFor="email">
            Email
          </label>
          <input
            className="form__input"
            placeholder="Email"
            type="email"
            id="email"
            // Nueva forma con getFieldProps
            {...formik.getFieldProps("email")}
          ></input>
          {/* <input
            className="form__input"
            placeholder="Email"
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            id="email"
            onBlur={formik.handleBlur}
          ></input> */}

          {formik.touched.email && formik.errors.email ? (
            <div className="form__input__error">{formik.errors.email}</div>
          ) : null}
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
            onBlur={formik.handleBlur}
          ></input>
          {formik.touched.password && formik.errors.password ? (
            <div className="form__input__error">{formik.errors.password}</div>
          ) : null}
        </div>
      </div>

      <button type="submit" className="form__button">
        Enviar
      </button>
    </form>
  );
}
