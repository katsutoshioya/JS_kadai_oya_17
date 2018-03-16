$(document).ready(function(){

  // MAIN
  $('#main div h1').hide();
  $('#main div h1').fadeIn(1500);
  $('#main div p').hide();
  setTimeout(function(){
    $('#main div p').fadeIn(2000);
  },500);

  // ITEM SELECT
  $('#tops li:nth-child(1)').on('click', function () {
    var elem ='<p><img src="images/tops_01.jpg" /></p>';
    $('.r_tops').html(elem);
  });
  $('#tops li:nth-child(2)').on('click', function () {
    var elem ='<p><img src="images/tops_02.jpg" /></p>';
    $('.r_tops').html(elem);
  });
  $('#tops li:nth-child(3)').on('click', function () {
    var elem ='<p><img src="images/tops_03.jpg" /></p>';
    $('.r_tops').html(elem);
  });
  $('#tops li:nth-child(4)').on('click', function () {
    var elem ='<p><img src="images/tops_04.jpg" /></p>';
    $('.r_tops').html(elem);
  });
  $('#tops li:nth-child(5)').on('click', function () {
    var elem ='<p><img src="images/tops_05.jpg" /></p>';
    $('.r_tops').html(elem);
  });
  $('#bottoms li:nth-child(1)').on('click', function () {
    var elem ='<p><img src="images/bottoms_01.jpg" /></p>';
    $('.r_bottoms').html(elem);
  });
  $('#bottoms li:nth-child(2)').on('click', function () {
    var elem ='<p><img src="images/bottoms_02.jpg" /></p>';
    $('.r_bottoms').html(elem);
  });
  $('#bottoms li:nth-child(3)').on('click', function () {
    var elem ='<p><img src="images/bottoms_03.jpg" /></p>';
    $('.r_bottoms').html(elem);
  });
  $('#bottoms li:nth-child(4)').on('click', function () {
    var elem ='<p><img src="images/bottoms_04.jpg" /></p>';
    $('.r_bottoms').html(elem);
  });
  $('#bottoms li:nth-child(5)').on('click', function () {
    var elem ='<p><img src="images/bottoms_05.jpg" /></p>';
    $('.r_bottoms').html(elem);
  });
  $('#shoes li:nth-child(1)').on('click', function () {
    var elem ='<p><img src="images/shoes_01.jpg" /></p>';
    $('.r_shoes').html(elem);
  });
  $('#shoes li:nth-child(2)').on('click', function () {
    var elem ='<p><img src="images/shoes_02.jpg" /></p>';
    $('.r_shoes').html(elem);
  });
  $('#shoes li:nth-child(3)').on('click', function () {
    var elem ='<p><img src="images/shoes_03.jpg" /></p>';
    $('.r_shoes').html(elem);
  });
  $('#shoes li:nth-child(4)').on('click', function () {
    var elem ='<p><img src="images/shoes_04.jpg" /></p>';
    $('.r_shoes').html(elem);
  });

  // ページトップ
  $('a[href^=#]').click(function() {
    // スクロールの速度
    var speed = 400; // ミリ秒
    // アンカーの値取得
    var href = $(this).attr("href");
    // 移動先を取得
    var target = $(href == "#" || href == "" ? 'html' : href);
    // 移動先を数値で取得
    var position = target.offset().top;
    // スムーススクロール
    $('body,html').animate({
      scrollTop: position
    }, speed, 'swing');
    return false;
  });

  // スライダー
  $('.slide').slick({
    autoplay: true,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

});
