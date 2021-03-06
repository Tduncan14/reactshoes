import React ,{useState,useEffect} from 'react'
import Overlay from '../overlay/Overlay';
import './Content.css'
import  Image1 from '../../asset/image-product-1.jpg';
import  Image2 from '../../asset/image-product-2.jpg';
import  Image3 from '../../asset/image-product-3.jpg';
import  Image4 from '../../asset/image-product-4.jpg';
import  left from '../../asset/icon-next.svg';
import  right from '../../asset/icon-previous.svg';

const Content = ({setTheOverlay,setImage,setTotalnumber,closetheCart}) => {

  const[mainImage,setmainImage] = useState(Image1);
  const[lay,setLay] = useState(false);
  const[total,setTotal] = useState(0)
  const[ totalCost,settotalCost] = useState(0);


  
   const onChangeImage = (e) => {
    
    console.log(e.target.src)

    setmainImage(e.target.src)
   }


   const addShoe = () => {
    
       
     setTotal(total + 1 )

   

   }

   const minusShoe = () => {
       
    if( total > 0){
    setTotal(total - 1 )

  

    }

  
    console.log(totalCost,'costMinus')

    if(total === 0){
       settotalCost(0)
    }

  }

  const totalPrice=()=> {

  
      settotalCost( total * 125.00)

      console.log(total,'this is the cost',totalCost)

      setTotalnumber(total)
      
      }


      const prev = (e) => {

  
        console.log(e.target,mainImage)
        console.log(mainImage.match() == Image1)
    
        const imagess = [Image1,Image2,Image3,Image4] ;
    
    
        if(mainImage.match(Image1) == Image1){
    
        }
    
        if(mainImage.match(Image2) == Image2){
           setmainImage(Image1)
        }
    
        if(mainImage.match(Image3) == Image3){
          setmainImage(Image2)
       }
       
       if(mainImage.match(Image4) == Image4){
        setmainImage(Image3)
     }
     
        
    
    
       }
    
       const next = () => {
    
        if(mainImage.match(Image1) == Image1){
          setmainImage(Image2)
        }
    
        if(mainImage.match(Image2) == Image2){
          setmainImage(Image3)
    
        }
    
        if(mainImage.match(Image3) == Image3){
          setmainImage(Image4)
       }
      
        
      }
    


  
  
  return (
    <>
    <div className="flexContent">

        <div className="left-c">


        <img onClick={prev} src={left} className="hiddens left" />
        <img onClick={next} src={right} className="hiddens right" />
            <div className="mainImage">

         

              <img  onClick={setTheOverlay} src={mainImage}  alt="image" />

            
            </div>

            <div className="subImages">

            <img onClick={onChangeImage} className='images imageborder' src={Image1}  alt="image" />
            <img  onClick={onChangeImage}className="images imageborder" src={Image2}  alt="image" />
            <img  onClick={onChangeImage}className="images imageborder" src={Image3}  alt="image" />
            <img  onClick={onChangeImage}className="images imageborder" src={Image4}  alt="image" />
              
            </div>

        </div>

        <div className="left-r">

            <h5 class="company-header">SNEAKER  COMPANY</h5>

            <div className="content">
              <h1 className="h1h1"> Fall Limited Edition <br /> Sneakers</h1>

              <p className="text-wrap">These low-profile sneakers are your perfect casual wear companion
                .Featuring a durable rubber outer sole, they'll withstand everything the weather can offer
              </p>

              
              <div className="money">
                <span class="price">$125.00</span>
                <span class="percentage">50%</span>
                <span class="slashPriced">$250.00</span>
              </div>

       

              <div className="addZone">

                <div className="grayZone">
             
                <img className='minus' onClick={minusShoe} src={'./images/icon-minus.svg'} />
                <p className="zero">{total}</p>
                <img  className='plusSign' onClick={addShoe} src={'./images/icon-plus.svg'} />
                 </div>



                <button  onClick={totalPrice} className='Add-to-cart'>
                  <img className="addCart" src="./images/icon-cart.svg" />
                  <p> Add to cart</p>
                </button>
              </div>
              
            </div>
            
            </div>
           
      
    </div>
  
    </>
  )
}

export default Content
