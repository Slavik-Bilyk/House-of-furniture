import {OrderList, OrderTitle, OrderImg, OrderPrice} from './Order.styled'

export default function Order({item}) {

return (
    <OrderList>
        <OrderTitle>{item.title}</OrderTitle>
        <OrderImg src={'./img/' + item.img}/>
        <OrderPrice >{item.price}$</OrderPrice>
    </OrderList>
)

}