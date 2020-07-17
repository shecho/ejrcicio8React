import React from "react";

export default function Users(props) {
  console.log(props.users);

  return (
    <>
      <div className="row m-4">
        {props.users.map((user, id) => {
          return (
            <div className="col-md-3 m-3 px-4" key={id}>
              <div className="card text-center">
                <p id={user.id} className="d-none card-text">
                  {user.id}
                </p>
                <div className="card-body text-center">
                  <div className="d-flex justify-content-center align-items-center ">
                    <h6 className="m-2 card-title">
                      {user.name} {user.lastname}
                    </h6>
                    <i class="m-2 fa fa-pencil"></i>
                  </div>
                  <div className="d-flex justify-content-center align-items-center ">
                    <input
                      className="d-none form-control"
                      type="text"
                      value={user.name}
                    />
                  </div>
                  <div className="d-flex justify-content-center align-items-center ">
                    <p className="m-2 card-text">{user.email}</p>
                    <i class="m-2 fa fa-pencil" aria-hidden="true"></i>
                  </div>
                  <div>
                    <input
                      className=" d-none form-control"
                      type="text"
                      value={user.email}
                    />
                  </div>
                </div>
                <div>
                  <button
                    onClick={(e) => props.deleteUser(e)}
                    className="btn btn-danger m-2"
                    type="submit"
                  >
                    Delete
                  </button>

                  <button className=" btn btn-success m-2 " type="submit">
                    Save
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
