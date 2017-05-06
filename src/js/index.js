var swiper1 = new Swiper('.swiper-container-1', {
    pagination: '.swiper-pagination',
    direction: 'vertical',
    slidesPerView: 1,
    initialSlide:0,
    paginationClickable: true,
    mousewheelControl: true,
    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
      swiperAnimateCache(swiper); //隐藏动画元素
      swiperAnimate(swiper); //初始化完成开始动画
    },
    onSlideChangeEnd: function(swiper){
      swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
    }
});
var swiper2 = new Swiper('.swiper-container-2', {
  pagination: '.swiper-pagination-2',
  paginationClickable: false,
  direction: 'horizontal',
  prevButton:'.swiper-button-prev',
  nextButton:'.swiper-button-next',
});

$('.swiper-button-prev').on('click',function(){
  $('.ip-imgs').children('.iphone-actice').addClass('ha');
  $('.ha').prev().addClass('iphone-actice');
  $('.ha').removeClass('iphone-actice');
  $('.ip-imgs').children('.iphone-actice').next().removeClass('ha');
})
$('.swiper-button-next').on('click',function(){
  $('.ip-imgs').children('.iphone-actice').addClass('ha');
  $('.ha').next().addClass('iphone-actice');
  $('.ha').removeClass('iphone-actice');
  $('.ip-imgs').children('.iphone-actice').prev().removeClass('ha');
})
