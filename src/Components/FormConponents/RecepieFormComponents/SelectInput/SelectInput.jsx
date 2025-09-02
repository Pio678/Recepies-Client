import "./SelectInput.css";

const SelectInput = ({ label, options, placeholder }) => {
  const optionElements = options.map((option) => {
    return <option value={option}>{option}</option>;
  });

  return (
    <div className="recepie-time-input-container">
      <label className="recepie-intput-label">{label}</label>
      <select
        className="recepie-select"
        list="dificulities"
        placeholder="choose dificulity"
      >
        <option value="" disabled selected hidden>
          {placeholder}
        </option>
        {optionElements}
      </select>
    </div>
  );
};

export default SelectInput;
