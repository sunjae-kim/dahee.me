export const preloadImg = (src: string) =>
  new Promise(resolve => {
    let img = new Image();
    img.onload = resolve;
    img.src = src;
  });

export const throttle = (callback: (prams: any) => void, delay: number) => {
  let timer = null as null | number;
  return (param: any) => {
    if (!timer) {
      callback(param);
      timer = window.setTimeout(() => {
        timer = null;
      }, delay);
    }
  };
};
