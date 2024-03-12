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
            <div className="cart-item-details">
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <div className="cart-item-actions">
                    {/* Кнопки для изменения количества и удаления товара */}
                </div>
            </div>
            <div className="cart-item-quantity">
                {item.quantity}
            </div>
            <div className="cart-item-price">
                {item.price} руб.
            </div>
        </div>
    );
};

export default CartItem;