import React from "react";
import Clock from "./clock";
import Weather from "./weather";

export default class WidgetContainer extends React.Component {
  render () {
    return (
      <div>
        <Clock />
        <Weather />
      </div>
    );
  }
}
