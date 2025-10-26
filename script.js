// script.js

(function () {
  const line = document.getElementById('line');
  if (!line) return;

  // Start angle in degrees
  let angle = 0;

  // Update function: set transform with translate to keep element centered
  function updateRotation() {
    // We include translate(-50%, -50%) so the element remains centered at top/left:50%
    line.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
  }

  // Initial paint
  updateRotation();

  // Increase by 2 degrees every 20 milliseconds (smooth, continuous)
  setInterval(() => {
    angle = (angle + 2) % 360; // keep angle bounded (optional)
    updateRotation();
  }, 20);
})();
