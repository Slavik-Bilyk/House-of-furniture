import styled from "styled-components";

export const MainSection = styled.main`
    display: flex;
    width: 100%;    
    flex-wrap: wrap;
    justify-content: space-between;
`

export const ItemList = styled.div`
    width: 30%;
    overflow: hidden;
    margin-bottom: 30px;
    background-color: #5f5a4e;
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

export const AddCard = styled.button`
      float: right;
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