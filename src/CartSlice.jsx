/* eslint-disable react-refresh/only-export-components */
import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const { id, name, image, cost } = action.payload;
        // Check if the item already exists in the cart
      const existingItem = state.items.find(item => item.id === id);
        if (existingItem) {
            // If it exists, increase the quantity
            existingItem.quantity += 1;
        } else {
            // If it doesn't exist, add it to the cart with quantity 1
        state.items.push({ id, name, image, cost, quantity: 1 });
        }
    
    },
    removeItem: (state, action) => {
        const itemId = action.payload;
        // Remove the item with the specified id from the cart
        state.items = state.items.filter(item => item.id !== itemId);
    },
    updateQuantity: (state, action) => {
        const { id, quantity } = action.payload;
        // Find the item in the cart and update its quantity
        const item = state.items.find(item => item.id === id);
        if (item) {
            item.quantity = quantity;
        }

    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
