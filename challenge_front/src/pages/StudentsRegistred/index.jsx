import React from 'react';

import { Formik, Form as FormikForm, Field } from 'formik';
import { Container, BoxForm, Tr, RowButtons, Voltar } from './style';
import { api } from '../../services/api';
import { Table } from 'reactstrap';
import Header from '../../components/Header/Header';
import 'bootstrap/dist/css/bootstrap.css';

import { useHistory } from "react-router-dom";

const StudentsRegistrations = () => {
    const [loading, setLoading] = React.useState([]);
    const [students, setStudents] = React.useState([]);
    const auth = JSON.parse(localStorage.getItem('@token'));
    const header = { headers: {'Authorization': `Bearer ${auth.token.token}` }}

    let history = useHistory();
    

    React.useEffect(() => {
        setLoading(true);
        api.get('/students', header ).then(response => {
            setLoading(false);
            setStudents(response.data);
            console.log(response.data);
        })
    },[]);

    function backPage() {
        history.push('/dashboard');
    }

    function listStudentInformation(id) {
        const studentInfo = students.filter(item => item.id === +id);
        console.log('ALUNO SELECIONADO: ', studentInfo[0]);

        history.push(`/student-informations/${id}`)
    }

    return (
        <>
        <Header username={auth.username} />
            <Container>
                <BoxForm>
                    <Table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>NOME</th>
                                <th>Número de registro</th>
                                <th>Série</th>
                                <th>Gênero</th>
                                <th>Média</th>
                                <th>Aprovado/Reprovado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map(item =>
                            <Tr key={item.id} onClick={() => listStudentInformation(item.id)} >
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.registration_number}</td>
                                <td>{item.serie}</td>
                                <td>{item.gender}</td>
                                <td>{item.grade === null ? 'Pendente' : <strong>{item.grade}</strong>}</td>
                                <td>{item.grade > 5 ? <strong style={{ color: 'green' }}>Aprovado</strong> : item.grade <= 5 && item.grade >= 0 && item.grade !== null ? <strong style={{ color: 'red' }}>Reprovado</strong> : item.grade === null ? <strong style={{ color: 'black' }}>Pendente</strong> : ''} </td>
                            </Tr>
                            )}
                        </tbody>
                    </Table>
                    <RowButtons>
                        <Voltar onClick={backPage} >Voltar</Voltar>
                    </RowButtons>
                </BoxForm>
            </Container>
        </>
    );
}

const styles = {
}

export default StudentsRegistrations;
