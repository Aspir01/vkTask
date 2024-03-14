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
        axios.get('https://dummyjson.com/carts/1')
            .then(response => {
                const items: CartItemType[] = response.data.products.map((product: any) => ({
                    id: product.id,
                    name: product.title,
                    discount: product.discountPercentage,
                    quantity: product.quantity,
                    price: product.price,
                    total: product.total,
                    img: product.thumbnail
                }));
                dispatch(setCartItems(items));
            })
            .catch(error => {
                console.error('Error fetching cart items:', error);
            });
    }, [dispatch]);

    return (
        <div className="cart-list-container">
            {cartItems.map(item => (
                <CartItem key={item.id} item={item} />
            ))}
            {cartItems.length === 0 && <h2>Загрузка...</h2>}
        </div>
    );
};

export default CartList;