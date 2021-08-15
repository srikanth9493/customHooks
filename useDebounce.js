import {useEffect, useState} from "react";

const useDebounce = (value, delay) => {
  const [searchtext, setsearchtext] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => setsearchtext(value), delay);
    return () => {
      clearTimeout(handler);
    };
  }, [delay, value]);

  return searchtext;
};

export default useDebounce;

