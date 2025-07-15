import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  colors: string[];
  category: string;
}

interface CartItem extends Product {
  quantity: number;
  selectedColor: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, color: string) => void;
  removeFromCart: (id: number, color: string) => void;
  updateQuantity: (id: number, color: string, quantity: number) => void;
  getTotalPrice: () => number;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product, color: string) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id && item.selectedColor === color);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id && item.selectedColor === color
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1, selectedColor: color }];
    });
  };

  const removeFromCart = (id: number, color: string) => {
    setCartItems(prev => prev.filter(item => !(item.id === id && item.selectedColor === color)));
  };

  const updateQuantity = (id: number, color: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id, color);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === id && item.selectedColor === color
          ? { ...item, quantity }
          : item
      )
    );
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      getTotalPrice,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};