import styled from "styled-components";

export const FullITem = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: #0000006e;
    z-index: 999;
    overflow: auto;
`

export const FullITemImage = styled.div`
    width: 600px;
    position: relative;
    margin: 10% auto;
    padding: 40px 30px;
    background: #fff;
    border-radius: 9px;
`

export const AddCard = styled.button`
    margin-right: 30px;
    margin-bottom: 10px;
    border-radius: 50%;
    background-color: rgb(179, 37, 37);
    width: 30px;
    height: 30px;
    transition: transform 500ms ease;
    cursor: pointer;

    &:hover {
        transform: scale(1.5);
    }
`

export const ItemImg = styled.img`
    width: 100%;
    transition: transform 500ms ease;
    position: relative;

    &:hover {
        cursor: pointer;
        transform: scale(1.05);
    }
`

export const ItemTitle = styled.h2`
     margin-top: 15px;
    margin-left: 30px;
`

export const ItemElement = styled.p`
     font-size: 20px;
    margin-top: 10px;
    margin-left: 30px;
`

export const ItemPrice = styled.p`
    margin-top: 10px;
    margin-left: 30px;
    color: green;
    font-size: 20px;
`

