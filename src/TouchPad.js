import React from "react";
import "./TouchPad.css";

class TouchPad extends React.Component {
  onClick = () => {
    const audio = new Audio(this.props.sound.name);
    audio.play();
  };

  render() {
    return (
      <button className="touchPad" onClick={this.onClick}>
        {this.props.sound.text}
      </button>
    );
  }
}

export default TouchPad;
