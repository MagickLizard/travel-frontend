import React from 'react';

const ImageList = (props) => {

 const images = props.images.map(({description, id, urls}) => {
    return  <img key={id}src={urls.regular} alt={description}> 
    </img>
  })
return  <div> ImageList {images} </div>
}

export default ImageList;
