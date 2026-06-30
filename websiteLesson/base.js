document.addEventListener('DOMContentLoaded', () => {
  const button3 = document.getElementById('button3');
  const button4 = document.getElementById('button4');
  const button5 = document.getElementById('button5');
  const body = document.body;

  // --- 1. Page Redirection Links ---
  button3.addEventListener('click', () => {
      window.location.href = "/P3/p3Home.html";
  });

  button4.addEventListener('click', () => {
      window.location.href = "/P4/p4Home.html";
  });

  button5.addEventListener('click', () => {
      window.location.href = "/P5/p5Home.html";
  });

  // --- 2. Dynamic Background Hover Effects ---
  // We grab all buttons inside the #buttons container
  const buttons = document.querySelectorAll('#buttons button');
  const originalBg = window.getComputedStyle(body).backgroundColor || 'black';

  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      // Automatically grabs whatever color the button is and sets it to the body
      const buttonColor = window.getComputedStyle(button).backgroundColor;
      body.style.backgroundColor = buttonColor;
    });

    button.addEventListener('mouseleave', () => {
      body.style.backgroundColor = originalBg;
    });
  });
});