import React from 'react';

class SetList extends React.Component {
    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     changeSetList : this.props.passFunction,
    //     setListNum : 1
    //   };
    // }



    render() {
      return (
        <button className="change-list" onClick= { () =>  this.props.changeSetList('fiver') }>Change List</button>
        );
    }
  }

  export default SetList;


  