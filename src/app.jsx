import React, { Component } from "react";
import "./app.css";
import Habits from "./components/habits";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    totalCount: 0,
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  handleIncrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      } else {
        return item;
      }
    });

    this.setState({ habits });
  };
  handleDecrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    });

    this.setState({ habits });
  };
  handleDelete = (habit) => {
    //  const habits = [...this.state.habits];
    //  const index = habits.indexOf(habit);
    //  habits.splice(index, 1);
    const habits = this.state.habits.filter((item) => item.id != habit.id);
    this.setState({ habits });
  };

  AddHabit = (name) => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
    // const idCount = habits.length + 1;
    // const habit = { id: idCount, name: name, count: 0 };
    // habits.push(habit);

    this.setState({ habits });
  };

  handleReset = () => {
    // const habits = [...this.state.habits];
    // habits.forEach((habit) => (habit.count = 0));

    const habits = this.state.habits.map((item) => {
      if (item.count !== 0) {
        return { ...item, count: 0 };
      }
      return item;
    });
    this.setState({ habits });
  };

  render() {
    console.log("app");
    return (
      <>
        <Navbar
          totalCount={this.state.habits.filter((item) => item.count > 0).length}
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAddHabit={this.AddHabit}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
