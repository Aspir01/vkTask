import React from 'react';
import { useDispatch } from 'react-redux';
import { CartItem as CartItemType } from '../store/cartSlice';

interface CartItemProps {
    item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
    const dispatch = useDispatch();

    return (
        <div className="cart-item">
            <img src={item.img} alt="фото товаров" />
            <div className="item-about">
                <h3>{item.name}</h3>
                <p>Скидка: {item.discount}%</p>
                <p>Цена за 1 штуку: <b>{item.price}</b> руб.</p>
            </div>
            <div className="cart-item-quantity">
                <p><b>{item.quantity}</b> шт.</p>
                <div className='btns'>
                    <button>+</button>
                    <button>-</button>
                </div>
            </div>
            <p>Итого <b>{item.total}</b> руб.</p>
        </div>
    );
};

export default CartItem;