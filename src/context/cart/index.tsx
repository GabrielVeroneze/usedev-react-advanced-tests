/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from 'react';
import type { Product } from '../../types';

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
	const [items, setItems] = useState<(Product & { quantity: number })[]>([]);

	const changeQuantity = (item: Product & { quantity: number }) => {
		setItems(items.map((i) => (i.id === item.id ? item : i)));
	};

	const addItem = (item: Product & { quantity: number }) => {
		setItems([...items, item]);
	};

	const removeItem = (item: Product) => {
		setItems(items.filter((i) => i.id !== item.id));
	};

	const clear = () => {
		setItems([]);
	};

	return (
		<CartContext.Provider value={{ items, addItem, removeItem, clear, changeQuantity }}>
			{children}
		</CartContext.Provider>
	);
};
