import React from 'react'
import './Layout.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import Axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import { useState, useEffect } from 'react'

function Layout() {

    const [taskName, setTaskName] = useState('')
    const [taskContent, setTaskContent] = useState('')

    const handleSubmit = (values) => {
        Axios.post('http://localhost:3001/to-do-list', {
            name: values.taskName,
            content: values.taskContent
        }).then((res) => {
            console.log(res)
        })
    }

    const validation = yup.object().shape({
        taskName: yup
        .string()
        .required("Digite o nome da tarefa"),

        taskContent: yup
        .string()
        .required("Digite uma tarefa")
    })

    return (
        <div>
            <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
            <h1>Gerenciador de tarefas</h1>
            <Formik initialValues={{}} onSubmit={handleSubmit} validationSchema={validation}>
                <Form>
                    <div className='login-form-group'>
                        <Field name='taskName' type='text' className='form-field' placeholder='nome da tarefa' />
                        <ErrorMessage component='span' name='taskName' className='form-error' />
                    </div>

                    <div className='login-form-group'>
                        <Field name='taskContent' type='text' className='form-field' placeholder='tarefa' />
                        <ErrorMessage component='span' name='taskContent' className='form-error' />
                    </div>

                    <button className='button' type='submit'>Adicionar</button>
                </Form>
            </Formik>
        </div>
    )
}


export default Layout