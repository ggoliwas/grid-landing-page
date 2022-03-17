class Slider {
    constructor(images) {
        this.images = images;
        this.sliderArrayLength = this.images.length;
        this.currentSlide = 0;

        this.prevBtn = null;
        this.nextBtn = null;
        this.image = null;
        this.slide = null;
        this.ulDots = null;
        this.liDot = [];

        this.UiSelectors = {
            slide: '[data-slide]',
            buttonPrev: '[data-button-prev]',
            buttonNext: '[data-button-next]',
            dotsList: '[data-dots]',
            dotID: '[data-dotID]'
        }
    }

    initializeSlider() {
        this.slide = document.querySelector(this.UiSelectors.slide);
        this.prevBtn = document.querySelector(this.UiSelectors.buttonPrev);
        this.nextBtn = document.querySelector(this.UiSelectors.buttonNext);
        this.ulDots = document.querySelector(this.UiSelectors.dotsList);
        

        this.image = document.createElement('img');
        this.image.classList.add('slide__image');
        this.image.setAttribute('src', this.images[0]);

        this.slide.appendChild(this.image);

       

        this.createDots();

        this.addListener();
    }

    addListener() {
        this.prevBtn.addEventListener('click', () =>
            this.changeSlide(this.currentSlide - 1),
        );
        this.nextBtn.addEventListener('click', () =>
            this.changeSlide(this.currentSlide + 1),
        );

        document.addEventListener('keydown', (e) => {
            if (e.keyCode === 37) {
                this.changeSlide(this.currentSlide - 1);
            } else if (e.keyCode === 39) {
                this.changeSlide(this.currentSlide + 1);
            }
        });

        this.ulDots.addEventListener('click', (e) => {
            this.changeSlide(e.target.dataset.id);
            console.log(e.target.dataset.id);

        });

    }

    createDots() {
        for (var i = 0; i < this.sliderArrayLength; i++) {

            this.liDot = document.createElement('li');
            this.liDot.classList.add('slider__dot');
            this.liDot.setAttribute('data-id', i);
            this.ulDots.appendChild(this.liDot);
        }
    }

    changeSlide(id) {
        if (id < 0) id = this.sliderArrayLength - 1;
        if (id >= this.sliderArrayLength) id = 0;
        this.currentSlide = id;

        this.image.setAttribute('src', this.images[id]);
    }
}