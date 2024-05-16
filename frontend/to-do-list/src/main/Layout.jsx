import React from 'react'
import './Layout.css'
import { toast, ToastContainer } from 'react-toastify'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import Form from '../components/Form'
import Grid from '../components/Grid'

const Container = styled.div `
    width: 100%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

const H1 = styled.h1`
    font-size: 36px;
    font-weight: 500;
`;

function Layout() {
    const [tasks, setTasks] = useState([])
    const [onEdit, setOnEdit] = useState(null)

    const getTasks = async () => {
        try {
            const res = await axios.get('http://localhost:3001')
            setTasks(res.data)
            console.log(res.data)
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getTasks();
    }, [setTasks])

    return (
        <div>
            <Container>
                {/* <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} /> */}
                <H1>Gerenciador de tarefas</H1>
                <Form onEdit={onEdit} setOnEdit={setOnEdit} getTasks={getTasks}/>
                <Grid tasks={tasks} setTasks={setTasks} setOnEdit={setOnEdit}/>
            </Container>
        </div>
    )
}


export default Layout