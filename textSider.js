// slider.js
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import $ from 'jquery';
import 'slick-carousel';

export function initializeSlider(sliderSelector, jsonUrl, slickOptions) {
    function init() {
        fetch(jsonUrl)
            .then(response => response.json())
            .then(data => {
                const sliderContainer = document.querySelector(sliderSelector);
                if (sliderContainer) {
                    data.forEach(item => {
                        const slide = document.createElement('p');
                        slide.className = 'line';
                        slide.textContent = item;
                        sliderContainer.appendChild(slide);
                    });

                    $(sliderContainer).slick(slickOptions);
                }
            })
            .catch(error => console.error('Error fetching slider content:', error));
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init(); // DOM already ready
    }
}
