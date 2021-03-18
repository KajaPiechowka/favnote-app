import React from 'react';
import {Formik,Form,Field} from 'formik';
 
const Login = () =>(
    <div>
        <Formik nitialValues={{username:'',password:''}}
        onSubmit={}
         >
         {()=>(
             <Field name="username" type="email"/>
             <Field name="password" type="password"/>
             <button type="submit">sing in</button>
         )}
         </Formik>
    </div>
)

export default Login;