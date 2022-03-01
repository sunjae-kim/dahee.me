import snow from '@/vendors/particleJs/options/snow.json';

type Particle = 'snow';
export namespace Particle {
  export const init = (): any => {
    return new Promise(resolve => {
      let script = document.createElement('script');
      script.onload = () => resolve((window as any).particlesJS);
      script.crossOrigin = 'anonymous';
      script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
      document.head.append(script);
    });
  };

  export const particleOptions: { [key in Particle]: any } = {
    snow,
  };
}
