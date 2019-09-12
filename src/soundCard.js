import React from 'react';

class Drumpad extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        id: this.props.props.id,
        keyTrigger: this.props.props.keyTrigger,
        keyCode: this.props.props.keyCode,
        url: new Audio(this.props.props.url),
        didItchange : this.props.refreshIt
      };
    }

    componentWillReceiveProps({props}) {
      this.setState({
        id: this.props.props.id,
        keyTrigger: this.props.props.keyTrigger,
        keyCode: this.props.props.keyCode,
        url: new Audio(this.props.props.url),
      })
    }

    render() {
      return (
        <button className="square" onClick={ () => this.state.url.play()} onKeyPress={console.log('key pressed')}>
          {this.state.id}
          <br />
          <span className="letter">( <em>{this.state.keyTrigger}</em> )</span>
        </button>
      );
    }
  }

  export default Drumpad;


  