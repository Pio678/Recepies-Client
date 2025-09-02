import { FieldArray, Field } from "formik";

import IngredientsForm from "../IngredientsForm/IngredientsForm.jsx";
import "./IngredientsListsForm.css";
import removeIcon from "../../../../../assets/icons/trash1.png";

const IngredientListsForm = ({ IngredientLists }) => {
  const emptyIngredientList = {
    title: "",
    Ingredients: [
      {
        Ingredient: "",
        Amount: "",
      },
    ],
  };

  const emptyIngredient = {
    Ingredient: "",
    Amount: "",
  };

  const ListTitleElement = (IngredientList, ListIndex, remove) => {
    return (
      <div className="form-list-name-container">
        <h5>Ingredient List Title</h5>
        <Field
          name={`IngredientLists[${ListIndex}].title`}
          value={IngredientList.title}
          placeholder="dough, filling etc."
          className="ingredient-list-title-input"
        />
        <button
          className="remove-list-btn"
          onClick={() => {
            remove(ListIndex);
          }}
        >
          <div>Remove List</div>
        </button>
      </div>
    );
  };

  return (
    <FieldArray name="IngredientLists">
      {({ push, remove }) => {
        const IngredientListsElements = IngredientLists.map(
          (currIngredientList, currListIndex) => {
            return (
              <div
                className="ingredient-list-container"
                key={`ingredient-list${currListIndex}`}
              >
                {IngredientLists.length > 1
                  ? ListTitleElement(currIngredientList, currListIndex, remove)
                  : ""}

                <IngredientsForm
                  Ingredients={currIngredientList.Ingredients}
                  ListIndex={currListIndex}
                />
              </div>
            );
          }
        );

        return (
          <div className="recepie-list-out-container">
            <label className="recepie-intput-label">Ingredients Lists</label>
            <button
              className="ingredient-list-form-button"
              onClick={() => {
                push(emptyIngredientList);
              }}
            >
              + Add list
            </button>
            {IngredientListsElements}
          </div>
        );
      }}
    </FieldArray>
  );
};

export default IngredientListsForm;
