import Order from "../Order/Order";
import { useState } from "react";
import { MainHeader, HeaderLogo, NavigationList, NavigationItem, CartOpen, Presentation, StyledCartIcon} from "./Header.styled";


const showOrders = orders => {

    return (
        <div>
            {orders.map(item => (
                <Order key={item.id} item={item}/>
            ))}
        </div>
    )
}

const showNothing = () => {
    return (
        <div>
            Тут пусто
        </div>

    )
}



export default function Header({orders}) {

    const [cartOpen, setCartOpen] = useState(false)

return (
    <MainHeader>
            <HeaderLogo>House Staf</HeaderLogo>
            <NavigationList>
                <StyledCartIcon onClick={() => {setCartOpen(cartOpen => !cartOpen)}} className={`${cartOpen && 'active'}`}/>
                <NavigationItem>Про нас</NavigationItem>
                <NavigationItem>Контакти</NavigationItem>
                <NavigationItem>Кабінет</NavigationItem>
            </NavigationList>
        
        {cartOpen && (
            <CartOpen>
                {orders.length > 0 ?
                showOrders(orders) : showNothing()    
            } 
            </CartOpen>
        )}

        <div className="presentation">

        </div>
    </MainHeader>
)

}