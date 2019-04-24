import React from "react"
import "../App.css"

const InputTodo = props => {
  const { currentTodo, todos, setCurrentTodo, setTodos } = props

  const handleCreateTodo = e => {
    if (currentTodo && e.key === "Enter") {
      setTodos([
        ...todos,
        {
          description: currentTodo,
          completed: false,
          createdDate: new Date(Date.now()),
          id: Number(Date.now())
        }
      ])

      setCurrentTodo("")
    }
  }

  const handleAllTodos = () => {
    const uncompleted = todos.filter(todo => todo.completed === false)
    if (uncompleted.length > 0) {
      setTodos(todos.map(todo => ({ ...todo, completed: true })))
    } else {
      setTodos(todos.map(todo => ({ ...todo, completed: false })))
    }
  }

  return (
    <>
      <div className="inputWrapper">
        {todos.length > 0 && (
          <label htmlFor="new-todo" onClick={() => handleAllTodos()}>
            ❯
          </label>
        )}
        <input
          className="new-todo"
          value={currentTodo}
          type="text"
          placeholder="What needs to be done?"
          onChange={e => setCurrentTodo(e.target.value)}
          onKeyDown={e => handleCreateTodo(e)}
        />
      </div>
    </>
  )
}

export default InputTodo
