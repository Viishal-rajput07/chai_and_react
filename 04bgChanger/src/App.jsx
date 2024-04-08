import { useState } from "react";

function App() {
  const [color, setColor] = useState("#f97316");

  return (
    <div
      className="h-screen w-full flex justify-center m-0"
      style={{ backgroundColor: color }}
    >
      <div className="fixed bottom-10 flex justify-center items-center text-white bg-white rounded-full gap-6 py-4 px-6">
        <button
          className="bg-red-500 px-3 py-1 rounded-full outline-none"
          onClick={() => setColor("#ef4444")}
        >
          Red
        </button>
        <button
          className="bg-green-500 px-3 py-1 rounded-full outline-none"
          onClick={() => setColor("#22c55e")}
        >
          Green
        </button>
        <button
          className="bg-yellow-300 px-3 py-1 rounded-full outline-none"
          onClick={() => setColor("#fde047")}
        >
          yellow
        </button>
        <button
          className="bg-blue-500 px-3 py-1 rounded-full outline-none"
          onClick={() => setColor("#3b82f6")}
        >
          Blue
        </button>
        <button
          className="bg-gray-500 px-3 py-1 rounded-full outline-none"
          onClick={() => setColor("#6b7280")}
        >
          Gray
        </button>
      </div>
    </div>
  );
}

export default App;
