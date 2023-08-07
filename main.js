$(document).ready(function() {
    // 이미지 슬라이더 설정
    $('.imgs').slick({
      dots: true, // 페이지 점 표시
      autoplay: false, // 자동 슬라이드 비활성화
      prevArrow: $('.prev'), // 이전 버튼 클래스
      nextArrow: $('.next'), // 다음 버튼 클래스
    });
  });
  