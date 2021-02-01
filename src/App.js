import React, { Component } from 'react';
import KittenImg from './KittenImg'


class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
        <p className="textColor anotherClass" id="border">Hi - great to see you!</p>
        <KittenImg />
        <KittenImg />
      </div>
    )
  }
}

export default App;