import React from "react";

export default function Form(props) {
  let { name, lastname, email, password } = props.user;
  console.log(props);
  return (
    <>
      <div className="m-4 row">
        <div className="col-12 text-center">
          <h1> Edit User</h1>
          <form onSubmit={props.updateUser} onInput={props.editInput}>
            <div className="form-group">
              <input
                className="form-control"
                name="name"
                type="text"
                placeholder="Nombre"
                value={name}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                name="lastname"
                type="text"
                placeholder="Apellidos"
                value={lastname}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                name="email"
                type="email"
                placeholder="Email"
                value={email}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                name="password"
                type="password"
                placeholder="Contraseña"
                value={password}
              />
            </div>
            <input
              className="btn btn-success btn-block"
              type="submit"
              value="Update"
            />
          </form>
        </div>
      </div>
    </>
  );
}
