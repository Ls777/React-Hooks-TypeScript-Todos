import React, { Component } from "react"
import "./App.css"
import InputTodo from "./components/InputTodo"
import TodoList from "./components/TodoList"

class App extends Component {
  state = {
    todos: [],
    currentTodo: ""
  }

  setTodos = todos => {
    this.setState({ todos })
  }

  setCurrentTodo = todo => {
    this.setState({ currentTodo: todo })
  }

  render() {
    const { todos, currentTodo } = this.state
    const { setCurrentTodo, setTodos } = this
    const todoProps = {
      todos,
      currentTodo,
      setCurrentTodo,
      setTodos
    }
    return (
      <div className="app-root">
        <InputTodo {...todoProps} />
        <TodoList {...todoProps} />
      </div>
    )
  }
}

export default App
