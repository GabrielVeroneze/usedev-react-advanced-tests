import { createBrowserRouter } from 'react-router'
import Home from '../screens/Home'
import Layout from '../screens/Layout'
import NotFound from '../screens/NotFound'
import Product from '../screens/Product'
import Cart from '../screens/Cart'

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: 'product/:id',
                Component: Product,
            },
            {
                path: 'cart',
                Component: Cart,
            },
        ],
    },
    {
        path: '*',
        Component: NotFound,
    },
])
