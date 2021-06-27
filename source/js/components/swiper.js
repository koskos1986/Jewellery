const swiper = () => {
  const swiperBlock = document.querySelector('.js-swiper');

  if (swiperBlock) {
    const swiper = new Swiper('.js-swiper', {
      slidesPerView: 4,
      spaceBetween: 30,
      slidesPerGroup: 4,
      breakpoints: {
        320: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 30,
          pagination: {
            el: '.products__pagination',
            type: 'custom',
            renderCustom(swiper, current, total) {
              return `${current}&ensp;of&ensp;${total}`;
            },
          },
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          pagination: {
            el: '.products__pagination',
            clickable: true,
            type: 'bullets',
            renderBullet(index, className) {
              return '<button class="' + className + '" type="button" aria-label="Slide ' + (index + 1) + '">' + (index + 1) + '</button>';
            },
          },
        },
        1024: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          pagination: {
            el: '.products__pagination',
            clickable: true,
            type: 'bullets',
            renderBullet(index, className) {
              return '<button class="' + className + '" type="button" aria-label="Slide ' + (index + 1) + '">' + (index + 1) + '</button>';
            },
          },
        },
      },
      navigation: {
        nextEl: '.btn__slider--right',
        prevEl: '.btn__slider--left',
      },
    });
    swiper.init();
  }
};

swiper();
