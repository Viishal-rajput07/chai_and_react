import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { removeTodo, editTodo, togglecomplete } from "../feature/todo/todoSlice";

function Todos({ todo }) {
  const [todoMsg, setTodoMsg] = useState(todo.text);
  const [editable, setEditable] = useState(false);

  const dispatch = useDispatch();

  const edit = (id) => {
    dispatch(editTodo({ id, text: todoMsg }));
    setEditable(false);
  };

  const toggleCompeleted = (id) => {
    dispatch(togglecomplete({id}))
  }

  return (
    <div
    className={`flex items-center border border-black/10 rounded-lg px-3 py-1 gap-x-4 shadow-white/50 duration-300 text-white 
    ${todo.completed ? "bg-[#c6e9a7] text-slate-500" : "bg-pink-400"}`}
    >
      <input
        type="checkbox"
        className="cursor-pointer checkbox checkbox-xs"
        checked={todo.completed}
        onChange={()=> toggleCompeleted(todo.id)}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          editable ? "border-black/10 px-2" : "border-transparent"
        }  ${todo.completed ? "line-through" : ""}`}
        value={todoMsg}
        readOnly={!editable}
        onChange={(e) => setTodoMsg(e.target.value)}
      />
      <button
      disabled={todo.completed}
        onClick={() => {

          if (todo.completed) return;
          
          if (editable) {
            edit(todo.id);
          } else setEditable((prev) => !prev);
        }}
      >
        {editable ? "📁" : "✏️"}
      </button>
      <button
        onClick={() => dispatch(removeTodo(todo.id))}
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
      >
       ❌ 
      </button>
      
    </div>
  );
}

export default Todos;
