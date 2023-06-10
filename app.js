
    let upButton = document.querySelector('.up-button');
    let downButton = document.querySelector('.down-button');

    let sidebar = document.querySelector('.sidebar');
    let mainSlide = document.querySelector('.main-slide');
    let slidesCount = sidebar.querySelectorAll('div').length;

    sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

    let activeSlideIndex = 0;


    upButton.addEventListener('click', () => {
        changeSlide('up')
    });
    downButton.addEventListener('click', () => {
        changeSlide('down')
    })

    let height = document.querySelector('.container').offsetHeight;

    function changeSlide(direction) {
        switch(direction) {
            case 'up': 
            activeSlideIndex++;
            if (activeSlideIndex === slidesCount) activeSlideIndex = 0;
            break;
            case 'down': 
            activeSlideIndex--;
            if (activeSlideIndex < 0) activeSlideIndex = slidesCount - 1;
            break;
        }

        mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
        sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
    }

