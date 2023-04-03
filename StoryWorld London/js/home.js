document.addEventListener("DOMContentLoaded", function() {

  const outputDiv = document.getElementById('typewrite');
  console.log(outputDiv)

  
    const txt = 'Discover a World of Wonder at StoryWorld in London.';
  
    let i=0;
    
    const intervalId = setInterval(function(){
        outputDiv.textContent += txt[i];
        i++;
        if(i === txt.length){
            clearInterval(intervalId)
        }
    },100);


  const toggleBtn = document.querySelector('.toggle-btn');
  const nav = document.querySelector('.nav');
  const icon = document.querySelector('.toggle-btn i');

  toggleBtn.addEventListener('click', function() {
    nav.classList.toggle('nav-active');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
  });
});



const navbar = document.getElementById('navigationBar');

window.addEventListener('scroll', function() {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});




