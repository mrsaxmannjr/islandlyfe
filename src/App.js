import React, { Component } from 'react';
import './App.css';

import API from './lib/API';

class App extends Component {
  state = {
    beaches: [],
  }

  async componentDidMount() {
    const beaches = await API.getAll();
    console.log(beaches);
    this.setState({
      beaches
    })
  }
  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarColor01">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Features</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Pricing</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About</a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <main>
          {this.state.beaches.map(beach => {
            return (
              <div className="jumbotron">
                <h1 className="display-4">{beach.beach}</h1>
                <p>{beach.beach}, on the island of {beach.island} is located on the {beach.shore}. The current weather is {beach.weather} at {beach.temp}F with winds coming {beach.wind}</p>
                <ul>
                  <li>Shoreside conditions: {beach.nearshore.toUpperCase()}</li>
                  <li>Offshore conditions: {beach.offshore.toUpperCase()}</li>
                  <li>Surf conditions: {beach.surf.toUpperCase()}</li>
                </ul>
              <hr className="my-4"/>
                <a className="btn btn-primary btn-lg" href={beach.link} target="_blank" role="button">{beach.beach} Homepage</a>
            </div>
            )
          })}
          </main>

      </div>
    );
  }
}

export default App;
