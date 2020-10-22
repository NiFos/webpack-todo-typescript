import React from "react";
import { CreateTask } from "./create-task";
import { List } from "./list";

export interface ITask {
  id: number;
  text: string;
  done: boolean;
}
let lastId = 0;
export function App() {
  const [list, setList] = React.useState<ITask[]>([]);
  function submitHandler(text: string) {
    const id = lastId + 1;
    setList([...list, { done: false, text, id }]);
    lastId = id;
  }
  function deleteHandler(id: number) {
    const itemId = list.findIndex((item) => item.id === id);
    if (itemId === -1) return;
    const newList = [...list];
    newList.splice(itemId, 1);
    setList(newList);
  }
  function doneHandler(id: number, done: boolean) {
    const itemId = list.findIndex((item) => item.id === id);
    if (itemId === -1) return;
    const newList = [...list];
    newList[itemId].done = done;
    setList(newList);
  }
  return (
    <div className="app">
      <CreateTask submitHandler={submitHandler} />
      <List
        tasks={list}
        doneHandler={doneHandler}
        deleteHandler={deleteHandler}
      />
    </div>
  );
}
