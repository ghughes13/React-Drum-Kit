import React from 'react';

class SetList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        changeSetList : this.props.passFunction
      };
    }

    render() {
      return (
        <button className="change-list" onClick={this.state.changeSetList}>Change List</button>
        );
    }
  }

  export default SetList;


  