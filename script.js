const circle = document.querySelector('.circle');

let targetX = 0;
let targetY = 0;
let currentX = 0;
let currentY = 0;
let movementDelay = 0.1;  // Controls the "lag" or slowness of the mouse following

let enlargeTimeout;
let isEnlarged = false; // Track whether the circle is enlarged

document.addEventListener('mousemove', (e) => {
    targetX = e.pageX;  // Capture the mouse's X position
    targetY = e.pageY;  // Capture the mouse's Y position
});

document.addEventListener('mousedown', () => {
    // Add a delay before enlarging the circle on mouse down
    enlargeTimeout = setTimeout(() => {
        if (!isEnlarged) {
            circle.classList.add('enlarged'); // Add class to enlarge circle
            isEnlarged = true;
        }
    }, 100);  // Adjust the delay (200ms) before enlarging
});

document.addEventListener('mouseup', () => {
    clearTimeout(enlargeTimeout);  // Cancel enlargement if mouse is released early
    if (isEnlarged) {
        circle.classList.remove('enlarged'); // Reset the size
        isEnlarged = false;
    }
});

// Smoothly move the circle with a delay to follow the mouse position
function smoothMove() {
    currentX += (targetX - currentX) * movementDelay;  // Smooth transition for X position
    currentY += (targetY - currentY) * movementDelay;  // Smooth transition for Y position

    circle.style.left = `${currentX}px`;  // Update circle position
    circle.style.top = `${currentY}px`;  // Update circle position

    requestAnimationFrame(smoothMove);  // Keep the movement smooth
}

smoothMove();  // Start the smooth movement of the circle



function gamesRedirect() {
  window.location.href = "/games"
}

// Get all elements with the 'reveal-text' class
const revealElements = document.querySelectorAll('.reveal-text');

// Function to check if an element is in the viewport
const checkVisibility = () => {
  revealElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      // If element is in view, add the 'visible' class
      el.classList.add('visible');
    }
  });
};

// Listen for scroll events and trigger visibility check
window.addEventListener('scroll', checkVisibility);

// Trigger on page load in case the element is already in view
document.addEventListener('DOMContentLoaded', checkVisibility);
