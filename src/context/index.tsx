/* eslint-disable react-refresh/only-export-components */
import { useContext } from 'react';
import { CartContext, CartProvider } from './cart';
import { CategoriesContext, CategoriesProvider } from './categories';
import { ProductsContext, ProductsProvider } from './products';

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<CartProvider>
			<CategoriesProvider>
				<ProductsProvider>{children}</ProductsProvider>
			</CategoriesProvider>
		</CartProvider>
	);
};
