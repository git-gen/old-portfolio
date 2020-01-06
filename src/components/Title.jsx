import React from 'react';
import './../App.css';

const wait = (sec) => {
  return new Promise((resolve) => {
    setTimeout(resolve, sec * 1000);
  });
}

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: true,
    };
  }

  titleTimer = async () => {
    try {
      await wait(0.7);
      this.setState({ title: false });
    } catch (e) {
      console.log(e);
    }
  }

  componentDidMount() {
    this.titleTimer();
  }

  render() {
    return (
      <div
        className="title"
        style={{ opacity: this.state.title ? 1 : 0 }}
      >
        <div className="title-text">{this.props.text}</div>
      </div>
    );
  }
}

export default Title
