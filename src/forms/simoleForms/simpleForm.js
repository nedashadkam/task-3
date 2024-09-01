import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

const schema = Yup.object({
    userName : Yup.string().required("کد ملی الزامی است").matches(/^\d{10}$/),
})

const SimpleForm = () => {
  return (
    <Formik
      initialValues={{
        userName: "",
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(values);
          setSubmitting(false);
        }, 5000);
      }}

      validationSchema={schema}

    //   validate={(values) => {
        // let errors = {};
        // if (!values.userName) {
        //   errors.userName = "enter your name";
        // }
        // return errors;
    //   }}
    >
      {({
        handleSubmit,
        handleChange,
        values,
        errors,
        handleBlur,
        touched,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.userName.replace(/\D/ , '')}
            type="text"
            name="userName"
            placeholder="Enter your name"
            // onKeyPress='return /[0-9]/i.test(event.key)'
          />
          <button disabled={isSubmitting} type="submit">
            submit
          </button>

          {/* <ErrorMessage name="userName" /> */}

          {errors.userName && (
            <div style={{ color: "red" }}>{errors.userName}</div>
          )}
        </form>
      )}
    </Formik>
  );
};

export default SimpleForm;
