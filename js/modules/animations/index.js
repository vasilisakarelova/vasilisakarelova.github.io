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

const dashOffset = anime({
  targets: '.anime--dash',
  strokeDashoffset: function(el) {
    var pathLength = el.getTotalLength();
    el.setAttribute('stroke-dasharray', pathLength);
    return [-pathLength, 0];
  },
  stroke: {
    value: function(el, i) {
      return 'rgb(200,'+ i * 8 +',150)';
    },
    easing: 'linear',
    duration: 2000,
  },
  loop: true,
  easing: 'easeOutExpo',
  direction: 'alternate'
});
