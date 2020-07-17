import React from "react";
import "./App.css";
import Users from "./components/c1/users";
import Form from "./components/c2/form";
import EditForm from "./components/editForm/editform";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      newUser: {},
      userEdited: {},
    };
  }

  componentDidMount() {
    this.getData();
    // fetch('https://academlo-api-users.herokuapp.com/users')
    // .then(res => res.json())
    //clg .then(datos =>console.log(datos))
    // console.log(this.state.userEdited);
  }
  getData = async () => {
    let url = "https://academlo-api-users.herokuapp.com/users";
    let response = await fetch(url);
    let data = await response.json();
    // console.log(data);
    this.setState({ users: data.data });
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
    }).then((response) => response.json());
    // .then((results) => console.log(results))
    // .catch((error) => console.log(error));
  };

  handleInput = (e) => {
    // console.log(e.target.value);
    this.setState({
      newUser: {
        ...this.state.newUser,
        [e.target.name]: e.target.value,
      },
    });
    // console.log(this.state.newUser);
  };
  // -----------------------------------------------------------------------------------------------
  // dlete user
  deleteUser = async (e) => {
    // console.log(e.target.parentElement.parentElement.firstElementChild.id);
    let id = e.target.parentElement.parentElement.firstElementChild.id;
    console.log(id);
    let url = `https://academlo-api-users.herokuapp.com/user/${id}`;
    // console.log(url);
    let request = await fetch(url, { method: "DELETE" });
    // console.log(request);
    this.getData();
  };

  // editar usuario
  updateUser = async (e) => {
    e.preventDefault();
    let id = this.state.userEdited.id;
    // console.log(this.state.userEdited.id);
    let data = this.state.userEdited;
    console.log(data);
    let url = `https://academlo-api-users.herokuapp.com/user/${id}`;
    // console.log(url);
    let request = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(data),
    });
    this.getData();
    console.log(request);
    // fetch aqui
  };
  handleInputEdit = (e) => {
    // console.log(e.target.value);
    this.setState({
      userEdited: {
        ...this.state.userEdited,
        [e.target.name]: e.target.value,
      },
    });
    console.log(this.state.userEdited);
  };

  editUser = async (e) => {
    let idUsertoUpdate = e.target.parentElement.parentElement.parentElement.id;
    console.log(idUsertoUpdate);
    let userToEdit = await this.state.users[idUsertoUpdate];
    // console.log((userToEdit = await this.state.users[idUsertoUpdate]));
    this.setState({
      userEdited: { ...this.state.userEdited, ...userToEdit },
    });
    console.log(this.state.userEdited);
  };
  // -----------------------------------------------------------------------------------------------
  render() {
    return (
      <>
        <div className="row justify-content-center">
          <Form handleInput={this.handleInput} addUser={this.addUser} />
          <EditForm
            user={this.state.userEdited}
            editInput={this.handleInputEdit}
            updateUser={this.updateUser}
          />
        </div>
        <Users
          deleteUser={this.deleteUser}
          users={this.state.users}
          editUser={this.editUser}
        />
      </>
    );
  }
}

export default App;
