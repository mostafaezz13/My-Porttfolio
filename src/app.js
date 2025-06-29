// // Background
// // Wait for the DOM to be fully loaded
// document.addEventListener("DOMContentLoaded", function () {
//   // Get the canvas element
//   const canvas = document.getElementById("particles-canvas");
//   if (!canvas) return;

//   const ctx = canvas.getContext("2d");
//   let width = window.innerWidth;
//   let height = Math.min(window.innerHeight, 800);

//   // Resize canvas function
//   function resizeCanvas() {
//     width = window.innerWidth;
//     height = Math.min(window.innerHeight, 800);
//     canvas.width = width;
//     canvas.height = height;
//   }

//   window.addEventListener("resize", resizeCanvas);
//   resizeCanvas();

//   // Create particles array
//   const particles = [];
//   const particleCount = Math.min(50, Math.floor(width / 30));

//   // Initialize particles
//   for (let i = 0; i < particleCount; i++) {
//     particles.push({
//       x: Math.random() * width,
//       y: Math.random() * height,
//       size: Math.random() * 5 + 1,
//       speedX: Math.random() * 2 - 1,
//       speedY: Math.random() * 2 - 1,
//       hue: Math.random() * 60 + 240, // Purple-blue range
//     });
//   }

//   // Draw a single particle
//   function drawParticle(p) {
//     const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
//     gradient.addColorStop(0, `hsla(${p.hue}, 100%, 70%, 0.8)`);
//     gradient.addColorStop(1, `hsla(${p.hue}, 100%, 70%, 0)`);

//     ctx.beginPath();
//     ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
//     ctx.fillStyle = gradient;
//     ctx.fill();
//   }

//   // Draw connections between particles
//   function drawConnections() {
//     ctx.strokeStyle = "rgba(155, 135, 245, 0.52)";
//     ctx.lineWidth = 0.5;

//     for (let i = 0; i < particles.length; i++) {
//       for (let j = i + 1; j < particles.length; j++) {
//         const dx = particles[i].x - particles[j].x;
//         const dy = particles[i].y - particles[j].y;
//         const distance = Math.sqrt(dx * dx + dy * dy);

//         if (distance < 150) {
//           ctx.beginPath();
//           ctx.moveTo(particles[i].x, particles[i].y);
//           ctx.lineTo(particles[j].x, particles[j].y);
//           ctx.stroke();
//         }
//       }
//     }
//   }

//   // Animation loop
//   function animate() {
//     ctx.clearRect(0, 0, width, height);

//     particles.forEach((p) => {
//       p.x += p.speedX;
//       p.y += p.speedY;

//       // Bounce off edges
//       if (p.x <= 0 || p.x >= width) p.speedX *= -1;
//       if (p.y <= 0 || p.y >= height) p.speedY *= -1;

//       drawParticle(p);
//     });

//     drawConnections();
//     requestAnimationFrame(animate);
//   }

//   // Start animation
//   animate();
// });

// Mouse cursor effect script
document.addEventListener("DOMContentLoaded", function () {
  // Create cursor element if it doesn't exist
  if (!document.querySelector(".custom-cursor")) {
    const cursorElement = document.createElement("div");
    cursorElement.className = "custom-cursor";
    document.body.appendChild(cursorElement);
  }
  const cursor = document.querySelector(".custom-cursor");
  let mousePosition = { x: 0, y: 0 };
  let position = { x: 0, y: 0 };
  let isPointer = false;
  let isHidden = false;
  let isClicking = false;

  // Handle smooth cursor movement
  function updateCursor() {
    const smoothFactor = 0.12; // Adjust for smoother movement

    // Calculate distance between actual mouse position and current position
    const dx = mousePosition.x - position.x;
    const dy = mousePosition.y - position.y;

    // Apply smooth transition effect
    position.x += dx * smoothFactor;
    position.y += dy * smoothFactor;

    // Update cursor position
    cursor.style.left = `${position.x}px`;
    cursor.style.top = `${position.y}px`;

    // Set classes for different states
    cursor.className = "custom-cursor";
    if (isPointer) {
      cursor.classList.add("scale");
    }
    if (isClicking) {
      cursor.classList.add("clicking");
    }
    if (isHidden) {
      cursor.classList.add("hidden");
    }

    requestAnimationFrame(updateCursor);
  }

  // Start cursor animation
  requestAnimationFrame(updateCursor);

  // Cursor event listeners
  document.addEventListener("mousemove", (e) => {
    mousePosition.x = e.clientX;
    mousePosition.y = e.clientY;

    // Check if the cursor is over a clickable element
    const target = e.target;
    isPointer =
      target.tagName === "A" ||
      target.tagName === "BUTTON" ||
      target.closest("a") ||
      target.closest("button") ||
      window.getComputedStyle(target).cursor === "pointer";
  });

  document.addEventListener("mousedown", () => {
    isClicking = true;
  });

  document.addEventListener("mouseup", () => {
    isClicking = false;
  });

  document.addEventListener("mouseleave", () => {
    isHidden = true;
  });

  document.addEventListener("mouseenter", () => {
    isHidden = false;
  });
});
