import { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)
  const CurrencyInfo = useCurrencyInfo(from)
  
  const options = Object.keys(CurrencyInfo)
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    const rate = CurrencyInfo[to]
    setConvertedAmount(amount * rate)
  } 

return (
  <div
    className="
      relative
      w-full
      h-screen
      overflow-hidden
      flex
      items-center
      justify-center
      bg-[#030712]
      px-4
    "
  >

    {/* Background Gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#111827]" />

    {/* Glow Effects */}
    <div className="absolute top-[-120px] left-[-100px] w-[350px] h-[350px] bg-cyan-500/20 rounded-full blur-3xl"></div>

    <div className="absolute bottom-[-120px] right-[-100px] w-[350px] h-[350px] bg-indigo-500/20 rounded-full blur-3xl"></div>

    {/* Main Card */}
    <div
      className="
        relative z-10
        w-full max-w-4xl
        rounded-[40px]
        border border-white/10
        bg-white/10
        backdrop-blur-2xl
        shadow-[0_10px_60px_rgba(0,0,0,0.5)]
        p-6 md:p-8
      "
    >

      {/* Header */}
      <div className="text-center mb-8">

        <h1
          className="
            text-4xl md:text-6xl
            font-black
            text-white
            tracking-tight
            leading-none
          "
        >
          Currency Converter
        </h1>

        <p
          className="
            mt-4
            text-slate-300
            tracking-[5px]
            uppercase
            text-xs md:text-sm
          "
        >
          Designed & Developed By Vishesh Khandal ✨
        </p>

      </div>

      {/* Converter Section */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}
      >

        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-5 items-center">

          {/* From */}
          <InputBox
            label="From"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setFrom(currency)}
            selectCurrency={from}
            onAmountChange={(amount) => setAmount(amount)}
          />

          {/* Swap */}
          <div className="flex justify-center">

            <button
              type="button"
              onClick={swap}
              className="
                w-16 h-16
                rounded-full
                bg-gradient-to-br
                from-cyan-400
                to-blue-600
                text-white
                text-2xl
                font-bold
                shadow-lg
                hover:scale-110
                transition-all duration-300
                active:scale-95
              "
            >
              ⇄
            </button>

          </div>

          {/* To */}
          <InputBox
            label="To"
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setTo(currency)}
            selectCurrency={to}
            amountDisable
          />

        </div>

        {/* Convert Button */}
        <button
          type="submit"
          className="
            mt-8
            w-full
            py-4
            rounded-2xl
            text-lg
            font-bold
            text-white
            bg-gradient-to-r
            from-cyan-500
            via-blue-600
            to-indigo-600
            hover:scale-[1.01]
            transition-all duration-300
            shadow-lg
            hover:shadow-cyan-500/30
          "
        >
          Convert {from.toUpperCase()} → {to.toUpperCase()}
        </button>

      </form>

      {/* Footer */}
      <div className="mt-6 text-center">

        <p className="text-slate-400 text-sm">
          Real-Time Exchange Rates 
        </p>

      </div>

    </div>

  </div>
)
}

export default App
