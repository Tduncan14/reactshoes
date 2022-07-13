import React,{useState,useEffect} from 'react'
import './smallcart.css';

const SmallCart = ({showCart}) => {

    const {thetext,setTheText} = useState()

    console.log(thetext,'this the text')


    //  useEffect(() =>(
 
    //      setTheText('Your cart is empty')

        


    // ),[thetext])


   
    
  return (
  <>
     {showCart && <div className="whiteCard">
    <div className="cart">

    <h1>Cart</h1>
    

    <hr />

    <div className="cartDisplay"> 

      {thetext ? thetext : 'Your cart is empty.'}

    </div>
  
</div>
    </div>
  }
  </>
  )
}

export default SmallCart
