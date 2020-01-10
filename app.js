
//content wrappers
const content = document.querySelector('.content');
const about = document.querySelector('.about');
const projectsWrapper = document.querySelector('.projectsWrapper');
const contactForm = document.querySelector('.contactForm');

//menu buttons
const aboutMenu = document.querySelector('#about');
const projectsMenu = document.querySelector('#projects');
const contactMenu = document.querySelector('#contact');

//todo make this less verbose
aboutMenu.addEventListener('click', function(){
    content.classList.remove('show');
    about.classList.remove('hide');
    projectsWrapper.classList.remove('show');
    contactForm.classList.remove('show');

    content.classList.add('hide');
    about.classList.add('show');
    projectsWrapper.classList.add('hide');
    contactForm.classList.add('hide');
});
projectsMenu.addEventListener('click', function(){
    content.classList.remove('show');
    about.classList.remove('show');
    projectsWrapper.classList.remove('hide');
    contactForm.classList.remove('show');
    
    content.classList.add('hide');
    about.classList.add('hide');
    projectsWrapper.classList.add('show');
    contactForm.classList.add('hide');
});
contactMenu.addEventListener('click', function(){
    content.classList.remove('show');
    about.classList.remove('show');
    projectsWrapper.classList.remove('show');
    contactForm.classList.remove('hide');
    
    content.classList.add('hide');
    about.classList.add('hide');
    projectsWrapper.classList.add('hide');
    contactForm.classList.add('show');
});

//handle contact form



//copy email address for the user
const emailIcon = document.querySelector('.emailIcon');
const email = 'stephenkstuder@gmail.com';

emailIcon.addEventListener('click', function(){
    navigator.clipboard.writeText(email).then(function() {
        console.log('Async: Copying to clipboard was successful!');
        alert('Email copied to your clipboard!');
      }, function(err) {
        console.error('Async: Could not copy text: ', err);
      });
      
});