import { Link } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Login = () => {
  const [isSignInform, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInform);
  };

  const validationSchema = Yup.object().shape({
    name: isSignInform ? Yup.string() : Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c7f07b68-7989-4ff7-a31e-11c17dcc2fea/fcf685b8-3f9f-42d8-9af3-4bb86fa5a3b8/IN-en-20240422-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="Netflix background" />
      </div>

      <Formik
        initialValues={{ name:'', email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          // Handle form submission here
          console.log(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="absolute p-12 bg-black bg-opacity-80 w-4/12 my-36 mx-auto right-0 left-0 text-white">
            <h2 className="font-bold py-4 text-3xl">
              {isSignInform ? "Sign In" : "Sign Up"}
            </h2>

            {!isSignInform && (
              <div>
                <Field type="text" name="name" placeholder="Name" className="p-2 my-2 w-full bg-gray-800" />
                <ErrorMessage name="name" component="div" className="text-red-500" />
              </div>
            )}

            <Field type="text" name="email" placeholder="Email Address" className="p-2 my-2 w-full bg-gray-800" />
            <ErrorMessage name="email" component="div" className="text-red-500" />

            <Field type="password" name="password" placeholder="Password" className="p-2 my-2 w-full bg-gray-800" />
            <ErrorMessage name="password" component="div" className="text-red-500" />

            <button className="p-2 my-4 bg-red-700 w-full font-bold rounded-lg" type="submit" disabled={isSubmitting}>
              {isSignInform ? "Sign In" : "Sign Up"}
            </button>
            <p className="py-2 cursor-pointer" onClick={toggleSignInForm}>
              <span>
                {isSignInform
                  ? "New to Netflix? Sign Up Now"
                  : "Already registered? Sign In Now"}
              </span>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
