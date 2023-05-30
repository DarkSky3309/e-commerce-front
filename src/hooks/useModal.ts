import React, { useEffect, useRef, useState } from 'react';

type TypeOut = {
  ref: React.MutableRefObject<any>;
  isShowing: boolean;
  setIsShowing: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useModal = (initialVisible: boolean): TypeOut => {
  const [isShowing, setIsShowing] = useState(initialVisible);
  const ref = useRef<HTMLElement>(null);
  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsShowing(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);
  return { ref, isShowing, setIsShowing };
}