import { useNavigate } from "react-router-dom";
import recepieSchema from "../../ValidationSchemas/recepieSchema";

import "./RecepieForm.css";

import { Formik, Form, FieldArray, Field } from "formik";
import RecepieFormInput from "../FormConponents/RecepieFormComponents/RecepieFormInput/RecepieFormInput";
import RecepieImgInput from "../FormConponents/RecepieFormComponents/RecepieImgInput/RecepieImgInput";
import IngredientListsForm from "../FormConponents/RecepieFormComponents/Ingredients/IngredientListsForm/IngredientListsForm";
import InstructionListsForm from "../FormConponents/RecepieFormComponents/Instructions/InstructionListsForm/InstructionListsForm";
import RecepieTimeInput from "../FormConponents/RecepieFormComponents/RecepieTimeInput/RecepieTimeInput";
import NumberFormInput from "../FormConponents/NumberFormInput/NumberFormInput";
import SelectInput from "../FormConponents/RecepieFormComponents/SelectInput/SelectInput";
import { useState } from "react";
import IngredientsForm from "../FormConponents/RecepieFormComponents/Ingredients/IngredientsForm/IngredientsForm";

const RecepieForm = () => {
  const [portions, setPortions] = useState(0);

  const navigate = useNavigate();

  const handleCreateRecepie = async (e) => {
    e.preventDefaut();
  };

  const initalValues = {
    title: "",
    description: "",
    prepTime: { Hours: 0, Minutes: 0 },
    cookTime: { Hours: 0, Minutes: 0 },
    NumberOfServings: 0,
    Dificulity: "",
    IngredientLists: [
      {
        title: "",
        Ingredients: [
          {
            id: "",
            Ingredient: "",
            Amount: "",
          },
        ],
      },
    ],
    InstructionLists: [
      {
        title: "",
        InstructionSteps: [
          {
            StepContent: "",
            StepNumber: 1,
          },
        ],
      },
    ],
  };

  return (
    <div className="recepie-form-page">
      <Formik
        initialValues={initalValues}
        validationSchema={recepieSchema}
        onSubmit={handleCreateRecepie}
      >
        {(props) => (
          <Form className="recepie-form">
            <h1 className="form-title">New Recepie</h1>
            <div className="form-description">
              Create your own recepies and share it with others!
            </div>
            {/* <RecepieImgInput name="Image" label="Click here to add an image" /> */}
            <RecepieFormInput
              type="text"
              name="title"
              label="Recepie Name"
              placeholder="The best pizza in the world"
            />
            <RecepieFormInput
              type="textarea"
              name="description"
              label="Description"
              placeholder="I Learned this recepie last year in italy"
            />
            <div className="time-input-section">
              <RecepieTimeInput name="prepTime" label="Preperation Time" />
              <RecepieTimeInput name="cookTime" label="Cooking Time" />
            </div>
            <div className="recepie-time-input-container">
              <label className="recepie-intput-label">Number of portions</label>

              <NumberFormInput
                unit="Portions"
                value={portions}
                setValue={setPortions}
                min={0}
                max={100}
              />
            </div>

            <SelectInput
              label={"Dificulity"}
              options={["Easy", "Medium", "Hard"]}
              placeholder={"Choose the dificulity"}
            />

            <IngredientListsForm
              IngredientLists={props.values.IngredientLists}
            />

            <InstructionListsForm
              InstructionLists={props.values.InstructionLists}
            />

            <button
              className="submit-recepie-btn"
              type="submit"
              onClick={() => {}}
            >
              Create Recepie
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RecepieForm;
