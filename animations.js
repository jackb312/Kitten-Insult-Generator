var duration = 250;
var positions = [
  {
    x: "-=15%",
    y: "+=25"
  },
  {
    x: "-=15%",
    y: "+=10"
  },
  {
    x: "-=15%",
    y: "-=10"
  },
  {
    x: "-=15%",
    y: "-=25"
  },



  {
    x: "+=15%",
    y: "+=25"
  },
  {
    x: "+=15%",
    y: "+=10"
  },
  {
    x: "+=15%",
    y: "-=10"
  },
  {
    x: "+=15%",
    y: "-=25"
  },
];

var catAnimation = anime({
  targets: ".sway",
  easing: "linear",
  loop: true,
  autoplay: true,
  translateX: positions.map(p => ({value: p.x, duration})),
  translateY: positions.map(p => ({value: p.y, duration})),
});