import anime from 'animejs';

const setDashoffset = (el) => {
  let l = el.getTotalLength();
  el.setAttribute('stroke-dasharray', l);
  return [l,0];
}

const bigCross = anime({
  targets: '.anime--rotate-big',
  transform: function() {
      return ['rotate(360 141.47 101.13)', 'rotate(0 141.47 101.13)'];
    },
  duration: 2000,
  loop: true
});

const smallCross = anime({
  targets: '.anime--rotate-small',
  transform: function() {
      return ['rotate(360 34.51 16.19)', 'rotate(0 34.51 16.19)'];
    },
  duration: 2000,
  loop: true
});

const smallCrossSlow = anime({
  targets: '.anime--slow-motion',
  transform: function() {
      return ['rotate(360 17.79 30.95)', 'rotate(0 17.79 30.95)'];
    },
  easing: 'linear',
  duration: 5000,
  loop: true,
  direction: 'normal'
});

const dots = anime({
  targets: '.anime--scale-dot',
  transform: ['translate(-20 -22) scale(1 2)', 'translate(0 0) scale(1 1)'],
  opacity: {
    value: [0, 1],
    easing: 'linear',
    duration: 100
  },
  loop: true
});

const zoom = anime({
  targets: '.anime--zoom',
  scale: {
    value: 1.3,
    duration: 150,
    easing: 'linear'
  },
  direction: 'alternate',
  loop: true
});

const dashOffsetDefaults = {
  targets: '.anime--dash',
  duration: 800,
  easing: 'easeOutExpo',
  direction: 'normal'
}

const dashOffset = anime(Object.assign({}, dashOffsetDefaults, {
  strokeDashoffset: function(el) {
    var pathLength = el.getTotalLength();
    el.setAttribute('stroke-dasharray', pathLength);
    return [-pathLength, 0];
  },
  complete: function() {
    anime(Object.assign({}, dashOffsetDefaults, {
      strokeDashoffset: function(el) {
        var pathLength = el.getTotalLength();
        el.setAttribute('stroke-dasharray', pathLength);
        return [0, pathLength];
      },
      complete: function() {
        dashOffset.restart();
      }
    }));
  }
}));
