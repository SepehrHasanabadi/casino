import { useEffect, useState } from "react";



export const ApiCall = <T,>(url: string, params: any, delay?: number): [T|undefined, any] => {
  const [data, setData] = useState<T>();

  useEffect(() => {
    const call = async () => {
      await fetch(
        url,
        {
          ...params,
        },
      ).then(response => {
        if (response.status.toString().startsWith('2')) {
          response.json().then(data => setData(data))
        }
      }).catch(e => console.log('error', e));
    };
    call();
    if (delay) {
      const interval = setInterval(call, delay);
      return () => clearInterval(interval);
    }
  }, []);
  return [data, setData];
}