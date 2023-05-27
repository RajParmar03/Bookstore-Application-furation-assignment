import { Box } from '@chakra-ui/react';
import React from 'react';
import { useFormik } from 'formik';
import { loginSchema } from '../schemas/loginSchema';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/userManager/userManager.action';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const initialValues = {
        username: "",
        password: "",
    }

    const { values, errors, handleBlur, touched, handleSubmit, handleChange } = useFormik({
        initialValues: initialValues,
        validationSchema: loginSchema,
        onSubmit: (values, action) => {
            dispatch(loginUser(values)).then((res) => {
                // console.log("this is res from onSubmit in login : " , res);
                if(res.isSuccess){
                    alert("Success");
                    navigate("/");
                  }else{
                    alert("failure");
                  }
                  action.resetForm();
            });
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
                    <label htmlFor="password">password</label>
                    <input type="text" name="password" id="password" placeholder="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
                    {errors.password && touched.password ? <p>{errors.password}</p> : null}
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </Box>
    )
}

export default Login;