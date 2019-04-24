import React from "react"
import "../App.css"

const TodoItem = props => {
  const { todo, todos, setTodos } = props

  const formatDate = date => {
    return `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`
  }

  const handleToggle = () => {
    setTodos(
      todos.map(todoIterated => {
        if (todoIterated.id === todo.id) {
          return { ...todoIterated, completed: !todoIterated.completed }
        } else {
          return todoIterated
        }
      })
    )
  }

  const removeTodo = () => {
    setTodos(todos.filter(todoIteration => todoIteration.id !== todo.id))
  }

  return (
    <>
      <div className="todoWrapper">
        <div className="toggle" onClick={() => handleToggle()}>
          {todo.completed ? <div className="checkmark">&#10003;</div> : null}
        </div>
        <div className="detailWrapper">
          <div
            className={todo.completed ? "detailCompleted" : "detailUncompleted"}
          >
            {todo.description}
          </div>
          <div
            className={todo.completed ? "detailCompleted" : "detailUncompleted"}
          >
            {formatDate(todo.createdDate)}
            <div className="destroy" onClick={() => removeTodo()}>
              ×
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TodoItem
