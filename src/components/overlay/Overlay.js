import React ,{useState} from 'react';
import './Overlay.css';
import  Image1 from '../../asset/image-product-1.jpg';
import  Image2 from '../../asset/image-product-2.jpg';
import  Image3 from '../../asset/image-product-3.jpg';
import  Image4 from '../../asset/image-product-4.jpg';
import  Close from  '../../asset/icon-close.svg';

 const  Overlay = ({setTheOverlay,image})  => {

    const[mainImage,setmainImage] = useState(image);

    
  
   const onChangeImage = (e) => {
    
    console.log(e.target.src)

    setmainImage(e.target.src)
   }

  return (
    <div className="overlay">

         

<img onClick={setTheOverlay} className="close" src={Close}/>
         <div className="mainImag">

<img src={mainImage}  alt="image" />

</div>

<div className="subImage">

<img onClick={onChangeImage} className='images imageborder' src={Image1}  alt="image" />
<img  onClick={onChangeImage}className="images imageborder" src={Image2}  alt="image" />
<img  onClick={onChangeImage}className="images imageborder" src={Image3}  alt="image" />
<img  onClick={onChangeImage}className="images imageborder" src={Image4}  alt="image" />

</div>
      
    </div>
  )
}


export default Overlay