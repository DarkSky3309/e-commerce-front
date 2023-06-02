import React, { FC, useState } from 'react';
import Image from 'next/image';

const ProductImages: FC<{images: string[], name: string}> = ({images, name}) => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  const changeImage = (image: string) => {
    setCurrentImage(image);
  }

  return (
    <div className={'overflow-hidden w-96'}>
      <Image style={{height: '400px', width: '400px'}} className={'object-contain'} src={currentImage} alt={name} width={400} height={400}/>
      <div className={'flex gap-3 mt-5'}>
        {images.map((image, index) => (
          <Image onClick={() => changeImage(image)} className={`w-24 h-24 object-contain cursor-pointer bg-bgColor`} key={index} src={image} alt={name} width={100} height={100}/>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;