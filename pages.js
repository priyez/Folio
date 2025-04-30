import { introAnim } from './js/animation';

function showAboutPage() {
    const about = document.querySelector('.aboutpage');
    const main = document.querySelector('.folio-home__section');

    about.classList.add('visible');
    main.classList.remove('visible');
    introAnim();
}

function closeAboutPage() {
    const about = document.querySelector('.aboutpage');
    const main = document.querySelector('.folio-home__section');
   

    about.classList.remove('visible');
    main.classList.add('visible');
}

// Event listeners for buttons
document.querySelector('.toggle-button').addEventListener('click', showAboutPage);
document.querySelector('.aboutpage .close-button').addEventListener('click', closeAboutPage);