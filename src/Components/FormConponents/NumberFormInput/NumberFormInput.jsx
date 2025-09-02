import "./NumberFormInput.css";

const NumberFormInput = ({ value, setValue, unit, name, min, max }) => {
  return (
    <div className="number-input-outer-container">
      <div className="number-input-inner-container">
        <button
          className="number-input-button"
          onClick={() => {
            if (value > min) setValue(Number(value) - 1);
          }}
        >
          -
        </button>
        <input
          className="number-input"
          type="number"
          name={name}
          min="0"
          max="100"
          placeholder="0"
          value={String(value)}
          onChange={(e) => {
            setValue(Number(e.target.value));
          }}
        />

        <button
          className="number-input-button"
          onClick={() => {
            if (value < max) {
              setValue(Number(value) + 1);
            }
          }}
        >
          +
        </button>
      </div>
      <p className="unit"> {unit}</p>
    </div>
  );
};

export default NumberFormInput;
