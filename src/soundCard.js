import React from 'react';

class Drumpad extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        id: this.props.props.id,
        keyTrigger: this.props.props.keyTrigger,
        keyCode: this.props.props.keyCode,
        url: new Audio(this.props.props.url)
      };
    }
  
    playByKeyboard = (event) => {
        console.log('keypressed');
        if(event.keyCode === this.state.keyCode) {
            console.log('match');
        }
    }

    render() {
      return (
        <button className="square" onClick={ () => this.state.url.play()} onKeyPress={console.log('key pressed')}>
        {console.log(this.state.url)}
          {this.state.id}
        </button>
      );
    }
  }

  export default Drumpad;

