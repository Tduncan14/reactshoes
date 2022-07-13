import React ,{useState,useEffect} from 'react'
import './smallcart.css';

const SmallCart = ({showCart}) => {

    const [text,setText] = useState('Your cart is empty.')
    

    console.log(text,'this the text')


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

      {text ? text : 'Your cart is empty.'}

    </div>
  
</div>
    </div>
  }
  </>
  )
}

export default SmallCart
