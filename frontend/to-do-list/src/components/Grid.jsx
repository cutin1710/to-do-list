import React from 'react'
import styled from 'styled-components'
import { FaTrash, FaEdit } from 'react-icons/fa'
import axios from 'axios'


const Table = styled.table`
    width: 100%;
    max-width: 1400px;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    margin: 20px auto;
    word-break: break-all;
`;


const Thead = styled.thead``;
const Tr = styled.tr``;
const Th = styled.th`
    text-align: start;
    border-bottom: inset;
    padding-bottom: 5px;

    @media (max-width: 500px) {
        ${(props) => props.onlyweb && "display: none"}
    }
`;

const Tbody = styled.tbody``;

const Td = styled.td`
    padding-top: 15px;
    text-align: ${(props) => (props.alignCenter ? "center" : "start")};
    width: ${(props) => (props.width ? props.width : "auto")};
    cursor: ${(props) => (props.cursor ? props.cursor : '')}

    @media (max-width: 500px) {
        ${(props) => props.onlyWeb && "display: none"}
    }
`

const Grid = ({ tasks, setTasks, setOnEdit }) => {

    const handleEdit = (task) => {
        setOnEdit(task)
    }

    const handleDelete = async (id) => {
        await axios.delete('http://localhost:3001/' + id).then(({ data }) => {
            const newArray = tasks.filter((task) => task.id !== id)

            setTasks(newArray)
            console.log(data)
        }).catch(({ data }) => console.log(data))
    
        setOnEdit(null)
    }
    

    return (
        <Table>
            <Thead>
                <Tr>
                    <Th>Nome</Th>
                    <Th onlyweb>Tarefa</Th>
                    <Th></Th>
                    <Th></Th>
                </Tr>
            </Thead>
            <Tbody>
                {tasks.map((task, i) => {
                    return(
                    <Tr key={i}>
                        <Td width='30%'>{task.name}</Td>
                        <Td width='30%' onlyWeb>{task.task}</Td>
                        <Td alignCenter width='5%'><FaEdit cursor='pointer' onClick={() => handleEdit(task)}/></Td>
                        <Td alignCenter width='5%'><FaTrash cursor='pointer' onClick={() => handleDelete(task.id)}/></Td>
                    </Tr>
                    )
                })}
                {/* {console.log(tasks)} */}
            </Tbody>
        </Table>
    )

}

export default Grid