import React, { FC, PropsWithChildren } from 'react';

interface IHeadingProps {
  className?: string;
}
const Heading :FC<PropsWithChildren<IHeadingProps>> = ({ className, children}) => {
  return (
    <h1 className={`font-semibold text-3xl ${className}`}>
      {children}
    </h1>
  );
};

export default Heading;