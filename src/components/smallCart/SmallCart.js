import React ,{useState,useEffect} from 'react'
import './smallcart.css';
import imageThumb from '../../asset/image-product-1-thumbnail.jpg';
import deleteImage from '../../asset/icon-delete.svg';

const SmallCart = ({showCart,totalnumber,setTotalnumber,showtheCart}) => {

    const [text,setText] = useState('Your cart is empty.')
    

    console.log(text,'this the text')


    //  useEffect(() =>(
 
    //      setTheText('Your cart is empty')

        
    useEffect(() => {


        setText(totalnumber)

        

    },[totalnumber,text])


    // ),[thetext]) 


    const deleteEverything = () => {
        setTotalnumber(0)
        setText('')
    }


    const setData = () => {
       
    }

   
    
  return (
  <>

  <span className="cartNumber"> {totalnumber} </span>




     {showCart && <div className="whiteCard">
    <div className="cart">

    <h1>Cart</h1>
    

    <hr />

    <div className="cartDisplay"> 

      {text ? 
       <div className="textContainer">
       <div className="thumbnailtext">
         <img className="imageText" src={imageThumb} />
 
         <div className="text"> 
             <h3> Fall Limited Edition Sneakers</h3>
 
             <p className='textpay'>$125.00 x {totalnumber} <span> ${totalnumber * 125.00}.00</span></p>
             
          </div>
 
          <img  onClick={deleteEverything}  className="deleteText" src={deleteImage} />
 
 
       </div>
 
       <button className="checkoutB"> Checkout </button>
       </div>
 
             
      : 'Your cart is empty.'}

    </div>
  
</div>
    </div>
  }
  </>
  )
}

export default SmallCart
