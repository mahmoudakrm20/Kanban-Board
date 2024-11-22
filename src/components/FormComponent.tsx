import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { FormValues } from "./types";

interface FormComponentProps {
  onSubmit: (values: FormValues) => void;
}
const FormComponent: React.FC<FormComponentProps> = ({ onSubmit }) => {
  const initialValues: FormValues = {
    title: "",
    name: "",
    age: "",
    email: "",
    phone: "",
  };

  // a Yup Schema for Validation and regex

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    name: Yup.string().required("Name is required"),
    age: Yup.number()
      .typeError("Age must be a number")
      .positive("Age must be a positive number")
      .integer("Age must be an integer")
      .required("Age is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]+$/, "Phone must contain only numbers")
      .min(10, "Phone must be at least 10 digits")
      .required("Phone is required"),
  });

  const handleSubmit = (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    console.log("Form Data:", values);
    onSubmit(values); // Send data to the parent component
    resetForm(); // Reset after submission
  };

  return (
    <div className="flex flex-col text-black gap-4 m-8">
      <b>Form</b>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            {/* Title Field */}
            <div>
              <label className="text-black font-semibold" htmlFor="title">
                Title:
              </label>
              <Field
                type="text"
                id="title"
                name="title"
                className="ml-2 p-1 text-black border rounded-md w-full"
              />
              <ErrorMessage
                name="title"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            {/* Name Field */}
            <div>
              <label className="text-black font-semibold" htmlFor="name">
                Name:
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                className="ml-2 p-1 text-black border rounded-md w-full"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            {/* Age Field */}
            <div>
              <label className="text-black font-semibold" htmlFor="age">
                Age:
              </label>
              <Field
                type="text"
                id="age"
                name="age"
                className="ml-2 p-1 text-black border rounded-md w-full"
              />
              <ErrorMessage
                name="age"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            {/* Email Field */}
            <div>
              <label className="text-black font-semibold" htmlFor="email">
                Email:
              </label>
              <Field
                type="text"
                id="email"
                name="email"
                className="ml-2 p-1 text-black border rounded-md w-full"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            {/* Phone Field */}
            <div>
              <label className="text-black font-semibold" htmlFor="phone">
                Phone:
              </label>
              <Field
                type="text"
                id="phone"
                name="phone"
                className="ml-2 p-1 text-black border rounded-md w-full"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-gray-700 text-white p-2 rounded-md mt-4 "
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormComponent;
