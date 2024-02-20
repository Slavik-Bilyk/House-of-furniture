import {FullITemImage, AddCard, ItemImg, ItemTitle, ItemElement, ItemPrice, FullITem} from './ShowFullItem.styled'

const ShowFullItem = ({item, onShowItem, onAdd}) => {

return (
    <FullITem>
       <FullITemImage>
       <ItemImg src={'./img/' + item.img} onClick={() => onShowItem(item)} />
        <ItemTitle>{item.title}</ItemTitle>
        <ItemElement>{item.descr}</ItemElement>
        <ItemPrice>{item.price}$</ItemPrice>
        <AddCard type="button" onClick={() => onAdd(item)}>+</AddCard>
       </FullITemImage>
    </FullITem>
)

}

export default ShowFullItem