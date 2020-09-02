let body = document.body;
let toggleBtn = document.querySelector('.toggle-btn');
let currentTheme = localStorage.getItem('currentTheme');



if (currentTheme) {
    body.classList.add('dark-them');
}


toggleBtn.addEventListener('click', function () {
    body.classList.toggle('dark-them');

    if (body.classList.contains('dark-them')) {
        localStorage.setItem('currentTheme', 'themeActive');
    }else {
        localStorage.removeItem('currentTheme');
    }
})