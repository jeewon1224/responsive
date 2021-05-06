$(document).ready(function(){

  // 언어 옵션 토글
  $('#lang').click(function(){
    $('.lang').toggleClass('active');
  });


  //메뉴 버튼 클릭 시 히든 네비게이션 오픈
  $('.menu_btn').click(function(){
    if($('.hidden_gnb').hasClass('open')) {
      $('.hidden_gnb').removeClass('open');
      $('.header').removeClass('on');
      $('body').removeClass('hidden');

    } else{
    $('.hidden_gnb').addClass('open');
    $('.header').addClass('on');
    $('body').addClass('hidden');

    var tweenStagger = TweenMax.staggerFromTo('.hidden_gnb li', 1,
    {
      opacity :0,
      y:50,
    },
    {
     opacity:1,
     y:0
    },
    0.2
  );
  
    }
  });



  $('.hidden_gnb li').mouseover(function(){
    src = $(this).data('src');
    $('.hidden_bg').css({'background-image':'url('+ src +')'})
  })

  
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
    curr =$(this).scrollTop();
    if ( curr > offset.top ) {
      $('.header').addClass('fixed');
      // $('.header').css('background-color','white');
      // $('.header .gnb').css('color','black');
      // $('.header .menu_btn button i').css('background-color','#111');
      // $('#logo').attr("src", 'img/logo_hover.png');

    }else {
      $('.header').removeClass('fixed');
      // $('.header').css('background-color','transparent');
      // $('.header .gnb').css('color','white');
      // $('.header .menu_btn button i').css('background-color','#fff');
      // $('#logo').attr("src", 'img/logo.png');
    }
  });





// 메인 배너 슬라이드

 var mySwiper2 = new Swiper('.main_banner', {
  // effect : 'fade',
  loop: 'true',
  pagination: {
    el: '.main-swiper-pagination',
    clickable: true,
  },
  on:{
    slideChangeTransitionEnd:function(){
      idx = this.realIndex+1;
      $('#mvWrapper').removeClass('bg1 bg2 bg3 bg4');
      $('#mvWrapper').addClass('bg'+idx);
    }
  }
})






function setCurrentSlide(ele,index){
  $(".tab .swiper-slide").removeClass("selected");
  ele.addClass("selected");
}

var swiper1 = new Swiper('.tab', {
      slidesPerView: 4,
      paginationClickable: true,
      spaceBetween: 10,
      freeMode: true,
      loop: false,
      simulateTouch:true,

      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 4,
          spaceBetween: 40
        }
      }
  });



  $('.tab .swiper-slide').click(function(){
    idx =  $(this).index();
    swiper2.slideTo(idx);
  })

var swiper2 = new Swiper ('.contents', {
  loop: false,
  on:{
    slideChangeTransitionStart:function(){
      idx = this.realIndex;
     $('.tab .swiper-slide').removeClass('selected').eq(idx).addClass('selected');
    }
  }
});









var mySwiper = new Swiper('.sec5', {
  effect : 'fade',
  autoHeight: true,
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


var slide01 = new Swiper('.slide_01', {
  navigation: {
    nextEl: '.business_wrap .btn.next',
    prevEl: '.business_wrap .btn.prev',
  },
    simulateTouch : false,
    speed: 1500,
    parallax: true,
})

var slide02 = new Swiper('.slide_02', {
  simulateTouch : false,
  parallax: true,
  speed: 1500,

})

var slide03 = new Swiper('.slide_03', {
  simulateTouch : false,
  parallax: true,
  speed: 1500,

})



$('.business_wrap .next').click(function(){
  slide02.slideNext();
  slide03.slideNext();
})


$('.business_wrap .prev').click(function(){
  slide02.slidePrev();
  slide03.slidePrev();
})







  var msnry = new Masonry( '.grid', {
    itemSelector: '.grid-item',
  });
    
    


});