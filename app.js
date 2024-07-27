const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelector('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');
const professions = ['Programmer', 'Web Developer', '3D Modeler'];
const profession_span = document.getElementById('profession-span');

var professionSpan = document.getElementById("profession-span"); // The span element to display the profession
var speed = 100; // Typing speed
var deleteSpeed = 50; // Deleting speed
var delayBetweenWords = 2000; // Delay between words

function typeWriter(professionIndex = 0, charIndex = 0, isDeleting = false) {
  var profession = professions[professionIndex];

  if (!isDeleting && charIndex < profession.length) {
    // Typing
    professionSpan.innerHTML = profession.substring(0, charIndex + 1);
    charIndex++;
    setTimeout(() => typeWriter(professionIndex, charIndex), speed);
  } else if (isDeleting && charIndex > 0) {
    // Deleting
    professionSpan.innerHTML = profession.substring(0, charIndex - 1);
    charIndex--;
    setTimeout(() => typeWriter(professionIndex, charIndex, true), deleteSpeed);
  } else if (!isDeleting && charIndex === profession.length) {
    // Wait efore deleting
    setTimeout(() => typeWriter(professionIndex, charIndex, true), delayBetweenWords);
  } else if (isDeleting && charIndex === 0) {
    // Move to the next profession
    professionIndex = (professionIndex + 1) % professions.length;
    setTimeout(() => typeWriter(professionIndex), speed);
  }
}

// Start the typewriter effect
typeWriter();

function PageTransitions(){
    //Button click active class
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function() {
            let currentBtn = document.querySelector('.active-btn');
            currentBtn.classList.remove('active-btn');
            this.className += ' active-btn';
        })
    }

    //Sections Active
    allSections.addEventListener('click', (e)=>{
        const id = e.target.dataset.id;
        if (id){

            //hide other sections
            sections.forEach((section)=>{
                section.classList.remove('active');
            })

            const element = document.getElementById(id);
            element.classList.add('active');

        }
    })

    //Toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', ()=>{
        let element = document.body;
        themeBtn.classList.toggle('light-mode');
        element.classList.toggle('light-mode');
    })

}

PageTransitions();