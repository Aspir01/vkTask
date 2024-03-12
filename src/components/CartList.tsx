import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { RootState } from '../store/store';
import { setCartItems, CartItem as CartItemType } from '../store/cartSlice';
import CartItem from './CartItem';

const CartList: React.FC = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.items);

    useEffect(() => {
        // Загрузка данных корзины с использованием axios из API
        axios.get('https://dummyjson.com/carts/1')
            .then(response => {
                // Предположим, что данные API соответствуют интерфейсу CartItem[]
                const items: CartItemType[] = response.data.products.map((product: any) => ({
                    id: product.id,
                    name: product.title,
                    description: product.description,
                    quantity: product.quantity,
                    price: product.price,
                    total: product.total,
                }));
                dispatch(setCartItems(items)); // Обновление состояния корзины в Redux
            })
            .catch(error => {
                console.error('Error fetching cart items:', error);
            });
    }, [dispatch]);

    return (
        <div className="cart-list">
            {cartItems.map(item => (
                <CartItem key={item.id} item={item} />
            ))}
        </div>
    );
};

export default CartList;