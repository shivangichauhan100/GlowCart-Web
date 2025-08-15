import React, { createContext, useContext, useMemo, useReducer, ReactNode } from 'react';

export type CartItem = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  quantity: number;
};

type CartState = {
  items: CartItem[];
};

type Action =
  | { type: 'ADD'; payload: Omit<CartItem, 'quantity'> }
  | { type: 'REMOVE'; payload: { id: number } }
  | { type: 'CLEAR' };

const initialState: CartState = { items: [] };

function cartReducer(state: CartState, action: Action): CartState {
  switch (action.type) {
    case 'ADD': {
      const existing = state.items.find(i => i.id === action.payload.id);
      if (existing) {
        return {
          items: state.items.map(i => (i.id === existing.id ? { ...i, quantity: i.quantity + 1 } : i)),
        };
      }
      return { items: [...state.items, { ...action.payload, quantity: 1 }] };
    }
    case 'REMOVE':
      return { items: state.items.filter(i => i.id !== action.payload.id) };
    case 'CLEAR':
      return initialState;
    default:
      return state;
  }
}

type CartContextValue = {
  items: CartItem[];
  subtotal: number;
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const subtotal = useMemo(
    () => state.items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [state.items]
  );

  const addToCart = (item: Omit<CartItem, 'quantity'>) => dispatch({ type: 'ADD', payload: item });
  const removeFromCart = (id: number) => dispatch({ type: 'REMOVE', payload: { id } });
  const clearCart = () => dispatch({ type: 'CLEAR' });

  return (
    <CartContext.Provider value={{ items: state.items, subtotal, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
};
