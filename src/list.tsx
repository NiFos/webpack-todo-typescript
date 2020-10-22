import React from "react";
import { ITask } from "./app";

interface Props {
  tasks: ITask[];
  deleteHandler: (id: number) => void;
  doneHandler: (id: number, done: boolean) => void;
}
export function List(props: Props) {
  return (
    <div className="list">
      <h3>Tasks</h3>
      <ul>
        {props.tasks.map((item) => (
          <li key={item.id}>
            <button onClick={() => props.doneHandler(item.id, !item.done)}>
              {item.done ? "Undone" : "Done"}
            </button>
            <span>{item.text}</span>
            <button onClick={() => props.deleteHandler(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
