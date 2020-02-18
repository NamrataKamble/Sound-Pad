import React from "react";
import TouchPad from "./TouchPad";
import "./App.css";

import sound1 from "./tones/apple__chimes_sms.mp3";
import sound2 from "./tones/apple_apex_tone.mp3";
import sound3 from "./tones/apple_cookie_bubbles.mp3";
import sound4 from "./tones/apple_iphone_remix.mp3";
import sound5 from "./tones/apple_macbook.mp3";
import sound6 from "./tones/apple_message_tones.mp3";
import sound7 from "./tones/apple_mms_2011.mp3";
import sound8 from "./tones/apple_sms (1).mp3";
import sound9 from "./tones/apple_sms_3.mp3";
import sound10 from "./tones/apple_sms.mp3";
import sound11 from "./tones/apple_watch_.mp3";
import sound12 from "./tones/iphone_apple_sms.mp3";
import sound13 from "./tones/sms_alert.mp3";
import sound14 from "./tones/sms_bells_tone.mp3";
import sound15 from "./tones/sms_glass_break.mp3";
import sound16 from "./tones/sms_tone.mp3";

const tones = [
  {
    name: sound1,
    text: 1
  },
  {
    name: sound2,
    text: 2
  },
  {
    name: sound3,
    text: 3
  },
  {
    name: sound4,
    text: 4
  },
  {
    name: sound5,
    text: 5
  },
  {
    name: sound6,
    text: 6
  },
  {
    name: sound7,
    text: 7
  },
  {
    name: sound8,
    text: 8
  },
  {
    name: sound9,
    text: 9
  },
  {
    name: sound10,
    text: 10
  },
  {
    name: sound11,
    text: 11
  },
  {
    name: sound12,
    text: 12
  },
  {
    name: sound13,
    text: 13
  },
  {
    name: sound14,
    text: 14
  },
  {
    name: sound15,
    text: 15
  },
  {
    name: sound16,
    text: 16
  }
];

function App() {
  return (
    <div className="App">
      <h1 className="tone">My-Sound-Pad </h1>

      {tones.map(sound => {
        return <TouchPad sound={sound} />;
      })}
    </div>
  );
}

export default App;
