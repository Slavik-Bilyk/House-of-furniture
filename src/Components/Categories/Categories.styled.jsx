import styled from "styled-components";

export const Category = styled.div`
    display: inline-block;
    background: #f2f2f2;
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