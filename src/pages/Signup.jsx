import { Box } from '@chakra-ui/react';
import React from 'react';
import { useFormik } from 'formik';
import { signupSchema } from '../schemas/signupSchema';
import { useNavigate } from 'react-router-dom';

const baseUrl = "http://localhost:8080";

const SignUpUser = async (userDetails) => {
  // console.log("this is from signupuser : " , userDetails);
  const responce = await fetch(`${baseUrl}/users/signup` , {
    method : "POST",
    headers : {
      "Content-Type" : "application/json",
    },
    body : JSON.stringify(userDetails),
  });
  const res = await responce.json();
  return res;
}

const Signup = () => {

  const initialValues = {
    username : "",
    email : "",
    password : "",
    confirm_password : ""
  }

  const navigate = useNavigate();

  const {values , errors , handleBlur ,  touched , handleSubmit , handleChange } = useFormik({
    initialValues : initialValues,
    validationSchema : signupSchema,
    onSubmit : (values ,  action) => {
      SignUpUser(values).then((res) => {
        // console.log("this is from sinupuser then : " , res);
        if(res.isSuccess){
          alert("Success");
          navigate("/login");
        }else{
          alert("failure");
        }
        action.resetForm();
      });
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