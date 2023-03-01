import styled from "styled-components";

export const Contact = styled.li`
    height: 32px;

    &:not(:last-child) {
        margin-bottom: 20px;
    }
`

export const ContactInfo = styled.p`
    display: inline-block;
    width: 300px;
    height: 100%;
    margin: 0;
`

export const DeleteButton = styled.button`
    margin-left: 16px;
    padding: 0;
    width: 120px;
    height: 100%;
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