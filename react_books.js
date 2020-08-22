import React from 'react';
import ReactDOM from 'react-dom';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: 'Alice' };
  }
  myChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }
  render() {
    return (
      <form>
      <h1>Hello {this.state.Alice}</h1>
      <p>Sylvia Plath:</p>
      <input
        type='visitor'
        onChange={this.myChangeHandler}
      />
      </form>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('root'));

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport"
      content="width=device-width, initial-scale=1" />
    <title>Search the Library</title>
  </head>
  <body>

    <div id="root"></div>

  </body>
</html>

import React from 'react';
import ReactDOM from 'react-dom';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myauthor: 'Harris'
    };
  }
  render() {
    return (
      <form>
      <select value={this.state.mycar}>
        <option value="Harris">Harris</option>
        <option value="silence">SilenceoftheLambs</option>
        <option value="synopsis">synopsis</option>
      </select>
      </form>
    );
  }
}
import React from 'react';
import ReactDOM from 'react-dom';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: 'Alice' };
  }
  myChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }
  render() {
    return (
      <form>
      <h1>Hello {this.state.Alice}</h1>
      <p>Sylvia Plath:</p>
      <input
        type='visitor'
        onChange={this.myChangeHandler}
      />
      </form>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('root'));

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport"
      content="width=device-width, initial-scale=1" />
    <title>Search the Library</title>
  </head>
  <body>

    <div id="root"></div>

  </body>
</html>

import React from 'react';
import ReactDOM from 'react-dom';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myauthor: 'BettySmith'
    };
  }
  render() {
    return (
      <form>
      <select value={this.state.mycar}>
        <option value="Smith">Smith</option>
        <option value="silence">ATreeGrowsInBrooklyn</option>
        <option value="synopsis">synopsis</option>
      </select>
      </form>
    );
  }
}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport"
      content="width=device-width, initial-scale=1" />
    <title>Search the Library</title>
  </head>
  <body>

    <div id="root"></div>

  </body>
</html>

import React from 'react';
import ReactDOM from 'react-dom';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myauthor: 'HarperLee'
    };
  }
  render() {
    return (
      <form>
      <select value={this.state.mycar}>
        <option value="Lee">Lee</option>
        <option value="silence">ToKillAMockinbgbird</option>
        <option value="synopsis">synopsis</option>
      </select>
      </form>
    );
  }
}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport"
      content="width=device-width, initial-scale=1" />
    <title>Search the Library</title>
  </head>
  <body>

    <div id="root"></div>

  </body>
</html>

import React from 'react';
import ReactDOM from 'react-dom';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myauthor: 'Alan Moore'
    };
  }
  render() {
    return (
      <form>
      <select value={this.state.author}>
        <option value="Moore>Moore</option>
        <option value="silence">VforVendetta</option>
        <option value="synopsis">synopsis</option>
      </select>
      </form>
    );
  }
}
