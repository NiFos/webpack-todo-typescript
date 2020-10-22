import React from "react";

interface Props {
  submitHandler: (text: string) => void;
}

export function CreateTask(props: Props) {
  const [text, setText] = React.useState("");
  function submitHandler() {
    props.submitHandler(text);
    setText("");
  }
  return (
    <form onSubmit={submitHandler} className="create">
      <input
        placeholder="Enter text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {text.length > 0 && (
        <button onClick={submitHandler} className="create-btn">
          Add task
        </button>
      )}
    </form>
  );
}
