import React from 'react'
import {Formik, Form, Field} from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { loginThunk } from '../../store/reducers/authReducer'
import { Navigate } from 'react-router-dom'

const LoginPage = () => {
    const {userId} = useSelector((state) => state.auth)

    if(userId) {
        localStorage.setItem('userId', userId)
    }
    
    const dispatch = useDispatch()

    const authorization = (body) => {
        dispatch(loginThunk(body))
    }

    if(localStorage.getItem('userId')){
        return <Navigate to={`/profile/${localStorage.getItem('userId')}`}/>
    }
  return (
    <div>
        <Formik
            initialValues={{
                email : "",
                password: ""
            }}
            onSubmit={(values) => authorization(values)}
        >
            <Form>
                <Field name='email' placeholder='email'/>
                <Field name='password' placeholder='password'/>
                <button type='submit'>Login</button>
            </Form>
        </Formik>
    </div>
  )
}

export default LoginPage