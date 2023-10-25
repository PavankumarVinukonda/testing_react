

import { useSelector,useDispatch } from "react-redux";
import Card from '../productCard'
import {clearCart}  from '../../store/cartSlice'


export default function cart () {

    const dispatch = useDispatch()
    const cartItems = useSelector((store) => store.cart.items);
    
    const handleAction = () => {

        console.log('test');
        dispatch(clearCart())

       
        
    }
    return (
        <div  >
            <h1>cart</h1>
            <div>
                {
                    cartItems?.map((x) => 
                        <Card x={x} />
                    )
                }
            </div>
            <button onClick={() => handleAction()} >clear</button>
        </div>
    );

} 