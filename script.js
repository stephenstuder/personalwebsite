const swup = new Swup();


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

