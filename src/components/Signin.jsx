import React from "react";
import { Formik } from "formik";

import SigninForm from "./SigninForm";

const initialValues = {
  username: "",
  password: "",
};

const Signin = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SigninForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default Signin;
