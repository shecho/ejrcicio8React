import React from "react";

export default function Users(props) {
  // console.log(props.users);

  return (
    <>
      <div className="row m-4">
        {props.users.map((user, id) => {
          return (
            <div className="col-md-3 m-3 px-4" key={id} id={id}>
              <div className="card text-center">
                <p id={user.id} className="d-none card-text">
                  {user.id}
                </p>
                <div className="card-body text-center">
                  <div className="d-flex justify-content-center align-items-center ">
                    <h6 className="m-2 card-title">
                      {user.name} {user.lastname}
                    </h6>
                  </div>

                  <div className="d-flex justify-content-center align-items-center ">
                    <p className="m-2 card-text">{user.email}</p>
                  </div>
                </div>
                <div>
                  <button
                    onClick={(e) => props.deleteUser(e)}
                    className="btn btn-danger m-2"
                    type="submit"
                  >
                    Delete
                    <i className="m-2 fa fa-trash-o" aria-hidden="true"></i>
                  </button>

                  <button
                    onClick={(e) => props.editUser(e)}
                    className=" btn btn-success m-2 "
                    type="submit"
                  >
                    Editar
                    <i className="m-2 fa fa-pencil"></i>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
