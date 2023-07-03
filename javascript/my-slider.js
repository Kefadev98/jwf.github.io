let slider = tns({
  container: ".my-slider",
  slideBy: "1",
  speed: 400,
  nav: false,
  autoplay: true,
  autoplayButtonOutput: false,
  controls: true,
  controlsContainer: "#controls",
  prevButton: ".previous",
  nextButton: ".next",
  responsive: {
    1600: {
      items: 4,
      gutter: 20,
    },
    1024: {
      items: 3,
      gutter: 20,
    },
    768: {
      items: 2,
      gutter: 20,
    },
    480: {
      items: 1,
    },
  },
});

let sliderTwo = tns({
  container: ".second-slider",
  slideBy: "1",
  speed: 400,
  nav: false,
  autoplay: true,
  autoplayButtonOutput: false,
  controls: true,
  controlsContainer: "#second-controls",
  prevButton: ".second-previous",
  nextButton: ".second-next",
  responsive: {
    1600: {
      items: 2,
      gutter: 20,
    },
    1024: {
      items: 1,
      gutter: 20,
    },
    768: {
      items: 1,
      gutter: 20,
    },
    480: {
      items: 1,
    },
  },
});

let sliderThree = tns({
  container: ".third-slider",
  slideBy: "1",
  speed: 400,
  nav: false,
  autoplay: true,
  autoplayButtonOutput: false,
  controls: true,
  controlsContainer: "#third-controls",
  prevButton: ".third-previous",
  nextButton: ".third-next",
  responsive: {
    1600: {
      items: 2,
      gutter: 20,
    },
    1024: {
      items: 1,
      gutter: 20,
    },
    768: {
      items: 1,
      gutter: 20,
    },
    480: {
      items: 1,
    },
  },
});
