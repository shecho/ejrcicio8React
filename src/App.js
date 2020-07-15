import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
   
    this.getData() 
    // fetch('https://academlo-api-users.herokuapp.com/users')
    // .then(res => res.json())
    // .then(datos =>console.log(datos))
  
  }
  getData = async () => {
    let response = await fetch("https://academlo-api-users.herokuapp.com/users");
    let data =await  response.json();
    // console.log(data);
    this.setState({ users: data.data })
    console.log(this.state.users)
  }

  // addUser = (e) => {
    // console.log(e);
  //   event.preventDefault();
  //   //Agregar un post
  //   fetch("https://academlo-api-users.herokuapp.com/users", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json; charset=UTF-8",
  //     },
  //     body: JSON.stringify(),
  //   })
  //     .then((response) => response.json())
  //     .then((results) => console.log(results))
  //     .catch((error) => console.log(error));
  // };

  handleInput = (e) => {
    console.log(e.target.value);
  };

  render() {
    return (
      <>
       <div className ='m-4 row'>
       <form>
          <div className="form-group">
            <input className="form-control" name="title" type="text" placeholder="Nombre" />
          </div>
          
          <div className="form-group">
            <input className="form-control" name="body" type="text" placeholder="Apellido" />
          </div>
          <div className="form-group"> 
            <input className="form-control" name="body" type="email" placeholder="Email" />
          </div>
          <div className="form-group">
            <input className="form-control" name="body" type="password" placeholder="Password" />
          </div>
          <div className="form-group">
            <input type="submit" />
          </div>
          
         </form>

       </div>

        {this.state.users.map((usuairos) => {
            return ( 
              
              <div className="card" key={usuairos.email}>
                <div className="card-body"> 
                  <h1 className="card-title">{usuairos.name} {usuairos.lastname}</h1>
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
