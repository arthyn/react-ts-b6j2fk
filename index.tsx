import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import { styled } from './stitches.config';
import './style.css';

interface AppProps { }
interface AppState {
  name: string;
}

const Container = styled('main', {
  padding: '$12',
  minHeight: '100vh',
  minWidth: '$screen',
  backgroundColor: '$indigo100'
})

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <Container>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </Container>
    );
  }
}

render(<App />, document.getElementById('root'));
