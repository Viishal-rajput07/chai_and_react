import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../feature/todo/todoSlice";

function TodoForm() {
  const [text, setText] = useState("");
  // const [completed, setCompleted] = useState(false);
  

  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();

    if(text.length > 0){
      dispatch(addTodo(text));
    setText("");
    }
    

  };

  return (
    
    <form onSubmit={addTodoHandler} className="flex  mt-8">
    <input
      type="text"
      className="w-full border border-black/10 px-3 rounded-l-lg py-1.5 outline-none duration-150 bg-white/20"
      placeholder="Enter a Todo..."
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
    <button
      type="submit"
      className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
    >
      Add Todo
    </button>
  </form>

  );
}

export default TodoForm;
