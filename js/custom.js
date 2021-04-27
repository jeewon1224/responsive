$(document).ready(function(){

  // 언어 옵션 토글
  $('#lang').click(function(){
    $('.lang').toggleClass('active');
  });


  //메뉴 버튼 클릭 시 히든 네비게이션 오픈
  $('.menu_btn').click(function(){
    if($('.hidden_gnb').hasClass('open')) {
      $('.hidden_gnb').removeClass('open');
    } else
    $('.hidden_gnb').addClass('open');
  });

  
  // 히든 네비게이션 오픈 시 메뉴 close 버튼
  $('.menu_btn').click(function(){
    if($('.hidden_gnb').hasClass('open')) {
      $('.menu_btn').addClass('active');
    } else
    $('.menu_btn').removeClass('active');
  });



  // 헤더 백그라운드 색상 변경
  var offset = $( '.main_search' ).offset();
  console.log(offset);
  // .header .header_wrap h1 a img
  var logo = $('.header .header_wrap h1 a img');

  $( window ).scroll( function() {
    if ( $( document ).scrollTop() > offset.top ) {
      $('.header').css('background-color','white');
      $('.header .gnb').css('color','black');
      $('.header .menu_btn button i').css('background-color','#111');
      // $('.header .header_wrap h1 a img').find('img').attr("src", $(this).find('img').attr("src").replace("logo.png","logo_hover.png"));
      $('#logo').attr("src", 'img/logo_hover.png');

    }else {
      $('.header').css('background-color','transparent');
      $('.header .gnb').css('color','white');
      $('.header .menu_btn button i').css('background-color','#fff');
      $('#logo').attr("src", 'img/logo.png');
      

    }
  });





// 메인 배너 슬라이드

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
      idx = this.realIndex+1;
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