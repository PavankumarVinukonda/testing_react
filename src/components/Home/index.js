    import './index.css';
import Card from '../productCard'

import products from '../../utliis/dummy';

import { useSelector,useDispatch } from "react-redux";

import {fetchProducts} from '../../store/productSlice'

import Cart from '../cart';
import ProductList from './products';






export default function Home  () {


   
    return (
        <div className='landing-page' >
            <ProductList />
            <Cart />



            <div className='home-grid-container' >

                {
                    products?.map((x) =>  
                        <Card x={x} />
                    )
                }
                   
            </div>
        </div>  
    )
}