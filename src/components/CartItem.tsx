import React from 'react';
import "./CartItem.css";
import { useDispatch } from 'react-redux';
import { CartItem as CartItemType, addItem, deleteItem } from '../store/cartSlice';
import { Card, CardGrid, Div, Text } from '@vkontakte/vkui';

interface CartItemProps {
    item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
    const dispatch = useDispatch();

    return (
        <CardGrid size="l">
            <Card mode="tint" className="cart-item">
                <div className='item-main'>
                    <img src={item.img} alt="фото товаров" />
                    <Div className="item-about">
                        <h3>{item.name}</h3>
                        <Text size={20}>Скидка: {item.discount}%</Text>
                        <Text>Цена за 1 штуку: <b>{item.price}</b> руб.</Text>
                    </Div>
                </div>
                <Div>
                    <p><b>{item.quantity}</b> шт.</p>
                    <div className='btns'>
                        <button className='plus' onClick={() => dispatch(addItem(item.id))}>+</button>
                        <button className='minus' onClick={() => dispatch(deleteItem(item.id))}>-</button>
                    </div>
                </Div>
                <p className='quant'>Итого <b>{item.total}</b> руб.</p>
            </Card>
        </CardGrid>);
};

export default CartItem;    