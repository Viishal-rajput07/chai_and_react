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
          onMouseMove={() => setColor("#ef4444")}
        >
          Red
        </button>
        <button
          className="bg-green-500 px-3 py-1 rounded-full outline-none"
          onMouseMove={() => setColor("#22c55e")}
        >
          Green
        </button>
        <button
          className="bg-yellow-300 px-3 py-1 rounded-full outline-none"
          onMouseMove={() => setColor("#fde047")}
        >
          yellow
        </button>
        <button
          className="bg-blue-500 px-3 py-1 rounded-full outline-none"
          onMouseMove={() => setColor("#3b82f6")}
        >
          Blue
        </button>
        <button
          className="bg-purple-600 px-3 py-1 rounded-full outline-none"
          onMouseMove={() => setColor("purple")}
        >
          purple
        </button>
        <button
          className="bg-gray-500 px-3 py-1 rounded-full outline-none"
          onMouseMove={() => setColor("#6b7280")}
        >
          Gray
        </button>
        <button
          className="bg-black px-3 py-1 rounded-full outline-none"
          onMouseMove={() => setColor("#000")}
        >
          Black
        </button>
        <button
          className="bg-violet-600 px-3 py-1 rounded-full outline-none"
          onMouseMove={() => setColor("#7f00ff")}
        >
          voilet
        </button>
        <button
          className="bg-pink-300 px-3 py-1 rounded-full outline-none"
          onMouseMove={() => setColor("pink")}
        >
          Pink
        </button>
        <button
          className="bg-orange-400 px-3 py-1 rounded-full outline-none"
          onMouseMove={() => setColor("orange")}
        >
          Bhagva
        </button>
        
        
      </div>
    </div>
  );
}

export default App;
