import * as Yup from "yup";

const recepieSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, "Recepie name must be at least 3 characters")
    .max(40, "Recepie must not be longer than 40 characters")
    .required("Recepie name is requred"),

  description: Yup.string().max(
    500,
    "Description must not be longer than 500 characters"
  ),

  numberOfServings: Yup.number()
    .min(1, "Number of servings must be at least 1")
    .max(100, "Number of servings must not be greater than 100")
    .integer("Number of servings must be an integer")
    .required("Number of servings is required"),

  prepTime: Yup.object().shape({
    Hours: Yup.number()
      .positive("Preperation time can't be negative")
      .max(100, "Preperation time is too long")
      .integer("Preperation time must be an integer"),

    Minutes: Yup.number()
      .positive("Preperation time can't be negative")
      .max(10000, "Preperation time is too long")
      .integer("Preperation time must be an integer"),
  }),

  prepTime: Yup.object().shape({
    Hours: Yup.number()
      .positive("Preperation time can't be negative")
      .max(100, "Preperation time is too long")
      .integer("Preperation time must be an integer"),

    Minutes: Yup.number()
      .positive("Preperation time can't be negative")
      .max(10000, "Preperation time is too long")
      .integer("Preperation time must be an integer"),
  }),

  IngredientLists: Yup.array().of(
    Yup.object().shape({
      title: Yup.string()
        .min(3, "title must be at least 3 characters")
        .max(20, "title must be under 20 characters"),

      Ingredients: Yup.array()
        .of(
          Yup.string()
            .min(6, "Ingredient must be at least 6 characters")
            .max(30, "Ingredient must be shorter than 30 characters")
            .required("Ingredient list must have ingredients")
        )
        .required(),
    })
  ),

  InstructionLists: Yup.array()
    .of(
      Yup.object()
        .shape({
          title: Yup.string()
            .min(3, "title must be at least 3 characters")
            .max(20, "title can't be over 20 characters"),

          InstructionSteps: Yup.array()
            .of(
              Yup.object()
                .shape({
                  StepNumber: Yup.number().positive().required,
                  StepContent: Yup.string().max(
                    100,
                    "Step cant be longer than 100 characters"
                  ).required,
                })
                .required()
            )
            .required(),
        })
        .required()
    )
    .required(),
});

export default recepieSchema;
