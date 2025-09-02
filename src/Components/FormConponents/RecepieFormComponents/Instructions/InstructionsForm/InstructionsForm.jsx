import { Field, FieldArray } from "formik";
import { v4 as uuidv4 } from "uuid";
import removeIcon from "../../../../../assets/icons/trash1.png";
import "../../Ingredients/IngredientListsForm/IngredientsListsForm.css";

const InstructionsForm = ({ Instructions, ListIndex }) => {
  const emptyInstruction = {
    StepContent: "",
    StepNumber: 1,
  };

  return (
    <FieldArray name={`InstructionLists[${ListIndex}].InstructionSteps`}>
      {({ push, remove }) => {
        const InstructionElements = Instructions.map(
          (Instruction, InstructionIndex) => {
            return (
              <div className="instruction-input-row" key={Instruction.id}>
                <div className="instruction-step-nr">
                  Step {InstructionIndex + 1}
                </div>
                <Field
                  className="instruction-field"
                  name={`InstructionLists[${ListIndex}].InstructionSteps[${InstructionIndex}].content`}
                  value={Instruction.content}
                  placeholder="chop the onion"
                ></Field>
                <button
                  className="remove-instruction-btn"
                  onClick={() => {
                    if (Instructions.length > 1) remove(InstructionIndex);
                  }}
                >
                  <img className="remove-instruction-icon" src={removeIcon} />
                </button>
              </div>
            );
          }
        );

        return (
          <div className="instruction-list">
            <div className="instruction-input-row">
              {/* <h5 className="instruction-field-label instruction-step-nr">
                Step Nr
              </h5>
              <h5 className="instruction-field-label">Instruction</h5> */}
            </div>
            {InstructionElements}

            <button
              className="add-instruction-button"
              onClick={() => {
                push({ ...emptyInstruction, id: uuidv4() });
              }}
            >
              +Add Instruction
            </button>
          </div>
        );
      }}
    </FieldArray>
  );
};

export default InstructionsForm;
