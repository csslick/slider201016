/** 
  ### slider 사용법 ###
  sliderStart() 슬라이더 재생
  sliderStop() 슬라이더 정지
**/
$(function () {
  var img_num = 0; // 이미지 번호
  var duration = 3000; // 인터벌 시간
  var slider;   // slider 실행 객체 변수

  // 초기화
  $('.slider > img').fadeOut();
  $('.slider > img').eq(img_num).fadeIn();

  // 
  function changeSlider(img_num) {
    // 전체 이미지 fadeOut
    $('.slider > img').fadeOut();
    // 현재 이미지 fadeIn
    $('.slider > img').eq(img_num).fadeIn();
    // pager UI 업데이트
    $('.pager > a').removeClass('active');
    $('.pager > a').eq(img_num).addClass('active');
  }

  // 슬라이더 재생
  function sliderStart() {
    slider = setInterval(function () {
      img_num = img_num + 1; // 다음 이미지 번호로
      // 마지막 이미지 번호이면 처음으로 
      if (img_num > 2) { img_num = 0; } 
      changeSlider(img_num);
    }, duration);
  }

  // 슬라이더 정지
  function sliderStop() {
    clearInterval(slider);
    console.log('stop');
  }

  sliderStart();

  // 마우스가 올라가면 슬라이더 정지
  $('.slider, .left, .right').hover(
    function () {
      sliderStop();
    },
    function () {
      sliderStart();
      console.log('start');
    }
  )

  // 이전 이미지 버튼
  $('.controls > .left').click(function () {
    img_num = img_num - 1
    if(img_num < 0) {
     img_num = 2;
    }
    console.log(img_num);
    changeSlider();
  })

  // 다음 이미지 버튼
  $('.controls > .right').click(function () {
    img_num = img_num + 1;
    if(img_num > 2) {
      img_num = 0;
    } 
    console.log(img_num);
    changeSlider();
  })

}) // $end
