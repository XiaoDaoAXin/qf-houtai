import { Component as WeElement, createElement as h } from "react";

class Mine extends WeElement {
  render() {
    return h(
      "div",
      null,
      "Mine\u9875\u9762",
      h(
        "button",
        {
          onClick: this.navTo.bind(this)
        },
        "Topic"
      )
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      title: "react"
    };
  }

  navTo() {
    console.log(1);
    this.props.location.push("/topic");
  }

  componentDidMount() {
    console.log(this.props.match.params.id);
  }
}

Mine.css = ``;
export default Mine;
