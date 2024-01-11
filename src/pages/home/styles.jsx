import { styled } from "styled-components";

export const Container = styled.div `
    background-color: #82bff3;
    min-width: 250px;
    padding: 20px 50px;
    border-radius: 20px;
    overflow: hidden;

    h1 {
       margin-bottom: 20px;
       text-align: center;
    }

    input {
        height: 35px;
        padding-left: 20px;
        margin-right: 10px;
        outline: none;
        border-radius: 10px;
        border: none;
    }

`;

export const ProdutoOverflow = styled.div `
    margin-top: 20px;
    max-height: 400px;
    overflow: auto;

    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: #6464eb;
    }
`

export const Produto = styled.div `
    display: flex;
    gap: 5px;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    margin-top: 10px;
    margin-right: 20px;
    background-color: white;
    padding: 10px;
    border-radius: 10px;

    button {
        border-radius: 10px;
        border: none;
        padding: 7px;
        cursor: pointer;

        /* Animação hover */
        &:hover {
            scale: 1.1;
        }
    }
`;

export const AddButton = styled.button `
    background: #7bd67b;
    color: #000;
    height: 35px;
    border: none;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        scale: 1.1;
    }
`;