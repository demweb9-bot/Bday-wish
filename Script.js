function openGift(element) {
  if (!element.classList.contains('open')) {
    element.classList.add('open');
    showGiftMessage();
    popGiftSparkles();
  }
}

// Show the gift message
function showGiftMessage() {
  const msg = document.getElementById('gift-message');
  msg.classList.add('show');
}

// Pop sparkles from the gift box
function popGiftSparkles() {
  const group = document.getElementById('gift-sparkles');
  group.innerHTML = '';
  for (let i = 0; i < 16; i++) {
    let sparkle = document.createElement('div');
    sparkle.className = 'gift-sparkle';
    // random position in upper area of box
    sparkle.style.left = (Math.random()*75 + 10) + 'px';
    sparkle.style.top = (Math.random()*14 + 2) + 'px';
    sparkle.style.animationDelay = (Math.random()*0.6) + 's';
    group.appendChild(sparkle);
  }
  setTimeout(()=>group.innerHTML='', 1300);
}
