!function () {
  var view = document.querySelector('.swiper-parent')
  var controller = {
    view: null,
    swiperoptions: {
      // Optional parameters
      loop: true,
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },},
    swiper: null,
    init: function (view) {
      this.view = view
      this.initswiper()
    },
    initswiper: function () {
      this.swiper = new Swiper(view.querySelector('.swiper-container'),this.swiperoptions
      )
    }
  }



  controller.init(view)
}.call()