import React, { FC, ReactElement, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { IProduct } from '@/types/product.interface';
import { useQuery } from '@tanstack/react-query';
import { ProductService } from '@/services/product/product.service';
import { useRouter } from 'next/navigation';
const Carousel: FC<{ id: number | string }> = ({  id }) => {
  const { data } = useQuery(['get-similar'], () => ProductService.getSimilarProducts(id), {
    select: ({ data }) => data,
  });
  const carousel = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [isDragStart, setIsDragStart] = useState(false);
  const [pageX, setPageX] = useState(0);
  const [pageLeft, setPageLeft] = useState(0);
  const [isClick, setIsClick] = useState(false);
  const router = useRouter()

  const array = data?.map((product) => {
    return <Image key={product.id}
                  className={'box-border w-1/3 mr-1 last-of-type:mr-0 select-none'}
                  onClick={() => isClick ? redirect(product.slug) : null}
                  src={product.images[0]}
                  alt={product.name}
                  width={340} height={340}
                  draggable={false}/>;
  });
  const redirect = (slug: string) => {
    router.replace(`/product/${slug}`)
  }

  useEffect(() => {
    const handleMouseUp = (e: any) => {
      dragEnd(e);
    };
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);
  const dragEnd = (e: any) => {
    setIsDragStart(false);
  };

  const dragStart = (e: any) => {
    setIsClick(true)
    setIsDragStart(true);
    setPageX(e.pageX);
    setPageLeft(carousel.current.scrollLeft);
  };

  const dragStartTouch = (e: any) => {
    setIsClick(true)
    setIsDragStart(true);
    setPageX(e.touches[0].pageX);
    setPageLeft(carousel.current.scrollLeft);
  };

  const drag = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsClick(false)
    if (!isDragStart) return;
    e.preventDefault();
    let positionDiff = e.pageX - pageX;
    carousel.current.scrollLeft = pageLeft - positionDiff;
  };

  const dragTouch = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsClick(false)
    if (!isDragStart) return;
    let positionDiff = e.touches[0].pageX - pageX;
    carousel.current.scrollLeft = pageLeft - positionDiff;
  };

  return (
    <div className={'max-w-full'}>
      <div onMouseMove={drag}
           onMouseDown={dragStart}
           onMouseUp={dragEnd}
           onTouchStart={dragStartTouch}
           onTouchEnd={dragEnd}
           onTouchMove={dragTouch}
           className={'whitespace-nowrap flex overflow-hidden cursor-pointer select-none'}
           ref={carousel}
           draggable={false}>
        {array}
      </div>
    </div>
  );
};

export default Carousel;