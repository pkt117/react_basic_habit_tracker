import React, { PureComponent } from "react";

class Navbar extends PureComponent {
  render() {
    console.log("navbar");
    return (
      <nav className="navbar">
        <i className="fas fa-leaf navbar-logo"></i>
        <span> Habit Tracker </span>
        <span className="habit-count">{this.props.totalCount}</span>
      </nav>
    );
  }
}

export default Navbar;
