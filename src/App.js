import React from "react";
import "./App.css";
import Users from "./components/c1/users";
import Form from "./components/c2/form";

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
    let url = "https://academlo-api-users.herokuapp.com/users";
    let response = await fetch(url);
    let data = await response.json();
    // console.log(data);
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
      newUser: {
        ...this.state.newUser,
        [e.target.name]: e.target.value,
      },
    });
    console.log(this.state.newUser);
  };

  deleteUser = async (e) => {
    console.log(e.target.parentElement.firstChild.id);
    let id = e.target.parentElement.firstChild.id;
    let url = `https://academlo-api-users.herokuapp.com/user/${id}`;
    let request = await fetch(url, { method: "DELETE" });
    console.log(request);
  };
  render() {
    return (
      <>
        <Form handleInput={this.handleInput} addUser={this.addUser} />
        <Users deleteUser={this.deleteUser} users={this.state.users} />
      </>
    );
  }
}

export default App;
