import React from "react";
import { useState } from "react";
import { useTodo } from "../context";

function TodoForm() {
  const [todo, SetTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();

    if (!todo) return;

    addTodo({ todo, completed: false });
    SetTodo("");
  };

  return (
    <div>
      <form onSubmit={add} className="flex">
        <input
          type="text"
          value={todo}
          onChange={(e) => SetTodo(e.target.value)}
          placeholder="Write Your Task..."
          className="w-full border border-black/10 px-3 rounded-l-lg py-1.5 outline-none duration-150 bg-white/20"
        />

        <button className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
          Add
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
