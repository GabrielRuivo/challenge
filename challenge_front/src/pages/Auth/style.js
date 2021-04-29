import styled from 'styled-components';

export const Container = styled.div`
    margin: 0 auto;
    max-width: 1280px;
    width: 100%;
    height: 100vh;
    background-color: #F7F7F7;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const BoxForm = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    background-color: #fff;
    height: 30rem;
    width: 30rem;
    box-shadow: 10px 5px 5px #ccc;
    border-radius: 20px;
`;

export const Form = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Input = styled.div`
    width: 20rem;
    height: 4rem;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #ccc;
`;

export const Button = styled.button`
    width: 60%;
    height: 4rem;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid darkblue;
    background-color: darkblue;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
`;