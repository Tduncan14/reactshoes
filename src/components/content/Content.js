import React ,{useState} from 'react'
import Overlay from '../overlay/Overlay';
import './Content.css'
import  Image1 from '../../asset/image-product-1.jpg';
import  Image2 from '../../asset/image-product-2.jpg';
import  Image3 from '../../asset/image-product-3.jpg';
import  Image4 from '../../asset/image-product-4.jpg';

const Content = ({setTheOverlay}) => {

  const[mainImage,setmainImage] = useState(Image1);
  const[lay,setLay] = useState(false);


  
   const onChangeImage = (e) => {
    
    console.log(e.target.src)

    setmainImage(e.target.src)
   }


  return (
    <>
    <div className="flexContent">

        <div className="left-c">


            <div className="mainImage">

              <img onClick={setTheOverlay} src={mainImage}  alt="image" />

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
              <h1> Fall Limited Edition <br /> Sneakers</h1>

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
             
                <img src={'./images/icon-minus.svg'} />
                <p class="zero">0</p>
                <img src={'./images/icon-plus.svg'} />
                 </div>



                <button className='Add-to-cart'>
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
