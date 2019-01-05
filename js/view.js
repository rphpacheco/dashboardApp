window.onload = setTimeout(() => {
    let loader = document.querySelector('#preloader'),
    status = document.querySelector('#status'),
    content = document.querySelector('.content')
    
    loader.classList.toggle('none')
    status.classList.toggle('none')
    content.classList.toggle('fadein')
}, 2000);