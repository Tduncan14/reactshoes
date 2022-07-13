import React ,{useState,useEffect} from 'react';
import './Overlay.css';
import  Image1 from '../../asset/image-product-1.jpg';
import  Image2 from '../../asset/image-product-2.jpg';
import  Image3 from '../../asset/image-product-3.jpg';
import  Image4 from '../../asset/image-product-4.jpg';
import  Close from  '../../asset/icon-close.svg';
import  Next from  '../../asset/icon-next.svg';
import  Prev from  '../../asset/icon-previous.svg';

 const  Overlay = ({setTheOverlay,image})  => {

    const[mainImage,setmainImage] = useState(image);
    const [arr,setArray] = useState([]);
    const [active,setActive ] = useState(false);

  
    

    useEffect(() =>{
        window.scrollTo(20,20)


    },[])
  
   const onChangeImage = (e) => {
    
    console.log(e.target.src)

    setmainImage(e.target.src)
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
    <div className="overlay">

         

<img onClick={setTheOverlay} className="close" src={Close}/>



<div  onClick={prev} class="prev">
<img  className="prev-arr" src={Prev}/>
</div>

<div onClick={next} className='next'>
<img onClick className="next-arr" src={Next}/>
</div>




         <div className="mainImag">

<img src={mainImage}  alt="image" />

</div>

<div className="subImage">

<img onClick={onChangeImage} className={`images imageborder ` } src={Image1}  alt="image" />
<img  onClick={onChangeImage}className={`images imageborder`} src={Image2}  alt="image" />
<img  onClick={onChangeImage}className={`images imageborder`} src={Image3}  alt="image" />
<img  onClick={onChangeImage}className={`images imageborder`} src={Image4}  alt="image" />

</div>
      
    </div>
  )
}


export default Overlay