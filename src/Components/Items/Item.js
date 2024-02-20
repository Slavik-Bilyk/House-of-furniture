import {ItemList, ItemImg, ItemTitle, ItemElement, ItemPrice, AddCard} from './Items.styled'

export default function Item({item, onAdd, onShowItem}) {

return (
    <ItemList>
        <ItemImg src={'./img/' + item.img} onClick={() => onShowItem(item)} />
        <ItemTitle>{item.title}</ItemTitle>
        <ItemElement>{item.descr}</ItemElement>
        <ItemPrice>{item.price}$</ItemPrice>
        <AddCard onClick={() => onAdd(item)}>+</AddCard>
    </ItemList>
)

}