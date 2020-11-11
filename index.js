function activeSwiper() {
  if (window.innerWidth < 768) {
    var swiper = new Swiper(".swiper-container", {
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
    });
  }
}
activeSwiper();
