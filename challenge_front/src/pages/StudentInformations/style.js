import styled from 'styled-components';

export const Container = styled.div`
    margin: 0 auto;
    max-width: 1280px;
    width: 60%;
    background-color: #F7F7F7;
    display: flex;
    align-items: center;
    justify-content: center;
    input, label {
        display: block;
    }
`;

export const BoxForm = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 1280px;
    width: 100%;
    height: 50rem;
    padding: 2rem;
    background-color: #fff;
    box-shadow: 10px 5px 5px #ccc;
    border-radius: 20px;
    margin-top: 3rem;

    h1 {
        font-family: Arial, Helvetica, sans-serif;
        font-style: italic;
        font-size: 30px;
        font-weight: bold;
        color: #666;
        margin-top: 2rem;

    }
`;

export const ProfileInformation = styled.div`
    width: 100%;
    hr {
        margin-top: 3rem;
    }
`;
export const AddressInformation = styled.div`
    width: 100%;
    margin-top: 1rem;
`;

export const Row = styled.div`
    margin-top: 1rem;
    width: 100%;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

export const RowButtons = styled.div`
    position: relative;
    margin-top: 3rem;
    width: 100%;
    height: 5rem;
    display: flex;
    align-items: center;
    padding-left: 65%;
`;

export const Voltar = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 12rem;
    height: 3rem;
    border: none;
    border-radius: 5px; 
    background-color: #aaa;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    box-shadow: 10px 5px 5px #ccc;
`;

export const Salvar = styled.button`
    width: 18rem;
    height: 3rem;
    border: none;
    border-radius: 5px; 
    background-color: green;
    color: #fff;
    font-size: 17px;
    font-weight: bold;
    margin-left: 1rem;
    box-shadow: 10px 5px 5px #ccc;
`;

export const Deletar = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 10rem;
    height: 3rem;
    left: 0;
    border: none;
    border-radius: 5px; 
    background-color: red;
    color: #fff;
    font-size: 17px;
    font-weight: bold;
    margin-left: 1rem;
    box-shadow: 10px 5px 5px #ccc;
`;