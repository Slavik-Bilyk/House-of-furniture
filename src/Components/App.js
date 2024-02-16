import { useState } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import './index.css'
import Items from "./Items/Items";
import Order from "./Order/Order";
import {Container} from './App.styled'

export default function App() {

const [items, setItems] = useState([
    {
        id: 1,
        img: 'chair1.jpg',
        title: 'Стілець білий',
        price: 49.99,
        descr: 'lorem lorem lorem lorem lorem ',
        category: 'chair',
        
    },

    {
        id: 2,
        img: 'chair1.jpg',
        title: 'Стілець білий',
        price: 49.99,
        descr: 'lorem lorem lorem lorem lorem ',
        category: 'chair'
    },

    { 
        id: 3,
        img: 'chair1.jpg',
        title: 'Стілець білий',
        price: 49.99,
        descr: 'lorem lorem lorem lorem lorem ',
        category: 'chair'
    },
    { 
        id: 4,
        img: 'chair1.jpg',
        title: 'Стілець білий',
        price: 49.99,
        descr: 'lorem lorem lorem lorem lorem ',
        category: 'chair'
    },
    { 
        id: 5,
        img: 'chair1.jpg',
        title: 'Стілець білий',
        price: 49.99,
        descr: 'lorem lorem lorem lorem lorem ',
        category: 'chair'
    },
    { 
        id: 6,
        img: 'chair1.jpg',
        title: 'Стілець білий',
        price: 49.99,
        descr: 'lorem lorem lorem lorem lorem ',
        category: 'chair'
    },
 
])

const [orders, setOrder] = useState([])

const onAdd = (item) => {

    setOrder([...orders, item])

}

return (
    <Container>
        <Header orders={orders}/>
        <Items items={items} onAdd={onAdd}/>
        <Footer/>
    </Container>
)

}