let swiper = new Swiper(".clientsSwiper", {
    slidesPerView: 3,
    spaceBetween: 100,
    breakpoints: {
        1300: {
            slidesPerView: 3,
            spaceBetween: 100
        },
        1200: {
            spaceBetween: 50,
        },
        1100: {
            spaceBetween: 20,
        },
        800: {
            slidesPerView: 2,
        },
        600: {
            slidesPerView: 1.5,
        },
        320: {
            slidesPerView: 1.15,
            spaceBetween: 40
        }

    },
    navigation: {
        nextEl: '.clients__button-next',
        prevEl: '.clients__button-prev',
    },
});


const anim = document.querySelectorAll('.customize__gears-img')

setTimeout(() => {
    anim.forEach((item) => {
        item.classList.add('animated')
    })
}, 2000);

setTimeout(() => {
    anim[0].style.animation = 'gears 4s linear infinite';
    anim[2].style.animation = 'gears 4s linear reverse infinite';
}, 2300);




let options = {
    root: null,
    rootMargin: '5px',
    threshold: 0.5
}

let callback = function(enteries, observer) {
    enteries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log('find', entry)
            entry.target.classList.add('active')
            observer.unobserve(entry.target)
        }
    });
}

let observer = new IntersectionObserver(callback, options);

let targets = document.querySelectorAll('.anim')
targets.forEach(target => {
    observer.observe(target)
})