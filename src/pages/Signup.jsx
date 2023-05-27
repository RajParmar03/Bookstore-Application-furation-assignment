import { Box } from '@chakra-ui/react';
import React from 'react';
import { useFormik } from 'formik';
import { signupSchema } from '../schemas/signupSchema';

const Signup = () => {

  const initialValues = {
    username : "",
    email : "",
    password : "",
    confirm_password : ""
  }

  const {values , errors , handleBlur ,  touched , handleSubmit , handleChange } = useFormik({
    initialValues : initialValues,
    validationSchema : signupSchema,
    onSubmit : (values ,  action) => {
      console.log("this is from onSubmit method and values is : " , values);
      action.resetForm();
    },
  });

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">username</label>
          <input type="text" name="username" id="username" placeholder="username" value={values.username} onChange={handleChange} onBlur={handleBlur} />
          {errors.username && touched.username ? <p>{errors.username}</p> : null}
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input type="text" name="email" id="email" placeholder="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
          {errors.email && touched.email ? <p>{errors.email}</p> : null}
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input type="text" name="password" id="password" placeholder="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
          {errors.password && touched.password ? <p>{errors.password}</p> : null}
        </div>
        <div>
          <label htmlFor="confirm_password">confirm_password</label>
          <input type="text" name="confirm_password" id="confirm_password" placeholder="confirm_password" value={values.confirm_password} onChange={handleChange} onBlur={handleBlur} />
          {errors.confirm_password && touched.confirm_password ? <p>{errors.confirm_password}</p> : null}
        </div>
        <div>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </Box>
  )
}

export default Signup;