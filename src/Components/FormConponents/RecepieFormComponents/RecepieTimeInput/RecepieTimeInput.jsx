import { useState } from "react";
import "./RecepieTimeInput.css";
import NumberFormInput from "../../NumberFormInput/NumberFormInput";

const RecepieTimeInput = ({ name, label, ...props }) => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  return (
    <div className="recepie-time-input-container">
      <label className="recepie-intput-label">{label}</label>

      <NumberFormInput
        value={hours}
        setValue={setHours}
        unit="Hours"
        min={0}
        max={100}
      />

      <NumberFormInput
        value={minutes}
        setValue={setMinutes}
        unit="Minutes"
        min={0}
        max={60}
      />
    </div>
  );
};

export default RecepieTimeInput;
