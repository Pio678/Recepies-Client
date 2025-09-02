import { FieldArray, Field } from "formik";
import removeIcon from "../../../../../assets/icons/trash1.png";
import { v4 as uuidv4 } from "uuid";

const IngredientsForm = ({ Ingredients, ListIndex }) => {
  const emptyIngredient = {
    Ingredient: "",
    Amount: "",
  };

  return (
    <FieldArray name={`IngredientLists[${ListIndex}].Ingredients`}>
      {({ push, remove }) => {
        const IngredientElements = Ingredients.map(
          (Ingredient, IngredientIndex) => {
            return (
              <div
                className="ingredient-input-row"
                //key={`Ingredient-${ListIndex}-${IngredientIndex}`}
                key={Ingredient.id}
              >
                <Field
                  className="ingredient-field"
                  name={`IngredientLists[${ListIndex}].Ingredients[${IngredientIndex}].Ingredient`}
                  value={Ingredient.Ingredient}
                  placeholder="chicken, flour etc"
                />
                <Field
                  className="ingredient-field ingredient-amount-field"
                  name={`IngredientLists[${ListIndex}].Ingredients[${IngredientIndex}].Amount`}
                  value={Ingredient.Amount}
                  placeholder="500g, cup etc."
                />

                <button
                  className="remove-ingredient-btn"
                  onClick={() => {
                    if (Ingredients.length > 1) {
                      remove(IngredientIndex);
                    }
                  }}
                >
                  <img className="remove-ingredient-icon" src={removeIcon} />
                </button>
              </div>
            );
          }
        );

        return (
          <div className="ingredient-list">
            <div className="ingredient-input-row">
              <h5 className="ingredient-field-label">Ingredient Name</h5>
              <h5 className="ingredient-field-label">Amount</h5>
            </div>
            {IngredientElements}
            <button
              className="add-ingredient-button"
              onClick={() => {
                push({ ...emptyIngredient, id: uuidv4() });
              }}
            >
              Add Ingredient
            </button>
          </div>
        );
      }}
    </FieldArray>
  );
};

export default IngredientsForm;
