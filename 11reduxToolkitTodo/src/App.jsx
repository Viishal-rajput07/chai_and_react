
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import { useSelector } from "react-redux";

function App() {
  const todos = useSelector((state) => state.todos);
  return (
    
      <div className="bg-pink-500 min-h-screen min-w-full py-12 ">
        <div className="w-full max-w-3xl mx-auto shadow-lg rounded-lg px-4 py-4 text-white">
          <h1 className="text-5xl font-bold text-center mb-8 ">
           Just Do
          </h1>
          <div className="mb-4">
            <AddTodo />
          </div>

          <div className="flex flex-wrap gap-y-4">
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <Todos todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    
  );
}

export default App;
