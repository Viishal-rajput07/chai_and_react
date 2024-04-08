import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(6);
  const [password, setPassword] = useState("");
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOKPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numbersAllowed) str += "1234567890";
    if (characterAllowed) str += "!@#$%&*";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numbersAllowed, characterAllowed, setPassword]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 50);
    window.navigator.clipboard.writeText(password);
  });
  useEffect(() => {
    passwordGenerator();
  }, [length, numbersAllowed, characterAllowed, passwordGenerator]);

  return (
    <div className="w-full max-w-md bg-slate-500 mx-auto mt-12 py-4 px-6 rounded-md">
      <h1 className="text-center text-3xl">Password Generator</h1>
      <div className="flex justify-center items-center my-7">
        <input
          className="input w-full"
          type="text"
          placeholder="Password"
          readOnly
          value={password}
          ref={passwordRef}
        />
        <button className="btn btn-primary" onClick={copyPassword}>
          copy
        </button>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex gap-2 items-center w-[184px]">
          <input
            type="range"
            className="range range-accent range-xs w-24"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            min={1}
            max={30}
            id="range"
          />
          <label htmlFor="range"> Length: {length}</label>
        </div>
        <div className="flex gap-2 items-center">
          <input
            type="checkbox"
            className="checkbox checkbox-xs"
            id="nums"
            onChange={() => setNumbersAllowed((prev) => !prev)}
          />
          <label htmlFor="nums">Numbers</label>
        </div>
        <div className="flex gap-2 items-center">
          <input
            type="checkbox"
            className="checkbox checkbox-xs"
            id="chars"
            onChange={() => {
              setCharacterAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="chars">Character</label>
        </div>
      </div>
    </div>
  );
}

export default App;
