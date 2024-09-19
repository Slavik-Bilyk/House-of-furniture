import styled from "styled-components";
import { FiShoppingCart } from 'react-icons/fi';



export const MainHeader = styled.header`
    position: relative;
`



export const HeaderLogo = styled.div`
    font-size: 40px;
    position: absolute;
    font-weight: 600;

`

export const NavigationList = styled.ul`
    display: flex;
    list-style: none;
    justify-content: right;
    margin-bottom: 50px;
`

export const NavigationItem = styled.li`
     margin-left: 30px;
    transition: transform 500ms ease;
    cursor: pointer;
    font-size: 20px;

    &:hover {
        opacity: 0.5;
        transition: transform 500ms ease;
        transform: scale(1.3);
    }
`


export const CartOpen = styled.div`
     position: absolute;
    right: 0;
    width: 450px;
    background: #fcf8f8;
    -webkit-box-shadow: -4px 10px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: -4px 10px 5px 0px rgba(0,0,0,0.75);
    box-shadow: -4px 10px 5px 0px rgba(0,0,0,0.75);
    z-index: 999;

`

export const Presentation = styled.div`
    background: url('/Img/1649165522.jpeg');
    width: 100%;
    height: 500px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    background-blend-mode: multiply;
    background-color: rgb(196, 192, 192);
    margin-bottom: 30px;
    position: relative;
  
    &::after {
        content: 'Кращі товри для вашого sdбудинку';
        position: absolute;
        top: 100px;
        left: 50px;
        font-size: 40px;
        font-weight: 600;
    }

    &::before {
        content: 'По низьким цінам';
        position: absolute;
        top: 150px;
        left: 50px;
        font-size: 15px;
        font-weight: 300;
    }
`;


export const StyledCartIcon = styled(FiShoppingCart )`
         transition: transform 500ms ease;
         cursor: pointer;
         font-size: 20px;

         &:hover {
            transform: scale(1.5);
            color: rgb(180, 7, 7);
         }

         &.active {
            transform: scale(1.5);
            color: rgb(180, 7, 7);
         }
`;

