import { createBrowserRouter } from 'react-router'
import Layout from '@/screens/Layout'
import Home from '@/screens/Home'
import Product from '@/screens/Product'
import Cart from '@/screens/Cart'
import NotFound from '@/screens/NotFound'

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
