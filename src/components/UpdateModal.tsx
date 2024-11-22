import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { MemberCard } from "./types";

interface UpdateModalProps {
  card: MemberCard;
  onClose: () => void;
  onUpdate: (values: MemberCard) => void;
}

const UpdateModal: React.FC<UpdateModalProps> = ({
  card,
  onClose,
  onUpdate,
}) => {
  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    name: Yup.string().required("Name is required"),
    age: Yup.number()
      .typeError("Age must be a number")
      .positive("Must be positive")
      .required("Age is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]+$/, "Phone must be numeric")
      .min(10, "Minimum 10 digits")
      .required("Phone is required"),
  });

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-5 rounded-md w-96">
        <h2 className="text-xl mb-4">Update Card</h2>
        <Formik
          initialValues={card}
          validationSchema={validationSchema}
          onSubmit={(values) => onUpdate(values)}
        >
          {({ isSubmitting }) => (
            <Form>
              <div>
                <label htmlFor="title">Title:</label>
                <Field
                  type="text"
                  id="title"
                  name="title"
                  className="block w-full p-1 border rounded-md"
                />
                <ErrorMessage
                  name="title"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <label htmlFor="name">Name:</label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="block w-full p-1 border rounded-md"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <label htmlFor="age">Age:</label>
                <Field
                  type="text"
                  id="age"
                  name="age"
                  className="block w-full p-1 border rounded-md"
                />
                <ErrorMessage
                  name="age"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <Field
                  type="text"
                  id="email"
                  name="email"
                  className="block w-full p-1 border rounded-md"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <label htmlFor="phone">Phone:</label>
                <Field
                  type="text"
                  id="phone"
                  name="phone"
                  className="block w-full p-1 border rounded-md"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="bg-gray-500 text-white p-2 rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-500 text-white p-2 rounded-md"
                >
                  Update
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default UpdateModal;
