$(document).ready(function(){


 $('#lang').click(function(){
  $('.lang').toggleClass('active');
 })

 $('.menu_btn').click(function(){
  if($('.hidden_gnb').hasClass('open')) {
    $('.hidden_gnb').removeClass('open');
  } else
  $('.hidden_gnb').addClass('open');
 });

 
 $('.menu_btn').click(function(){
  if($('.hidden_gnb').hasClass('open')) {
    $('.menu_btn').addClass('active');
  } else
  $('.menu_btn').removeClass('active');
 });




 
  var offset = $('.main_search').offset();
  console.log(offset);







 var mySwiper2 = new Swiper('.main_banner', {
  effect : 'fade',
  slidesPerView: 1,
  spaceBetween: 10,
  loop: 'true',
  pagination: {
    el: '.main-swiper-pagination',
    clickable: true,},
  on:{
    slideChangeTransitionEnd:function(){
      idx = this.realIndex+1; //swiper의 this
      $('#mvWrapper').removeClass('bg1 bg2 bg3');
      $('#mvWrapper').addClass('bg'+idx);
    }
  }
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


var swiper2 = new Swiper ('.contents', {
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
  pagination: {
    el: '.sec5-swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + ('0'+ (index + 1)) + '</span>';
    },
  },
})





  var msnry = new Masonry( '.grid', {
    itemSelector: '.grid-item',
    // columnWidth: 'calc(100% / 3)'
  });
    
    


});