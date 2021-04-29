import styled from 'styled-components';

export const Container = styled.div`
    margin: 0 auto;
    max-width: 1280px;
    width: 100%;
    margin-top: 3rem;
    background-color: #F7F7F7;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const BoxForm = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 2rem;
    background-color: #fff;
    width: 100rem;

    box-shadow: 10px 5px 5px #ccc;
    border-radius: 20px;
    overflow-y: scroll;
`;

export const Tr = styled.tr`
    cursor: pointer;
    transition: 0.5s;
    &:hover {
        background-color: #ccc;
    }
`;

export const RowButtons = styled.div`
    margin-top: 3rem;
    height: 5rem;
    display: flex;
    align-items: center;
    padding-right: 85%;
`;

export const Voltar = styled.button`
    width: 10rem;
    height: 3rem;
    border: none;
    border-radius: 5px; 
    background-color: #aaa;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    box-shadow: 10px 5px 5px #ccc;
`;