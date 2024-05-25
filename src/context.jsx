import { createContext, useEffect, useState } from "react";

export const store = createContext(null);

const StoreProvider = (props) => {
  const [option, setOption] = useState("English");
  const StoreValue = {
    option,
    setOption,
  };
  useEffect(() => {
    console.log(option);
  });
  return <store.Provider value={StoreValue}>{props.children}</store.Provider>;
};

export default StoreProvider;
