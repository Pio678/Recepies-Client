import { Field, FieldArray } from "formik";
import InstructionsForm from "../InstructionsForm/InstructionsForm";
import { v4 as uuidv4 } from "uuid";
import "../../Ingredients/IngredientListsForm/IngredientsListsForm.css";
const InstructionListsForm = ({ InstructionLists }) => {
  const emptyInstructionList = {
    title: "",
    InstructionSteps: [
      {
        StepContent: "",
        StepNumber: "",
      },
    ],
  };

  const emptyInstruction = {
    StepContent: "",
    StepNumber: 1,
  };

  const ListTitleElement = (InstructionList, ListIndex, remove) => {
    return (
      <div className="form-list-name-container">
        <h5>Instruction List Title</h5>
        <Field
          name={`InstructionLists[${ListIndex}].title`}
          value={InstructionList.title}
          placeholder="dough, filling etc."
          className="instruction-list-title-input"
        />
        <button
          className="remove-list-btn"
          onClick={() => {
            remove(ListIndex);
          }}
        >
          Remove List
        </button>
      </div>
    );
  };

  return (
    <FieldArray name="InstructionLists">
      {({ push, remove }) => {
        const InstructionListsElements = InstructionLists.map(
          (currInstructionList, currListIndex) => {
            return (
              <div
                className="instruction-list-container"
                key={"instruction-list${currListIndex}"}
              >
                {InstructionLists.length > 1
                  ? ListTitleElement(currInstructionList, currListIndex, remove)
                  : ""}

                <InstructionsForm
                  Instructions={currInstructionList.InstructionSteps}
                  ListIndex={currListIndex}
                />
              </div>
            );
          }
        );

        return (
          <div className="recepie-list-out-container">
            <label className="recepie-intput-label">Instruction Lists</label>
            <button
              className="instruction-list-form-button"
              onClick={() => {
                push({ ...emptyInstructionList, id: uuidv4() });
              }}
            >
              + Add List
            </button>
            {InstructionListsElements}
          </div>
        );
      }}
    </FieldArray>
  );
};

export default InstructionListsForm;
