import { Box } from '@chakra-ui/react';
import React from 'react';

const Login = () => {
  return (
    <Box>
        <form>
            <label htmlFor="">
                Enter UserName : 
                <input type="text" placeholder='Enter UserName'/>
            </label>
            <label htmlFor="">
                Enter Email id : 
                <input type="text" placeholder='Enter Email id'/>
            </label>
            <label htmlFor="">
                Enter Password : 
                <input type="text" placeholder='Enter Password'/>
            </label>
            <label htmlFor="">
                Enter Confirm Password : 
                <input type="text" placeholder='Enter Confirm Password'/>
            </label>
        </form>
    </Box>
  )
}

export default Login;