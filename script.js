// Full image view //

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("myModal");
  const fullImage = document.getElementById("fullImage");
  let currentIndex = 0;

  const images = document.querySelectorAll(".imgs img");
  images.forEach((img, index) => {
    img.addEventListener("click", function () {
      currentIndex = index;
      showImage();
      modal.style.display = "block";
    });
  });

  const closeBtn = document.querySelector(".close");
  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  function showImage() {
    fullImage.src = images[currentIndex].src;
  }

  function changeImage(n) {
    currentIndex += n;
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    showImage();
  }

  const prevbtn = document.querySelector(".prev");
  prevbtn.addEventListener("click", function () {
    changeImage(-1);
  });
  const nextbtn = document.querySelector(".next");
  nextbtn.addEventListener("click", function () {
    changeImage(1);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      changeImage(-1);
    } else if (event.key === "ArrowRight") {
      changeImage(1);
    }
  });
});

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

function raf(time) {
  lenis.raf(time);
  ScrollTrigger.update();
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
