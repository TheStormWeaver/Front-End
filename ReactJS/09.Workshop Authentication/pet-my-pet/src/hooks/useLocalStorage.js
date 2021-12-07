import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [state, setState] = useState(() => { // func used to set a dynamic initial state and to be able to save the data in localStorage
    try {
      let item = localStorage.getItem(key);

      return item ? JSON.parse(item) : initialValue; // if the item exists, it will be saved in the localStorage, otherwise it isn't changed
    } catch (err) {
      console.log(err);
      return initialValue;
    }
  });

  const setItem = (value) => { //the new data
    //Todo: add support for functions
    try {
      //save to local storage
      localStorage.setItem(key, JSON.stringify(value));

      setState(value);
    } catch (err) {
      console.log(err);
    }
    //save to state
  };

  return [state, setItem];
};

export default useLocalStorage;
