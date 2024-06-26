import React, { useRef } from 'react'
import './Form.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { useState, useEffect } from 'react'
import styled from 'styled-components'



export default ({ onEdit }) => {

    // useEffect(() => {
    //     if(onEdit) {
    //         const task = ref.current

    //         task.name.value = onEdit.name
    //         task.task.value = onEdit.task
    //     }
    // }, [onEdit])

    const [name, setName] = useState('')
    const [task, setTask] = useState('')

    const handleSubmit = async (values) => {
        axios.post('http://localhost:3001/to-do-list', {
            name: values.name,
            task: values.task
        }).then((res) => {
            console.log(res)
        })
    }

    // const validation = yup.object().shape({
    //     name: yup
    //     .string()
    //     .required("Digite o nome da tarefa"),

    //     task: yup
    //     .string()
    //     .required("Digite uma tarefa")
    // })

    return (
        <Formik initialValues={{}} onSubmit={handleSubmit} >
            <Form>
                <div className='login-form-group'>
                    <Field name='name' type='text' className='form-field' placeholder='nome da tarefa' />
                    <ErrorMessage component='span' name='name' className='form-error' />
                </div>

                <div className='login-form-group'>
                    <Field name='task' type='text' className='form-field' placeholder='tarefa' />
                    <ErrorMessage component='span' name='task' className='form-error' />
                </div>

                <button className='button' type='submit'>Adicionar</button>
            </Form>
        </Formik>
    )
}