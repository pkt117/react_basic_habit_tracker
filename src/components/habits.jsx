import React, { Component } from "react";
import Habit from "./habit";
import InputHabit from "./inputHabit";
import Reset from "./reset";

class Habits extends Component {
  handleIncrement = (habit) => this.props.onIncrement(habit);
  handleDecrement = (habit) => this.props.onDecrement(habit);
  handleDelete = (habit) => this.props.onDelete(habit);
  onAddHabit = (name) => this.props.onAddHabit(name);
  handleReset = () => this.props.onReset();
  render() {
    console.log("habits");
    return (
      <>
        <InputHabit onAddHabit={this.onAddHabit} />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
            />
          ))}
        </ul>
        <Reset onReset={this.handleReset} />
      </>
    );
  }
}

export default Habits;
