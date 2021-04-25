$(document).ready(function(){


 $('#lang').click(function(){
  $('.lang').toggleClass('active');
 })


 var mySwiper1 = new Swiper('.bg_slide', {
  effect : 'fade',
  slidesPerView: 1,
  spaceBetween: 10,
  loop: 'true'
})



 var mySwiper2 = new Swiper('.main_banner', {
  effect : 'fade',
  slidesPerView: 1,
  spaceBetween: 10,
  loop: 'true'
})




function setCurrentSlide(ele,index){
  $(".tab .swiper-slide").removeClass("selected");
  ele.addClass("selected");
  //swiper1.initialSlide=index;
}

var swiper1 = new Swiper('.tab', {
      slidesPerView: 4,
      paginationClickable: true,
      spaceBetween: 0,
      freeMode: true,
      loop: false,
      onTab:function(swiper){
        var n = swiper1.clickedIndex;
        alert(1);
      }
  });
swiper1.slides.each(function(index,val){
  var ele=$(this);
  ele.on("click",function(){
    setCurrentSlide(ele,index);
    swiper2.slideTo(index, 500, false);
    //mySwiper.initialSlide=index;
  });
});


var swiper2 = new Swiper ('.swiper2', {
  // direction: 'horizontal',
  loop: false,
  autoHeight: true,
  onSlideChangeEnd: function(swiper){
    var n=swiper.activeIndex;
    setCurrentSlide($(".tab .swiper-slide").eq(n),n);
    swiper1.slideTo(n, 500, false);
  }
});




var mySwiper = new Swiper('.sec5', {
  effect : 'fade',
  slidesPerView: 1,
  // spaceBetween: 10,
  loop: 'true',
  navigation: {
    nextEl: '.sec5 .btn.next',
    prevEl: '.sec5 .btn.prev',
  },
})



});