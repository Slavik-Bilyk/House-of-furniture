import styled from "styled-components";
import {FaTrash} from 'react-icons/fa'


export const OrderList = styled.div`
     margin-bottom: 20px;
    display: flex;
`

export const OrderTitle = styled.h2`
    font-size: 20px;
`

export const OrderImg = styled.img`
    width: 120px;
    margin-left: 20px;
`

export const OrderPrice = styled.p`
    color: green;
`

export const StyledTrashIcon = styled(FaTrash)`
    cursor: pointer;
    color: rgb(180, 7, 7);
    margin-top: 60px;
    margin-left: 80px;
    transition: transform 500ms ease;

    &:hover {
        transform: scale(1.5);
    }
`