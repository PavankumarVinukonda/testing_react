
import './index.scss'
import { useDispatch,useSelector } from 'react-redux'

import {addItem}  from '../../store/cartSlice'

export default function ProductCard (props) {
    const {x} = props
const dispatch = useDispatch()

    const handleAction = () => {

        console.log('test');
        dispatch(addItem(x))

        
    }

    return (
      
   
    <div className="small">
        <article className="recipe">
           <div className="pizza-box">
               <img src={x?.thumbnail}  width="1500" height="1368" alt=" " />
           </div>
           <div className="recipe-content">
               {/* <p className="recipe-tags">
                   <span className="recipe-tag">Gluten Free</span>
                   <span className="recipe-tag">Main dish</span>
               </p> */}
   
               <h1 className="recipe-title"><a href="#">{x?.title}</a></h1>
   
               <p className="recipe-metadata">
                   <span className="recipe-rating">★★★★<span>☆</span></span>
                   <span className="recipe-votes">(12 votes)</span>
               </p>
   
               <p className="recipe-desc">{x?.description}</p>
   
               <button className="recipe-save" type="button" onClick={() => handleAction()} >
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>
                   Add
               </button>
   
           </div>
       </article>
   </div>
    )
}