import styled from 'styled-components';
import { FaTrash } from 'react-icons/fa';

export const OrderList = styled.div`
    margin: 20px 10px;
    display: flex;
    align-items: center;
    background-color: #b9b09b;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const OrderTitle = styled.h2`
    font-size: 22px;
    font-weight: bold;
    color: #ffffff;
    margin: 0;
    flex: 1;
`;

export const OrderImg = styled.img`
    width: 100px;
    height: auto;
    margin-left: 20px;
    margin-right: 20px;
    border-radius: 8px;
    object-fit: cover;
`;

export const OrderPrice = styled.p`
    color: green;
    font-size: 18px;
    font-weight: 500;
    margin: 0;
`;

export const StyledTrashIcon = styled(FaTrash)`
    cursor: pointer;
    color: rgb(180, 7, 7);
    margin-top: 0;
    margin-left: 20px;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.3);
        color: rgb(255, 0, 0);
    }
`;
