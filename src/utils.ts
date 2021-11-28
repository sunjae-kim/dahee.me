export const throttle = <T>(callback: (prams: T) => void, delay: number) => {
  let timer = null as null | number;
  return (param: T) => {
    if (!timer) {
      callback(param);
      timer = window.setTimeout(() => {
        timer = null;
      }, delay);
    }
  };
};
