import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 28px;
    margin: 32px 0;
    padding: 16px;
    width: 400px;
    border: 1px solid black;
    border-radius: 5px;
`
export const Label = styled.label`
    display: flex;
    flex-direction: column;
    gap: 4px;
`

export const Input = styled.input`
    width: 220px;
    padding: 4px 8px;
    font-size: 16px;
    border: 1px solid gray;
`

export const Button = styled.button`
    width: 120px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #b0a4a4;
    font-size: 16px;
    background-color: white;

    transition: border 250ms linear, color 250ms linear, background-color 250ms linear;

    &:hover {
        border: 2px solid #5287ec;
    }
    &:focus {
        background-color: #5287ec;
        color: white;
    }
`