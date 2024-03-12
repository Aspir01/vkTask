import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface CartItem {
    id: number;
    name: string;
    description: string;
    quantity: number;
    price: number;
    total: number;
}

interface CartState {
    items: CartItem[];
    totalAmount: number;

}

const initialState: CartState = {
    items: [],
    totalAmount: 0,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCartItems: (state, action: PayloadAction<CartItem[]>) => {
            state.items = action.payload;
            state.totalAmount = action.payload.reduce((total, item) => total + item.price * item.quantity, 0);

        },

    },

});

export const { setCartItems } = cartSlice.actions;
export default cartSlice.reducer;