import React, { Component } from 'react';

const DEFAULT_GENERATION = { generationId: '', expiration: '' };
const MINIMUM_DELAY = 3000;
class Generation extends Component {
  state = { generation: DEFAULT_GENERATION };
  timer = null;
  componentDidMount() {
    this.fetchNextGeneration();
  }
  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  fetchGeneration = () => {
    fetch('http://localhost:3000/generation')
      .then(res => res.json())
      .then(json => {
        console.log(json, 'response');
        this.setState({ generation: json.generation });
      })
      .catch(error => console.error(error, 'error'));
  };
  fetchNextGeneration = () => {
    this.fetchGeneration();
    let delay =
      new Date(this.state.generation.expiration).getTime() -
      new Date().getTime();

    if (delay < MINIMUM_DELAY) {
      delay = MINIMUM_DELAY;
    }

    this.timer = setTimeout(() => this.fetchNextGeneration(), 10000);
  };

  render() {
    const { generation } = this.state;
    return (
      <div>
        <h3>Generation {generation.generationId}. Expires on:</h3>
        <h4>{new Date(generation.expiration).toString()}</h4>
      </div>
    );
  }
}
export default Generation;
