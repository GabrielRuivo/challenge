import React from 'react';
import { ErrorMessage, Formik, Form as FormikForm, Field } from 'formik';
import { Container, BoxForm, Row, ProfileInformation, AddressInformation, RowButtons, Voltar, Salvar, Deletar } from './style';
import { useParams, useHistory } from "react-router-dom";
import { api } from '../../services/api';
import Header from '../../components/Header/Header';
import { toast } from 'react-toastify';
import { Spinner } from 'react-bootstrap';

const StudentInformations = () => {
    let { id } = useParams();
    const history = useHistory();

    const auth = JSON.parse(localStorage.getItem('@token'));
    const header = { headers: {'Authorization': `Bearer ${auth.token.token}` }}

    const [ studentInfo, setStudentInfo ] = React.useState([]);
    const [ loading, setLoading ] = React.useState(false);


    React.useEffect(() => {
        api.get('/students', header).then(response => {
            const students = response.data;
            const studant = students.filter(item => item.id === +id)
            setStudentInfo(studant);

        })
    },[]);

    function backPage() {
        history.push('/registered-students');
    }

    async function handleSubmit(values) {

        try {
            await api.put(`/students/${id}`, values, header)
            toast.success('Alterações salvas com sucesso !')
            setTimeout(() => {
                history.push('/registered-students');
            }, 4000)
        } catch (err) {
            toast.error('Erro ao salvar alterações.', err)
        }
    }

    async function handleDeleteStudent() {
        try {
            await api.delete(`/students/${id}`, header )
            toast.success('Aluno(a) deletado com sucesso !')
            setTimeout(() => {
                history.push('/registered-students');
            }, 4000)

        } catch {
            toast.error('Algo deu errado com a deleção.')
        }
    }

    return (
        <>
        <Header username={auth.username} />
            {studentInfo.length > 0 && 
                <Container>
                    <BoxForm>
                    <h1>Editar Informações do aluno</h1>
                    <Formik initialValues={studentInfo[0]} onSubmit={handleSubmit} >
                        <FormikForm style={styles.form} >
                                
                            <ProfileInformation>
                                <h3>Profile Information</h3>
                                <Row>
                                    <div>
                                        <label htmlFor="id" >ID<span style={styles.obrigatory}>*</span></label>
                                        <Field style={styles.divInput} name="id" type="text" value={studentInfo[0].id} disabled />
                                    </div>
        
                                    <div>
                                        <label htmlFor="name" >Nome<span style={styles.obrigatory}>*</span></label>
                                        <Field style={styles.divInput} name="name" type="text" />
                                    </div>
        
                                    <div>
                                        <label htmlFor="registration_number" >Número de registro<span style={styles.obrigatory}>*</span></label>
                                        <Field style={styles.divInput} name="registration_number" type="number" />
                                    </div>
                                </Row>
        
                                <Row>
                                    <div>
                                        <label htmlFor="name" >Série<span style={styles.obrigatory}>*</span></label>
                                        <Field style={styles.divInput} name="serie" type="text" />
                                    </div>
        
                                    <div>
                                        <label htmlFor="name" >Idade<span style={styles.obrigatory}>*</span></label>
                                        <Field style={styles.divInput} name="age" type="number" value={studentInfo[0].age} />
                                    </div>
        
                                    <div>
                                        <label htmlFor="name" >CPF<span style={styles.obrigatory}>*</span></label>
                                        <Field style={styles.divInput} name="cpf" type="text" value={studentInfo[0].cpf} />
                                    </div>
                                </Row>
                                <Row>
                                    <div>
                                        <label htmlFor="grade" >Média Geral</label>
                                        <Field style={styles.divInput} name="grade" type="number" />
                                    </div>
                                </Row>
                                <hr/>
                            </ProfileInformation>
                            
                            <AddressInformation>
                                <h3>Address Information</h3>
                                <Row>
                                    <div>
                                        <label htmlFor="street" >Rua<span style={styles.obrigatory}>*</span></label>
                                        <Field style={styles.divInput} name="street" type="text" value={studentInfo[0].addresses[0].street} />
                                    </div>
        
                                    <div>
                                        <label htmlFor="number" >Número<span style={styles.obrigatory}>*</span></label>
                                        <Field style={styles.divInput} name="number" type="text" value={studentInfo[0].addresses[0].number} />
                                    </div>
        
                                    <div>
                                        <label htmlFor="district" >Bairro<span style={styles.obrigatory}>*</span></label>
                                        <Field style={styles.divInput} name="district" type="text" value={studentInfo[0].addresses[0].district} />
                                    </div>
                                </Row>
                                <Row>
                                    <div>
                                        <label htmlFor="city" >Cidade<span style={styles.obrigatory}>*</span></label>
                                        <Field style={styles.divInput} name="telepcityhone" type="text" value={studentInfo[0].addresses[0].city} />
                                    </div>
        
                                    <div>
                                        <label htmlFor="uf" >UF<span style={styles.obrigatory}>*</span></label>
                                        <Field style={styles.divInput} name="uf" type="text" value={studentInfo[0].addresses[0].state} />
                                    </div>
                                </Row>
                            </AddressInformation>
                            <RowButtons>
                                <Deletar onClick={handleDeleteStudent} >Deletar aluno</Deletar>
                                <Voltar onClick={backPage} >Voltar</Voltar>
                                <Salvar type="submit" >Salvar Alterações</Salvar>
                            </RowButtons>
                            </FormikForm>
                            </Formik>

                            
                    </BoxForm>
                </Container>
            } 
        </>
    );
}

const styles = { 
    obrigatory: {
        color: 'red',
    },
    divInput: {
        width: '16rem',
        height: '3rem',
        border: 'none',
        border: '1px solid #ccc',
        borderRadius: '6px',
        padding: '1rem'
    },
    form: {
        width: '100%',
    }
}

export default StudentInformations;
