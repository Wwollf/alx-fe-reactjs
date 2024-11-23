import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { mockRegisterUser } from '../api/mockApi';

const FormikForm = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Username is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: async (values, { setSubmitting, setErrors, resetForm }) => {
      try {
        const response = await mockRegisterUser(values);
        alert(response.message); // Show success message
        resetForm(); // Clear the form
      } catch (error) {
        setErrors({ general: error.message }); // Handle API errors
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.username && formik.errors.username && (
          <p style={{ color: 'red' }}>{formik.errors.username}</p>
        )}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email && (
          <p style={{ color: 'red' }}>{formik.errors.email}</p>
        )}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password && (
          <p style={{ color: 'red' }}>{formik.errors.password}</p>
        )}
      </div>
      {formik.errors.general && (
        <p style={{ color: 'red' }}>{formik.errors.general}</p>
      )}
      <button type="submit" disabled={formik.isSubmitting}>
        Register
      </button>
    </form>
  );
};

export default FormikForm;
