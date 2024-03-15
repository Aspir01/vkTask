import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Header } from '@vkontakte/vkui';

const TotalAmount: React.FC = () => {
    const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);

    return (
        <div className="total-amount-container">
            {totalAmount === 0 ? "" : <Header size='large'>Итого: {totalAmount} руб.</Header>}
        </div>
    );
};

export default TotalAmount;