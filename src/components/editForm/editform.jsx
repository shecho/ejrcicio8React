import React from "react";

export default function editform(props) {
  return (
    <>
      <div className="m-4 row">
        <div className="col-12 text-center">
          <h1> Edit User</h1>
          <form onInput={props.handleInput} onSubmit={(e) => props.addUser(e)}>
            <div className="form-group">
              <input
                className="form-control"
                name="name"
                type="text"
                placeholder="Nombre"
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                name="lastname"
                type="text"
                placeholder="Apellido"
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                name="email"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                name="password"
                type="password"
                placeholder="Password"
              />
            </div>
            <input className="btn btn-success" type="submit" />
          </form>
        </div>
      </div>
    </>
  );
}
