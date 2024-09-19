import styled from "styled-components";

export const Category = styled.div`
    font-size: 20px;
    display: inline-block;
    background: #816e6e;
    border-radius: 50%;
    padding: 10px 20px;
    margin-bottom: 25px;
    margin-right: 15px;
    cursor: pointer;
    border: 1px solid transparent;
    transition: all 500ms ease;

    &:hover {
        border-color: silver;
        transform: scale(1.1);
    }
`