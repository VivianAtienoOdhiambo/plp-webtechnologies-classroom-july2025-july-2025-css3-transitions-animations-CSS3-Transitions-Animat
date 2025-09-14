// Demonstrate scope and parameters
const greetingPrefix = "Hello"; // global variable

// Function with parameter + return value
function createGreeting(name) {
  let message = `${greetingPrefix}, ${name}!`; // local variable
  return message;
}

// Function to show greeting on the page
function showGreeting(name) {
  const greeting = createGreeting(name);
  document.getElementById('output').textContent = greeting;
}

// Trigger CSS a// Demonstrate scope and parameters
const greetingPrefix = "Hello"; // global variable

// Function with parameter + return value
function createGreeting(name) {
  let message = `${greetingPrefix}, ${name}!`; // local variable
  return message;
}

// Function to show greeting on the page
function showGreeting(name) {
  const greeting = createGreeting(name);
  document.getElementById('output').textContent = greeting;
}

// Trigger CSS animation dynamically
const box = document.getElementById('animatedBox');
const animateBtn = document.getElementById('animateBtn');

animateBtn.addEventListener('click', () => {
  box.classList.add('pulsing'); // add class triggers animation
  // Remove class after animation ends for reusability
  setTimeout(() => {
    box.classList.remove('pulsing');
  }, 3000);
});

// You can also trigger animation when the box itself is clicked:
box.addEventListener('click', () => {
  box.classList.add('pulsing');
  setTimeout(() => {
    box.classList.remove('pulsing');
  }, 3000);
});
nimation dynamically
const box = document.getElementById('animatedBox');
const animateBtn = document.getElementById('animateBtn');

animateBtn.addEventListener('click', () => {
  box.classList.add('pulsing'); // add class triggers animation
  // Remove class after animation ends for reusability
  setTimeout(() => {
    box.classList.remove('pulsing');
  }, 3000);
});

// You can also trigger animation when the box itself is clicked:
box.addEventListener('click', () => {
  box.classList.add('pulsing');
  setTimeout(() => {
    box.classList.remove('pulsing');
  }, 3000);
});
