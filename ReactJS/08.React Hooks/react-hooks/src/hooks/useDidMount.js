import { useEffect } from "react";

export default function useDidMount(func) { //custom hook that uses useEffect with an empty dependency array (at mount), but it is used just as a demo func
  useEffect(() => {
    func();
  }, []);
}
