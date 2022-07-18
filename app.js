const progress = document.getElementById("progress"),
  circles = document.querySelectorAll(".circle"),
  prev = document.getElementById("prev"),
  next = document.getElementById("next");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  update();
});

prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

function update() {
  circles.forEach((circle, i) => {
    if (i < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  let progressWidth = ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
  progress.style.width = progressWidth;

  if (currentActive == 1) {
    prev.disabled = true;
  } else if (currentActive == circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
