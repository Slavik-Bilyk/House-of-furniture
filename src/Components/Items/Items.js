import Item from "./Item";
import {MainSection} from './Items.styled'


export default function Items({items, onAdd}) {

return (
    <MainSection>
        {items.map(item => (
            <Item key={item.id} item={item} onAdd={onAdd}/>
        ))}
    </MainSection>
)

}