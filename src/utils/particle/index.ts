import snow from '@/utils/particle/options/snow.json';

type Particle = 'snow';
export namespace Particle {
  const preload = (): any => {
    return new Promise(resolve => {
      let script = document.createElement('script');
      script.onload = () => resolve((window as any).particlesJS);
      script.crossOrigin = 'anonymous';
      script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
      document.head.append(script);
    });
  };

  export const initParticleJs = async (particle: Particle) => {
    let particlesJS = await preload();
    particlesJS('particles-js', particleOptions[particle]);
  };

  const particleOptions: { [key in Particle]: any } = {
    snow,
  };
}
