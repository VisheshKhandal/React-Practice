import { useState } from "react";

function App() {
  const[color, setColor] = useState("Teal");
  const randomColor = () => {
  const colors = [
    "red",
    "green",
    "blue",
    "cyan",
    "brown",
    "yellow",
    "orange",
    "grey",
    "purple"
  ];

  const random =
    colors[Math.floor(Math.random() * colors.length)];

  setColor(random);
};
  return (
    <>
     <div className = "w-full h-screen duration-200 " 
     style = {{backgroundColor : color}}>
      <div className="text-center pt-12">
      <h1 className="text-white text-6xl font-extrabold tracking-wide drop-shadow-2xl">
        Bg-Changer
      </h1>

      <p className="text-white/80 text-xl mt-3 font-medium tracking-wider">
      Created By Vishesh Khandal
        </p>
      </div>
      <div
      className = "fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className = "flex flex-wrap justify-center gap-3 shadow-lg bg-stone-50 px-3 py-3 rounded-3xl">
        <button
/*
React’s onClick expects: A FUNCTION
Meaning:
“Give me a function.I will execute it later when user clicks.”
Very important: onClick wants a FUNCTION REFERENCE NOT a function CALL.
This is the heart of the entire logic.

onClick={setColor("red")} immediately calls the function during rendering,
while onClick={() => setColor("red")} passes a callback function that React executes only when the user clicks the button.
*/        
        onClick={() => setColor("red")}
        className="outline-none px-6 py-2 rounded-full text-white shadow-lg font-semibold transition-all duration-300 hover:scale-110 hover:shadow-3xl active:scale-105"
        style={{ backgroundColor: "red" }}>
        Red
        </button>
        <button
        onClick={() => setColor("green")}
        className="outline-none px-6 py-2 rounded-full text-white shadow-lg font-semibold transition-all duration-300 hover:scale-110 hover:shadow-3xl active:scale-105"
        style={{ backgroundColor: "green" }}>
        Green
        </button>
        <button
        onClick={() => setColor("blue")}
        className="outline-none px-6 py-2 rounded-full text-white shadow-lg font-semibold transition-all duration-300 hover:scale-110 hover:shadow-3xl active:scale-105"
        style={{ backgroundColor: "blue" }}>
        Blue
        </button>
        <button
        onClick={() => setColor("Cyan")}
        className="outline-none px-6 py-2 rounded-full text-white shadow-lg font-semibold transition-all duration-300 hover:scale-110 hover:shadow-3xl active:scale-105"
        style={{ backgroundColor: "Cyan" }}>
        Cyan
        </button>
        <button
        onClick={() => setColor("brown")}
        className="outline-none px-6 py-2 rounded-full text-white shadow-lg font-semibold transition-all duration-300 hover:scale-110 hover:shadow-3xl active:scale-105"
        style={{ backgroundColor: "brown" }}>
        Brown
        </button>
        <button
        onClick={() => setColor("yellow")}
        className="outline-none px-6 py-2 rounded-full text-white shadow-lg font-semibold transition-all duration-300 hover:scale-110 hover:shadow-3xl active:scale-105"
        style={{ backgroundColor: "yellow" }}>
        Yellow
        </button>
        <button
        onClick={() => setColor("orange")}
        className="outline-none px-6 py-2 rounded-full text-white shadow-lg font-semibold transition-all duration-300 hover:scale-110 hover:shadow-3xl active:scale-105"
        style={{ backgroundColor: "orange" }}>
        Orange
        </button>
        <button
        onClick={() => setColor("grey")}
        className="outline-none px-6 py-2 rounded-full text-white shadow-lg font-semibold transition-all duration-300 hover:scale-110 hover:shadow-3xl active:scale-105"
        style={{ backgroundColor: "grey" }}>
        Grey
        </button>
        <button
        onClick={() => setColor("purple")}
        className="outline-none px-6 py-2 rounded-full text-white shadow-lg font-semibold transition-all duration-300 hover:scale-110 hover:shadow-3xl active:scale-105"
        style={{ backgroundColor: "purple" }}>
        Purple
        </button>
        <button
        onClick={randomColor}
        className="outline-none px-6 py-2 rounded-full text-black bg-white shadow-lg font-semibold transition-all duration-300 hover:scale-110 active:scale-105">
        🎲 Random
        </button>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
