import React, { FC, ReactElement, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { JSXElement } from '@babel/types';

const Carousel: FC<{ arrayOfElement: ReactElement[] }> = ({ arrayOfElement }) => {
  const carousel = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [isDragStart, setIsDragStart] = useState(false);
  const [pageX, setPageX] = useState(0);
  const [pageLeft, setPageLeft] = useState(0);

  const dragEnd = (e: any) => {
    setIsDragStart(false);
  }

  const dragStart = (e: any) => {
    setIsDragStart(true);
    setPageX(e.pageX);
    setPageLeft(carousel.current.scrollLeft);
  }

  const dragStartTouch = (e: any) => {
    setIsDragStart(true);
    setPageX(e.touches[0].pageX);
    setPageLeft(carousel.current.scrollLeft);
  }

  const drag = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isDragStart)  return;
    e.preventDefault()
    let positionDiff = e.pageX - pageX;
    carousel.current.scrollLeft = pageLeft - positionDiff;
  };

  const dragTouch = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragStart)  return;
    let positionDiff = e.touches[0].pageX - pageX;
    carousel.current.scrollLeft = pageLeft - positionDiff;
  }

  return (
    <div className={'max-w-full'}>
      <div onMouseMove={drag}
           onMouseDown={dragStart}
           onMouseUp={dragEnd}
           onTouchStart={dragStartTouch}
           onTouchEnd={dragEnd}
           onTouchMove={dragTouch}
           className={'whitespace-nowrap flex overflow-hidden cursor-pointer select-none'}
           ref={carousel}>
        {arrayOfElement}
      </div>
    </div>
  );
};

export default Carousel;