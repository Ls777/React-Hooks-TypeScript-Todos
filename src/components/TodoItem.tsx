import React, { FunctionComponent } from "react";
import "../App.css";
import { Todo } from "../react-app-env";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
}

const TodoItem: FunctionComponent<Props> = props => {
  const { todo, todos, setTodos } = props;

  const formatDate = (date: Date) => {
    return `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;
  };

  const handleToggle = () => {
    setTodos(
      todos.map((todoIteration: Todo) => {
        if (todoIteration.id === todo.id) {
          return { ...todoIteration, completed: !todoIteration.completed };
        } else {
          return todoIteration;
        }
      })
    );
  };

  return (
    <>
      <div className="todoWrapper" key={Number(todo.createdDate)}>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
