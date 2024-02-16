import Order from "../Order/Order";
import { useState } from "react";
import { MainHeader, HeaderLogo, NavigationList, NavigationItem, CartOpen, Presentation, StyledCartIcon} from "./Header.styled";

export default function Header({orders, deleteOrder}) {
    const [cartOpen, setCartOpen] = useState(false);

    const showOrders = (orders) => {

        let summa = 0
        orders.forEach(el => summa += Number.parseFloat(el.price))

        return (
            <div>
                {orders.map(item => (
                    <Order deleteOrder={deleteOrder} key={item.id} item={item}/>
                ))}

                <p> summa: {new Intl.NumberFormat().format(summa)}$</p>

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
                    {orders.length > 0 ? showOrders(orders) : showNothing()} 
                </CartOpen>
            )}

            <div className="presentation">
                {/* Presentation content */}
            </div>
        </MainHeader>
    );
}
