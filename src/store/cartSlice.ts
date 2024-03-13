import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface CartItem {
    id: number;
    name: string;
    description: string;
    discount: number,
    quantity: number;
    price: number;
    total: number;
    img: string
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
        addItem: (state, action: PayloadAction<number>) => {
            const item = state.items.find(item => item.id === action.payload);
            if (item && item.quantity < 10) {
                item.quantity += 1;
                item.total += item.price;
                state.totalAmount += item.price;
            }
        },
        deleteItem: (state, action: PayloadAction<number>) => {
            const item = state.items.find(item => item.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
                item.total -= item.price;
                state.totalAmount -= item.price;
            }
        },
    },

});

export const { setCartItems, addItem, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;