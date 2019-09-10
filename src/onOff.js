import React from 'react';

class OnOff extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isDrumKitActive: this.props.isActive
      };
    }

    render() {
      return (
        <div>
            <label className="switch">
                <input type="checkbox"/>
                <span className="slider"></span>
            </label>    
        </div>
      );
    }
  }

  export default OnOff;


  