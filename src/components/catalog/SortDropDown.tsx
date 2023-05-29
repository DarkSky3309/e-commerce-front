import React, { Dispatch, FC, SetStateAction } from 'react';
import { PRODUCT_SORT } from '@/enums/enums';

const SortDropDown:FC<{setSortType: Dispatch<SetStateAction<PRODUCT_SORT>>, sortType: PRODUCT_SORT}> = ({sortType, setSortType}) => {
  return (
    <select value={sortType} onChange={(e) => {
      setSortType(e.target.value as any);
    }}>
      {
        (Object.keys(PRODUCT_SORT) as Array<keyof typeof PRODUCT_SORT>).map((key) => (
          <option
                  key={key}
                  value={PRODUCT_SORT[key]}
                  >
            {PRODUCT_SORT[key]}
          </option>
        ))
      }
      
    </select>
  );
};

export default SortDropDown;