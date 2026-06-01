import react from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className  = "",
})
{ 
    return (
  <div
    className={`
      bg-white/10
      border border-white/10
      rounded-[28px]
      p-5
      backdrop-blur-xl
      shadow-lg
      hover:bg-white/15
      transition-all duration-300
      ${className}
    `}
  >

    {/* Top Labels */}
    <div className="flex justify-between items-center mb-4">

      <label
        className="
          text-slate-300
          text-sm
          font-medium
          tracking-wide
        "
      >
        {label}
      </label>

      <span
        className="
          text-slate-400
          text-xs
          uppercase
          tracking-[3px]
        "
      >
        Currency
      </span>

    </div>

    {/* Input + Select */}
    <div className="flex items-center gap-4">

      <input
        type="number"
        placeholder="0.00"
        disabled={amountDisable}
        value={amount}
        onChange={(e) =>
          onAmountChange &&
          onAmountChange(Number(e.target.value))
        }
        className="
          w-full
          bg-transparent
          outline-none
          text-white
          text-3xl
          font-bold
          placeholder:text-slate-500
        "
      />

      <select
        value={selectCurrency}
        onChange={(e) =>
          onCurrencyChange &&
          onCurrencyChange(e.target.value)
        }
        disabled={currencyDisable}
        className="
          px-4 py-3
          rounded-2xl
          bg-white/10
          border border-white/10
          text-white
          font-semibold
          outline-none
          cursor-pointer
          hover:bg-white/20
          transition-all duration-300
        "
      >

        {currencyOptions.map((currency) => (
          <option
            key={currency}
            value={currency}
            className="bg-slate-900"
          >
            {currency.toUpperCase()}
          </option>
        ))}

      </select>

    </div>

  </div>
)



}
export default InputBox;