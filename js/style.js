
const aboutInner = document.querySelector(".inner1"); 
const aboutLink = document.querySelector('a[href="#about"]'); 

const qualiInner = document.querySelector('.inner2');
const qualiLink = document.querySelector('a[href="#qualifications"]');

const skillInner = document.querySelector('.inner3');
const skillLink = document.querySelector('a[href="#skills"]');

const projectInner = document.querySelector('.inner4');
const projectLink = document.querySelector('a[href="#projects"]');

const contactInner = document.querySelector('.inner5');
const contactLink = document.querySelector('a[href="#contact"]');

aboutLink.addEventListener("click",()=> {
  aboutInner.classList.add("animate-float");
  setTimeout(() => {
    aboutInner.classList.remove("animate-float");
  }, 2000);
});

qualiLink.addEventListener('click',()=>{
    qualiInner.classList.add("animate-scale");
    setTimeout(()=>{
        qualiInner.classList.remove("animate-scale");
    },1500);
})

skillLink.addEventListener("click",()=>{
  skillInner.classList.add("animate-fade-in");
  setTimeout(()=>{
    skillInner.classList.remove("animate-fade-in");
  },2000);
})

projectLink.addEventListener("click",()=>{
  projectInner.classList.add("animate-project");
  setTimeout(()=>{
    projectInner.classList.remove("animate-project");
  },2000);
})

contactLink.addEventListener("click",()=>{
  contactInner.classList.add("animate-slide");
  setTimeout(()=>{
    contactInner.classList.remove("animate-slide");
  },2000);
})
