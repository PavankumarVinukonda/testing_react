import React from 'react';
import ReactDom from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';

import Home from './components/Home';

import store from '../src/store/store'
import {Provider} from 'react-redux';
import Cart from '../src/components/cart'




const Routing  = createBrowserRouter([
    {path:'/',
    element: <Provider store={store} > <Home /> </Provider>},
    {
        path:'/cart',
        element:<Provider store={store} > <Cart /> </Provider>
    }
])



const root = ReactDom.createRoot(document.getElementById('root'))?.render(<RouterProvider router={Routing}/>)

