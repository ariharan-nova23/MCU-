const cards = document.querySelectorAll('.card');
const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');

let activeIndex = 1;

function updateCards() {

  cards.forEach((card, index) => {

    card.classList.remove('active');

    if(index === activeIndex) {
      card.classList.add('active');
    }
  });
}

rightBtn.addEventListener('click', () => {

  activeIndex++;

  if(activeIndex >= cards.length) {
    activeIndex = 0;
  }

  updateCards();
});

leftBtn.addEventListener('click', () => {

  activeIndex--;

  if(activeIndex < 0) {
    activeIndex = cards.length - 1;
  }

  updateCards();
});

cards.forEach((card) => {

  card.addEventListener('mousemove', (e) => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 20;
    const rotateX = ((y / rect.height) - 0.5) * -20;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener('mouseleave', () => {

    if(card.classList.contains('active')) {
      card.style.transform = 'scale(1.08)';
    }
    else {
      card.style.transform = 'scale(0.9) rotateY(20deg)';
    }
  });
});