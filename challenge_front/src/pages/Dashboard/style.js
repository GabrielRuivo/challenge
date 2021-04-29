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
    height: 40rem;
    width: 60rem;
    box-shadow: 10px 5px 5px #ccc;
    border-radius: 20px;

    h1 {
        font-family: Arial, Helvetica, sans-serif;
        font-style: italic;
        font-size: 30px;
        font-weight: bold;
        color: #666;
    }

`;

export const Form = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Input = styled.div`
    width: 20rem;
    height: 4rem;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #ccc;
    margin: 10px;
`;

export const Button = styled.button`
    width: 40%;
    height: 4rem;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #ccc;
    background-color: green;
    color: #fff;
    font-weight: bold;
    font-size: 20px;
`;

export const Row = styled.div`
    width: 100%;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    input, label {
        display: block;
    }

    select {
        width: 20rem;
        height: 4rem;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #ccc;
        margin: 10px;
        padding: 1rem;
    }

`;