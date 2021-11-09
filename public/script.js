const throttle = (callback, delay) => {
  let timer = null;
  return param => {
    if (!timer) {
      callback(param);
      timer = window.setTimeout(() => {
        timer = null;
      }, delay);
    }
  };
};

const changeImg = () => {
  setTimeout(() => {
    const dah1 = document.querySelector('#dah1');
    const dah2 = document.querySelector('#dah2');
    dah1.classList.toggle('hidden');
    dah2.classList.toggle('hidden');
  }, 800);
};

const init = () => {
  const img1 = document.querySelector('#dah1');
  const img2 = document.querySelector('#dah2');
  const card = document.querySelector('#card');

  img1.addEventListener('load', () => card.classList.remove('hidden'));
  img1.src = 'dah1.jpeg';
  img2.src = 'dah2.jpeg';

  card.addEventListener(
    'click',
    throttle(() => {
      card.classList.toggle('flip');
      if (card.classList.contains('flip')) changeImg();
    }, 800),
  );
};

init();
