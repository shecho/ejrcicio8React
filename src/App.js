import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      newUser: {},
    };
  }

  componentDidMount() {
    this.getData();
    // fetch('https://academlo-api-users.herokuapp.com/users')
    // .then(res => res.json())
    // .then(datos =>console.log(datos))
  }
  getData = async () => {
    let response = await fetch(
      "https://academlo-api-users.herokuapp.com/users"
    );
    let data = await response.json();
    console.log(data);
    this.setState({ users: data.data });
    // console.log(this.state.users)
  };

  addUser = (e) => {
    // console.log(e.target);
    e.preventDefault();
    //Agregar un post
      fetch("https://academlo-api-users.herokuapp.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(this.state.newUser),
      })  
        .then((response) => response.json())
        .then((results) => console.log(results))
        .catch((error) => console.log(error));
  };

  handleInput = (e) => {
    
    // console.log(e.target.value);
    this.setState({
      newUser:{
        ...this.state.newUser,
          [e.target.name]:e.target.value
      }
    })
     console.log(this.state.newUser);
  };

  render() {
    return (
      <>
        <div className="m-4 row">
          <form onInput={this.handleInput} onSubmit={(e)=> this.addUser(e)}>
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
              <input type="submit" />
          </form>
        </div>

        {this.state.users.map((usuairos) => {
          return (
            <div className="card" key={usuairos.email}>
              <div className="card-body">
                <h1 className="card-title">
                  {usuairos.name} {usuairos.lastname}
                </h1>
                <p className="card-text">{usuairos.email}</p>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

export default App;
