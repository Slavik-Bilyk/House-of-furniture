
import {OrderList, OrderTitle, OrderImg, OrderPrice, StyledTrashIcon} from './Order.styled'

export default function Order({item, deleteOrder}) {

return (
    <OrderList>
        <OrderTitle>{item.title}</OrderTitle>
        <OrderImg src={'./img/' + item.img}/>
        <OrderPrice >{item.price}$</OrderPrice>
        <StyledTrashIcon onClick={() => deleteOrder(item.id)}/>
    </OrderList>
)

}