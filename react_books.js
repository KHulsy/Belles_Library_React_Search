import React from 'react';
import ReactDOM from 'react-dom';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
  }
  myChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }
  render() {
    return (
      <form>
      <h1>Hello {this.state.sylviaplath}</h1>
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
