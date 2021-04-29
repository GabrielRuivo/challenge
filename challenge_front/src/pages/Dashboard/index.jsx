import React from 'react';
import * as yup from 'yup';

import { ErrorMessage, Formik, Form as FormikForm, Field } from 'formik';
import { Container, BoxForm, Input, Button, Row } from './style';
import { NavLink } from 'react-router-dom'
import { api } from '../../services/api';
import Header from '../../components/Header/Header';
import { toast } from 'react-toastify';
import { Spinner } from 'react-bootstrap';

const validations = yup.object().shape({
    name: yup.string().required(),
    registration_number: yup.number().required().positive().integer(),
    serie: yup.string().required(),
    age: yup.number().required().positive().integer(),
    gender: yup.string().required(),
    cpf: yup.string().required(),
    telephone: yup.string().required(),
    street: yup.string().required(),
    number: yup.string().required(),
    district: yup.string().required(),
})

const initialValues = {}
const Dashboard = () => {
    const [state, setState] = React.useState('AC');
    const [listUf, setListUf] = React.useState([]);
    const [city, setCity] = React.useState('');
    const [listCity, setListCity] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const auth = JSON.parse(localStorage.getItem('@token'));

    const handleSubmit = async (values) => {
        
        console.log('VALUES: ', values)
        console.log(auth)
        const nameUF = listUf.filter(item => item.id == state);
        const header = { headers: {'Authorization': `Bearer ${auth.token.token}` }}

        const dataForm = { 
            name: values.name, 
            registration_number: values.registration_number, 
            serie: values.serie, 
            gender: values.gender, 
            age: values.age, 
            cpf: values.cpf, 
            telephone: values.telephone,
            addresses: [
                { 
                    street: values.street, 
                    number: values.number, 
                    district: values.district, 
                    city: city, 
                    state: nameUF[0].sigla, 
                }
            ]
        }
        try {
            setLoading(true);
            await api.post('/students', dataForm, header ).then(response => {
                setLoading(false);
                console.log(response.data)
                toast.success('Aluno(a) cadastrado com sucesso !')
                clearInputs(values)
            })

        } catch (err) {
            setLoading(false);
            toast.error('Erro ao cadastrar aluno(a).');
        }
        console.log('DATA FORM: ', dataForm)
    }

    function clearInputs(values) {
        console.log('VALUES CLEAR INPUT: ', values)
        values.name = '';
        values.registration_number = '';
        values.serie = ''
        values.gender = '' 
        values.age = ''
        values.cpf = ''
        values.telephone = ''
        values.street = ''
        values.number = ''
        values.district = ''
        setState('AC')
    }

    function loadUf() {
        let url = 'https://servicodados.ibge.gov.br/';
        url = url + 'api/v1/localidades/estados';
        fetch(url)
            .then(response => response.json())
            .then(data => {        
                data.sort((a,b) => a.nome.localeCompare(b.nome));
                setListUf([...data]);
            });
    }
    function loadCity(id) {
        let url = 'https://servicodados.ibge.gov.br/api/v1/';
        url = url + `localidades/estados/${id}/municipios`;
        fetch(url)
            .then(response => response.json())
            .then(data => {        
                data.sort((a,b) => a.nome.localeCompare(b.nome));
                setListCity([...data]);
                setCity(data[0].nome)
            });
    }

    React.useEffect(() => {
        loadUf();
    },[]);

    React.useEffect(() => {
        if (state) {
            loadCity(state);
        }
    }, [state]);

    return (
        <>
        <Header username={auth.username} />
            <Container>
                <BoxForm>
                    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validations} >
                        {
                            ({ handleChange, handleBlur, values}) => (
                                <FormikForm style={styles.form} >
                                    <h1>Cadastro de alunos</h1>
                                    <Row>
                                        <Input>
                                            <Field 
                                                style={styles.input}
                                                type="text" 
                                                name="name"  
                                                placeholder="Nome do aluno"
                                            />
                                        <ErrorMessage style={{ color: 'red', fontSize: '12px', marginTop: '-10px' }} component="span" name="name" />
                                        </Input>

                                        <Input>
                                            <Field 
                                                style={styles.input}
                                                type="number" 
                                                name="registration_number"  
                                                placeholder="Número de matrícula"
                                            />
                                        <ErrorMessage style={{ color: 'red', fontSize: '12px', marginTop: '-10px' }} component="span" name="number" />
                                        </Input>

                                        <Input>
                                            <Field 
                                                style={styles.input}
                                                type="text" 
                                                name="serie" 
                                                placeholder="Série" 
                                            />
                                        <ErrorMessage style={{ color: 'red', fontSize: '12px', marginTop: '-10px' }} component="span" name="serie" />
                                        </Input>
                                    </Row>

                                    <Row>
                                        <Input>
                                            <Field 
                                                style={styles.input}
                                                type="number" 
                                                name="age" 
                                                placeholder="Idade" 
                                            />
                                        <ErrorMessage style={{ color: 'red', fontSize: '12px', marginTop: '-10px' }} component="span" name="age" />
                                        </Input>

                                        <select
                                            name="gender"
                                            value={values.gender}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            style={{ display: 'block' }}
                                        >
                                            <option value="" label="Sexo" />
                                            <option value="M" label="M" />
                                            <option value="F" label="F" />
                                        </select>   

                                        <Input>
                                            <Field 
                                                style={styles.input}
                                                type="text" 
                                                name="telephone" 
                                                placeholder="Telefone" 
                                            />
                                        <ErrorMessage style={{ color: 'red', fontSize: '12px', marginTop: '-10px' }} component="span" name="telephone" />
                                        </Input>
                                    </Row>

                                    <Row>

                                        <Input>
                                            <Field 
                                                style={styles.input}
                                                type="text" 
                                                name="cpf" 
                                                placeholder="CPF" 
                                            />
                                        <ErrorMessage style={{ color: 'red', fontSize: '12px', marginTop: '-10px' }} component="span" name="cpf" />
                                        </Input>

                                        <Input>
                                            <Field 
                                                style={styles.input}
                                                type="text" 
                                                name="street" 
                                                placeholder="Rua" 
                                            />
                                        <ErrorMessage style={{ color: 'red', fontSize: '12px', marginTop: '-10px' }} component="span" name="street" />
                                        </Input>

                                        <Input>
                                            <Field 
                                                style={styles.input}
                                                type="text" 
                                                name="number" 
                                                placeholder="Número" 
                                            />
                                        <ErrorMessage style={{ color: 'red', fontSize: '12px', marginTop: '-10px' }} component="span" name="number" />
                                        </Input>
                                    </Row>

                                    <Row>

                                        <Input>
                                            <Field 
                                                style={styles.input}
                                                type="text" 
                                                name="district" 
                                                placeholder="Bairro" 
                                            />
                                        <ErrorMessage style={{ color: 'red', fontSize: '12px', marginTop: '-10px' }} component="span" name="district" />
                                        </Input>

                                        <select name="state" value={state} onChange={e => setState(e.target.value)} onBlur={handleBlur} style={{ display: 'block' }}>
                                            {listUf.map((item, index) => ( 
                                                <option key={index} value={item.id}>{item.nome}</option>
                                            ))}
                                        </select>
                                        <select name="city" value={city} onChange={e => setCity(e.target.value)} onBlur={handleBlur} style={{ display: 'block' }}>
                                            {listCity.map((item, index) => ( 
                                                <option key={index} value={item.sigla}>{item.nome}</option>
                                            ))}
                                        </select>

                                        
                                    </Row>
                                    <ErrorMessage style={{ color: 'red', fontSize: '12px', marginTop: '-10px' }} component="span" name="gender" />
                                    { loading && <Spinner animation="border" variant="success" />}
                                    <Button type="submit"> Cadastrar </Button>
                                    <NavLink to="/registered-students">Ver alunos cadastrados</NavLink>
                                </FormikForm>
                            )
                        }
                    </Formik>
                </BoxForm>
            </Container>
        </>
    );
}

const styles = {
    form: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    input: {
        width: '90%',
        height: '70%',
        border: 'none',

    },
    obrigatory: {
        color: 'red',
    },
}

export default Dashboard;
