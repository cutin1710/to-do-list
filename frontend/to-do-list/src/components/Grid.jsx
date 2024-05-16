import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

import { FaTrash, FaEdit } from 'react-icons/fa'
import { toast } from 'react-toastify'

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

    @media (max-width: 500px) {
        ${(props) => props.onlyWeb && "display: none"}
    }
`

const Grid = ({ tasks }) => {
    

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
                    <Tr key={i}>
                        <Td width='30%'>{task.name}</Td>
                        <Td width='30%' onlyWeb>{task.task}</Td>
                        <Td alignCenter width='5%'><FaEdit /></Td>
                        <Td alignCenter width='5%'><FaTrash onClick={() => handleDelete(item.id)}/></Td>
                    </Tr>
                })}
            </Tbody>
        </Table>
    )

}

export default Grid