import { useState, useEffect } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import './index.css'
import Items from "./Items/Items";
import Order from "./Order/Order";
import {Container} from './App.styled'
import Categiries from "./Categories/Categories";
import ShowFullItem from "./ShowFullItem/ShowFullItem";

export default function App() {

const [items, setItems] = useState([
    {
        id: 1,
        img: 'chair.jpg',
        title: 'Стілець білий',
        price: 49.99,
        descr: 'lorem lorem lorem lorem lorem ',
        category: 'chair',
        
    },

    {
        id: 2,
        img: 'table.jpg',
        title: 'Стіл',
        price: 99.99,
        descr: 'lorem lorem lorem lorem lorem ',
        category: 'table'
    },

    { 
        id: 3,
        img: 'Sofa.jpg',
        title: 'Диван',
        price: 349.00,
        descr: 'lorem lorem lorem lorem lorem ',
        category: 'sofa'
    },
    { 
        id: 4,
        img: 'light.jpg',
        title: 'Нічник',
        price: 39.99,
        descr: 'lorem lorem lorem lorem lorem ',
        category: 'light'
    },
    { 
        id: 5,
        img: 'chair.jpg',
        title: 'Стілець білий',
        price: 49.99,
        descr: 'lorem lorem lorem lorem lorem ',
        category: 'chair'
    },
    { 
        id: 6,
        img: 'chair.jpg',
        title: 'Стілець білий',
        price: 49.99,
        descr: 'lorem lorem lorem lorem lorem ',
        category: 'chair'
    },
 
])
const [orders, setOrder] = useState([])
const [currentItems, setCurrentItems] = useState(items)
const [showFullItem, setShowFullItem] = useState(false)
const [fullItem, setFullItem] = useState([])

const onAdd = (item) => {

    setOrder([...orders, item])

}

const choseCategory = category => {
    if (category === 'all') {
        setCurrentItems(items);
        return;
    }

    setCurrentItems(items.filter(el => el.category === category));
}

const onShowItem = (item) => {
    setFullItem(item)
    setShowFullItem(showFullItem => !showFullItem)
}

const deleteOrder = (id) => {
    setOrder(orders => orders.filter(el => el.id !== id))
}

return (
    <Container>
        <Header orders={orders} deleteOrder={deleteOrder}/>
        <Categiries choseCategory={choseCategory}/>
        <Items onShowItem={onShowItem} items={currentItems} onAdd={onAdd}/>
        {showFullItem && <ShowFullItem onAdd={onAdd} item={fullItem} onShowItem={onShowItem}/>}
        <Footer/>
    </Container>
)

}