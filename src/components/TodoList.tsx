import React, { Component } from "react"
import "../App.css"
import TodoItem from "./TodoItem"
import TodoFooter from "./TodoFooter"
import { Todo } from "../react-app-env"

interface Props {
  todos: Todo[]
  setTodos: (todos: Todo[]) => void
}

interface InputTodoState {
  selected: string
}

class InputTodo extends Component<Props, InputTodoState> {
  state: InputTodoState = {
    selected: ""
  }

  setSelected = (selected: string) => {
    this.setState({ selected })
  }

  handleDisplayed = () => {
    const { todos } = this.props
    const { selected } = this.state

    if (selected === "Active") {
      return todos.filter(todo => todo.completed === false)
    } else if (selected === "Completed") {
      return todos.filter(todo => todo.completed === true)
    } else {
      return todos
    }
  }

  render() {
    const { todos, setTodos } = this.props
    const { selected } = this.state
    const { setSelected, handleDisplayed } = this

    const todoProps = {
      todos,
      setTodos,
      selected,
      setSelected
    }

    return (
      <>
        {handleDisplayed().map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            setTodos={setTodos}
            todos={todos}
          />
        ))}
        <TodoFooter {...todoProps} />
      </>
    )
  }
}

export default InputTodo
