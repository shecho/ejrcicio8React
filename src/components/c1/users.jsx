import React from "react";

export default function Users(props) {
  console.log(props.users);

  return (
    <>
      <div className="row m-4">
        {props.users.map((user, id) => {
          return (
            <div className="col-md-3 m-3 px-4" key={id}>
              <div className="card text-center" >

                <p id={user.id} className="d-none card-text">{user.id}</p>
                <div className="card-body">
                  <h6 className="card-title">
                    {user.name} {user.lastname}
                  </h6>
                  <p className="card-text">{user.email}</p>
                </div>

                <button onClick={(e)=> props.deleteUser(e)} className="btn btn-danger" type="submit">
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
