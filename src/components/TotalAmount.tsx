import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const TotalAmount: React.FC = () => {
    const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);

    return (
        <div className="total-amount-container">
            {totalAmount === 0 ? "" : <h3>Итого: {totalAmount} руб.</h3>}
        </div>
    );
};

export default TotalAmount;