import { useState, useCallback, useEffect, useRef} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(5)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setpassword] = useState("")

 const passwordref = useRef(null)
  const passwordGenrator = useCallback(() => {
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" 
      if(numberAllowed) str += "0123456789"
      if(charAllowed) str +=  "!@#$%^&*()_+-={}[]|:;<>,.?/~`"
      for (let i = 0; i < length; i++) {
          let char = Math.floor(Math.random() * str.length)
          pass += str.charAt(char)     
      }
      setpassword(pass)
      
  }, [length,numberAllowed,charAllowed,setpassword])
  const Copypasswordtoclipboard = useCallback(()=>{
    passwordref.current.select();
    window.navigator.clipboard.writeText(password)
  }, [password])
  useEffect(() => {passwordGenrator()}, [length,numberAllowed,charAllowed,passwordGenrator])

return (
  <>
    <div className="w-full h-screen overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#020617] flex justify-center items-start pt-6 px-4">

      {/* Main Card */}
      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-2xl rounded-[30px] shadow-[0_8px_32px_rgba(0,0,0,0.37)] border border-white/20 p-6 md:p-8 transition-all duration-500">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl text-center text-white font-black tracking-wide drop-shadow-2xl">
          Password Generator
        </h1>

        {/* Creator */}
        <p className="text-center text-slate-300 mt-2 text-base tracking-widest font-medium">
          Crafted By Vishesh Khandal ✨
        </p>

        {/* Divider */}
        <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mt-4 mb-6"></div>

        {/* Password Input */}
        <div className="flex shadow-2xl rounded-2xl overflow-hidden mb-6 border border-white/10">

          <input
            type="text"
            value={password}
            ref={passwordref}
            className="outline-none w-full py-4 px-5 text-lg bg-white/90 text-black font-semibold placeholder:text-slate-500"
            placeholder="Password"
            readOnly
          />

          <button
            onClick={Copypasswordtoclipboard}
            className="
              bg-gradient-to-r from-cyan-500 to-blue-600
              hover:from-cyan-400 hover:to-blue-500
              transition-all duration-300
              text-white px-8 font-bold
              hover:scale-105 active:scale-95
            "
          >
            Copy
          </button>

        </div>

        {/* Controls */}
        <div className="flex flex-col gap-5 text-white">

          {/* Length Slider */}
          <div className="bg-white/5 rounded-2xl p-4 border border-white/10">

            <div className="flex items-center gap-4">

              <input
                type="range"
                min={6}
                max={100}
                value={length}
                className="cursor-pointer w-full accent-cyan-400"
                onChange={(e) => {
                  setLength(Number(e.target.value))
                }}
              />

              <label className="text-lg font-bold min-w-fit text-cyan-300">
                {length}
              </label>

            </div>

            <p className="mt-2 text-slate-300">
              Password Length
            </p>

          </div>

          {/* Checkboxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Numbers */}
            <div className="flex items-center justify-between bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">

              <label
                htmlFor="numberInput"
                className="text-lg font-semibold cursor-pointer"
              >
                Include Numbers
              </label>

              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                className="w-6 h-6 accent-cyan-400 cursor-pointer"
                onChange={() => {
                  setnumberAllowed((prev) => !prev);
                }}
              />
            </div>

            {/* Characters */}
            <div className="flex items-center justify-between bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">

              <label
                htmlFor="charInput"
                className="text-lg font-semibold cursor-pointer"
              >
                Special Characters
              </label>

              <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="charInput"
                className="w-6 h-6 accent-cyan-400 cursor-pointer"
                onChange={() => {
                  setcharAllowed((prev) => !prev);
                }}
              />

            </div>

          </div>

        </div>

      </div>

    </div>
  </>
)
}
export default App
