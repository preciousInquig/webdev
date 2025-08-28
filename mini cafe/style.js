// Falling Sakura Petals Animation
function createPetal() {
  const petal = document.createElement("div");
  petal.classList.add("petal");

  // Random horizontal start
  petal.style.left = Math.random() * window.innerWidth + "px";

  // Random size for variety
  const size = Math.random() * 20 + 10; // 10px to 30px
  petal.style.width = size + "px";
  petal.style.height = size + "px";

  // Random animation duration
  petal.style.animationDuration = Math.random() * 5 + 5 + "s"; 

  document.body.appendChild(petal);

  // Remove after it falls
  setTimeout(() => {
    petal.remove();
  }, 10000);
}

// Generate petals every 300ms
setInterval(createPetal, 300);
