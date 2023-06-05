import React from 'react';

const AboutProduct = () => {
  return (
    <div>
      <h3 className={'font-bold text-3xl mt-10 mb-5'}>About this item</h3>
      <div className={'grid grid-cols-3'} style={{gridTemplateRows: '30px 300px', gridTemplateColumns: '1fr 1fr 5fr'}}>
        <h4 className={'order-1 font-bold'}>Specifications</h4>
        <div className={'order-2'}>
      </div>

        <div className={'order-4'}>
          <ul className={'text-gray flex gap-2 flex-col'}>
            <li>Lorem Ipsum</li>
            <li>Lorem Ip</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ips</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ip</li>
            <li>Lorem Ipsum</li>
          </ul>
        </div>
        <div className={'order-5 row-span-2'}>
          <ul className={'flex gap-2 flex-col'}>
            <li>Description</li>
            <li>Description</li>
            <li>Description</li>
            <li>Description</li>
            <li>Description</li>
            <li>Description</li>
            <li>Description</li>
          </ul>
        </div>
      <h4 className={'order-3 font-bold'}>Description</h4>
        <div className={'order-6 flex gap-3 flex-col'}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, accusantium adipisci alias asperiores
            aspernatur atque autem beatae commodi consequatur cumque cupiditate delectus doloremque doloribus
            dolorum, ducimus ea earum eius eligendi eos error est eum eveniet excepturi exercitationem expedita
            explicabo facere fugiat fugit harum hic illum impedit in incidunt ipsa ipsum iure laboriosam laborum
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, accusantium adipisci alias asperiores
            aspernatur atque autem beatae commodi consequatur cumque cupiditate delectus doloremque doloribus
            dolorum, ducimus ea earum eius eligendi eos error est eum eveniet excepturi exercitationem expedita
            explicabo facere fugiat fugit harum hic illum impedit in incidunt ipsa ipsum iure laboriosam laborum
          </p>

        </div>
      </div>

    </div>
  );
};

export default AboutProduct;