import React, { useState, useContext } from 'react';
import * as yup from 'yup';

import { ErrorMessage, Formik, Form as FormikForm, Field } from 'formik';
import { Container, BoxForm, Input, Button } from './style';
import { AuthContext } from '../../context/AuthContext';
import { api } from '../../services/api';
import { toast } from 'react-toastify';
import { Spinner } from 'react-bootstrap';


const validations = yup.object().shape({
    email: yup.string().email('Deve ser um E-mail válido.').required('Campo E-mail obrigatório.'),
    password: yup.string().min(3, 'Minímo 3 caracteres').required('Campo Senha obrigatório.')
})

const initialValues = {}

const Auth = () => {
    const [ token, setToken ] = useContext(AuthContext)
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (values) => {
        try {
            setLoading(true)

            await api.post('/sessions', values).then(response => {
                setLoading(false);
                console.log(response.data)
                const res = response.data;
                localStorage.setItem('@token', JSON.stringify(res))
                setToken(true)
            })

        } catch {
            setLoading(false);
            toast.error('E-mail ou senha inválido.');
        }
    }
    return (
        <Container>
            <BoxForm>
                <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validations} >
                    <FormikForm style={styles.form} >
                            <h1>Login</h1>
                            <Input>
                                <Field 
                                    style={styles.input}
                                    type="text" 
                                    name="email"  
                                    placeholder="E-mail" 
                                />
                            </Input>
                            <ErrorMessage style={{ color: 'red', fontSize: '12px', marginTop: '-10px' }} component="span" name="email" />

                            <Input>
                                <Field 
                                    style={styles.input}
                                    type="password" 
                                    name="password" 
                                    placeholder="Password" 
                                />
                            </Input>
                            <ErrorMessage style={{ color: 'red', fontSize: '12px', marginTop: '-10px' }} component="span" name="password" />
                            
                            { loading && <Spinner animation="border" variant="primary" />}
                            <Button type="submit" > Entrar </Button>
                    </FormikForm>
                </Formik>
            </BoxForm>
        </Container>
    );
}

const styles = {
    form: {
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

    }
}

export default Auth;
