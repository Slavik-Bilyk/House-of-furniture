import Item from "./Item";
import {MainSection} from './Items.styled'


export default function Items({items, onAdd, onShowItem}) {

return (
    <MainSection>
        {items.map(item => (
            <Item onShowItem={onShowItem} key={item.id} item={item} onAdd={onAdd}/>
        ))}
    </MainSection>
)

}