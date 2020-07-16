import React from "react";

export default function Users(props) {
  console.log(props.users);

  return (
    <>
      <div className="row m-4">
        {props.users.map((user, id) => {
          return (
            <div className="col-md-3 m-3 px-4">
              <div className="card text-center" key={id}>
                <div className="card-body">
                  <h6 className="card-title">
                    {/* <p className="card-text">{user.id}</p> */}
                    {user.name} {user.lastname}
                  </h6>
                  <p className="card-text">{user.email}</p>
                </div>

                <button className="btn btn-danger" type="submit">
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
