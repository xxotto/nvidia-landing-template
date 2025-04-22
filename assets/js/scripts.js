// -----Play video on scroll -----
const autoPlayVideo = () => {
  const video = document.getElementById("demoVideo");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      });
    },
    {
      threshold: 0.3,
    }
  );
  observer.observe(video);
};

autoPlayVideo();

// ----- See More button -----
document.getElementById("seeMore").addEventListener("click", function () {
  let extra = document.getElementById("extraSections");
  if (extra.classList.contains("open")) {
    extra.classList.remove("open");
    this.textContent = "Show More";
  } else {
    extra.classList.add("open");
    this.textContent = "Show Less";
  }
});

// ----- Back to top button -----
const backToTopButton = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});
