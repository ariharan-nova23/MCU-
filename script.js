const cards = document.querySelectorAll('.card');

const leftBtn = document.querySelector('.left');

const rightBtn = document.querySelector('.right');

const slider = document.querySelector('.slider');

let activeIndex = 1;

function updateSlider(){

  cards.forEach((card,index)=>{

    card.classList.remove('active');

    if(index === activeIndex){

      card.classList.add('active');

    }

  });

  const offset = (activeIndex * -430) + 430;

  slider.style.transform = `translateX(${offset}px)`;

}

rightBtn.addEventListener('click',()=>{

  activeIndex++;

  if(activeIndex >= cards.length){

    activeIndex = 0;

  }

  updateSlider();

});

leftBtn.addEventListener('click',()=>{

  activeIndex--;

  if(activeIndex < 0){

    activeIndex = cards.length - 1;

  }

  updateSlider();

});

cards.forEach((card,index)=>{

  card.addEventListener('click',()=>{

    activeIndex = index;

    updateSlider();

  });

});

updateSlider();