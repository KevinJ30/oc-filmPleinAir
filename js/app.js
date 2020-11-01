(function() {
    let buttonMobile = document.querySelector('.btn-nav-mobile');
    let mainMenu = document.querySelector('#navigation');

    buttonMobile.addEventListener('click', function(event) {
        event.preventDefault();
        mainMenu.classList.toggle('active')
        buttonMobile.classList.toggle('active');
    });
})()