import { useSelector,useDispatch } from "react-redux";
import { fetchProducts } from "../../store/productSlice";
import './index.css'
import Card from '../productCard'

export default function ProductList() {

    const dispatch = useDispatch()

    const dt = useSelector((store) => store.product)
    console.log(dt)

    const fetchTheData = () => {

        dispatch(fetchProducts());
    }   
     


    return (
        <div  >
  <div className='home-grid-container' >
  <button onClick={fetchTheData} > fetch </button>
           
{
    dt?.data && dt?.data?.map((x) =>  
        <Card x={x} />
    )
}
   
</div>
        </div>
    );
}