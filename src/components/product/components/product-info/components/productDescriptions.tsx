import React, { FC } from 'react';

const DescriptionItem:FC<{title:string, content:string}> = ({title, content}) => {
  return (
    <span className={'grid grid-cols-2'}>
      <span className={'text-gray'}>{title}</span>
      <span className={'font-bold'}>{content}</span>
    </span>
  );
};

const ProductDescriptions = () => {
  return (
    <div className={'w-1/4'}>
      <div className={'mb-4 flex flex-col gap-3'}>
        <DescriptionItem title={'Brand'} content={'Apple'}/>
        <DescriptionItem title={'Color'} content={'Blue'}/>
        <DescriptionItem title={'Lorem'} content={'Lorem'}/>
        <DescriptionItem title={'Lorem'} content={'Lorem'}/>
      </div>
      <ul className={'text-secondaryColor list-disc text-sm'}>
        <li className={' mb-2'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, accusantium</li>
        <li className={' mb-2'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, accusantium</li>
        <li className={' mb-2'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, accusantium</li>
        <li className={''}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, accusantium</li>
      </ul>
    </div>
  );
};

export default ProductDescriptions;