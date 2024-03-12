import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const TotalAmount: React.FC = () => {
    const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);

    return (
        <div className="total-amount">
            Итого: {totalAmount} руб.
        </div>
    );
};

export default TotalAmount;