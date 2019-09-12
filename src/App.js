import React from 'react';
import './App.css';
import Drumpad from './soundCard';
import OnOff from './onOff';
import SetList from './setList';

const bankOne = [{
  keyCode: 55,
  keyTrigger: '7',
  id: 'Heater-1',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
}, {
  keyCode: 56,
  keyTrigger: '8',
  id: 'Heater-2',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
}, {
  keyCode: 57,
  keyTrigger: '9',
  id: 'Heater-3',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
}, {
  keyCode: 52,
  keyTrigger: '4',
  id: 'Heater-4',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
}, {
  keyCode: 53,
  keyTrigger: '5',
  id: 'Clap',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
}, {
  keyCode: 54,
  keyTrigger: '6',
  id: 'Open-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
}, {
  keyCode: 49,
  keyTrigger: '1',
  id: "Kick-n'-Hat",
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
}, {
  keyCode: 50,
  keyTrigger: '2',
  id: 'Kick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
}, {
  keyCode: 51,
  keyTrigger: '3',
  id: 'Closed-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
},
];

const bankTwo = [{
keyCode: 55,
keyTrigger: '7',
id: 'Chord-1',
url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
}, {
keyCode: 56,
keyTrigger: '8',
id: 'Chord-2',
url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
}, {
keyCode: 57,
keyTrigger: '9',
id: 'Chord-3',
url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
}, {
keyCode: 52,
keyTrigger: '4',
id: 'Shaker',
url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
}, {
keyCode: 53,
keyTrigger: '5',
id: 'Open-HH',
url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
}, {
keyCode: 54,
keyTrigger: '6',
id: 'Closed-HH',
url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
}, {
keyCode: 49,
keyTrigger: '1',
id: 'Punchy-Kick',
url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
}, {
keyCode: 50,
keyTrigger: '2',
id: 'Side-Stick',
url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
}, {
keyCode: 51,
keyTrigger: '3',
id: 'Snare',
url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
}];

let currentSet = bankOne;

document.addEventListener("keypress", function(event) {
  currentSet.forEach(function(item) {
    console.log(currentSet);
    let letterPressed = String.fromCharCode(event.keyCode);
    let uppercaseLetter = letterPressed.toUpperCase();
    let backToKeycode = uppercaseLetter.charCodeAt(0);
    if(backToKeycode === item.keyCode) {
      let audioToPlay = new Audio(item.url);
      audioToPlay.play();
    }
  })
})

class App extends React.Component {
  constructor(props) {
    super(props);
    this.changeSetList = this.changeSetList.bind(this);
    this.state = {
      refreshIt : 1
    };
  }

  changeSetList (change) {
    console.log(currentSet);
    if (currentSet === bankOne) {
      currentSet = bankTwo;
      this.setState({refreshIt: 2});
    } else {
      currentSet = bankOne;
      this.setState({refreshIt: 1});  
    }
  };

  render() {
    return (
      <div className="App">
          <h1>Drum Kit</h1>
          <div className="settings">
            <OnOff />
            {/* <Volume /> */}
            {/* <BTNPressed /> */}
            <SetList /*passFunction={this.changeSetList}*/ changeSetList={this.changeSetList} onClick={() => this.setState({ refreshIt: this.state.count + 1 }) }/>
          </div>
          <div className="drum-pads">
            <Drumpad props={currentSet[0]} refreshIt={this.state.refreshIt}/> 
            <Drumpad props={currentSet[1]}/> 
            <Drumpad props={currentSet[2]}/> 
            <Drumpad props={currentSet[3]}/> 
            <Drumpad props={currentSet[4]}/> 
            <Drumpad props={currentSet[5]}/> 
            <Drumpad props={currentSet[6]}/> 
            <Drumpad props={currentSet[7]}/> 
            <Drumpad props={currentSet[8]}/>
          </div>
      </div>
    );
  }
}

export default App;
