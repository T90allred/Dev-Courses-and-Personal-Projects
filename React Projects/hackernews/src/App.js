import React, { Component } from 'react';
import './App.css';

const list = [
{
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
},
{
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

class App extends Component {
  render() {
    const welcomeStatement = 'Welcom to React';
    const user = {
      firstName: 'Sam',
      lastName: 'Allred',
      loggedIn: true
    }
    function getGreeting(user) {
      if (user.loggedIn === true) {
        return <greeting>Hello, {`${user.firstName} ${user.lastName}`}</greeting>
      }
      return <greeting>Hello, Stranger...</greeting>
    }

    return (
      <div className="App">
        <h1>{welcomeStatement}</h1>
        <p>{getGreeting(user)}</p>
      </div>
    );
  }
}

export default App;
