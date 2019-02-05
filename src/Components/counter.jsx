import React, { Component } from "react";

class Counter extends Component {
  /*state = {
    value: this.props.counter.value
    //tags: ["tag1", "tag2", "tag3"],
    //imageUrl: "" //https://picsum.photos/200
  };*/

  constructor(props) {
    super(props);
    //this.handleIncrement = this.handleIncrement.bind(this);
  }
  /*handleIncrement(product) {
    this.setState({ value: this.state.value + 1 });
  }*/
  /*renderTags() {
    if (this.state.tags.length === 0) {
      return <p> There are no tags! </p>;
    } else {
      return <React.Fragment>{this.createButton()}</React.Fragment>;
    }
  }*/
  render() {
    return <React.Fragment>{this.createButton()}</React.Fragment>;
  }

  createButton() {
    return (
      <div>
        {this.props.children}
        <span
          style={{ fontSize: 15, fontWeight: "bold" }}
          className={this.getBadgeClasses()}
        >
          {" "}
          {this.formatCount()}{" "}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-secondary btn-sm"
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
  }
}
/*
<ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
*/
export default Counter;
