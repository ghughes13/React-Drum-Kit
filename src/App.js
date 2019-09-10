import React from 'react';
import './App.css';
import Drumpad from './soundCard';
import OnOff from './onOff';
import SetList from './setList';

const bankOne = [{
  keyCode: 81,
  keyTrigger: 'Q',
  id: 'Heater-1',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
}, {
  keyCode: 87,
  keyTrigger: 'W',
  id: 'Heater-2',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
}, {
  keyCode: 69,
  keyTrigger: 'E',
  id: 'Heater-3',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
}, {
  keyCode: 65,
  keyTrigger: 'A',
  id: 'Heater-4',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
}, {
  keyCode: 83,
  keyTrigger: 'S',
  id: 'Clap',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
}, {
  keyCode: 68,
  keyTrigger: 'D',
  id: 'Open-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
}, {
  keyCode: 90,
  keyTrigger: 'Z',
  id: "Kick-n'-Hat",
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
}, {
  keyCode: 88,
  keyTrigger: 'X',
  id: 'Kick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
}, {
  keyCode: 67,
  keyTrigger: 'C',
  id: 'Closed-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
},
];

const bankTwo = [{
keyCode: 81,
keyTrigger: 'Q',
id: 'Chord-1',
url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
}, {
keyCode: 87,
keyTrigger: 'W',
id: 'Chord-2',
url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
}, {
keyCode: 69,
keyTrigger: 'E',
id: 'Chord-3',
url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
}, {
keyCode: 65,
keyTrigger: 'A',
id: 'Shaker',
url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
}, {
keyCode: 83,
keyTrigger: 'S',
id: 'Open-HH',
url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
}, {
keyCode: 68,
keyTrigger: 'D',
id: 'Closed-HH',
url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
}, {
keyCode: 90,
keyTrigger: 'Z',
id: 'Punchy-Kick',
url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
}, {
keyCode: 88,
keyTrigger: 'X',
id: 'Side-Stick',
url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
}, {
keyCode: 67,
keyTrigger: 'C',
id: 'Snare',
url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
}];

let setList = 1;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSet : bankOne
    };
  }

  changeSetList = () => {
    console.log('ran');
    if(setList === 1) {
      setList = 2; 
    } else {
      setList = 1
    }
    console.log(setList);
    if (setList === 1) {
      this.currentSet = bankOne;
    } else {
      this.currentSet = bankTwo;
    }
    console.log(this.currentSet);
  };

  document.addEventListener("keypress", function(event) {
  currentSet.forEach(function(item) {
    let letterPressed = String.fromCharCode(event.keyCode);
    let uppercaseLetter = letterPressed.toUpperCase();
    let backToKeycode = uppercaseLetter.charCodeAt(0);
    if(backToKeycode === item.keyCode) {
      let audioToPlay = new Audio(item.url);
      audioToPlay.play();
    }
  })
})

  render() {
    return (
      <div className="App">
          <h1>Drum Kit</h1>
          <div className="settings">
            <OnOff />
            {/* <Volume /> */}
            {/* <BTNPressed /> */}
            <SetList passFunction={this.changeSetList}/>
          </div>
          <div className="drum-pads">
            <Drumpad props={currentSet[0]} /> 
            <Drumpad props={setList===1 ? bankOne[1] : bankTwo[1]}/> 
            <Drumpad props={setList===1 ? bankOne[2] : bankTwo[2]}/> 
            <Drumpad props={setList===1 ? bankOne[3] : bankTwo[3]}/> 
            <Drumpad props={setList===1 ? bankOne[4] : bankTwo[4]}/> 
            <Drumpad props={setList===1 ? bankOne[5] : bankTwo[5]}/> 
            <Drumpad props={setList===1 ? bankOne[6] : bankTwo[6]}/> 
            <Drumpad props={setList===1 ? bankOne[7] : bankTwo[7]}/> 
            <Drumpad props={setList===1 ? bankOne[8] : bankTwo[8]}/> 
          </div>
      </div>
    );
  }
}

export default App;
