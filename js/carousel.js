var $item = $('#carouselExampleIndicators .carousel-item'); // target only the first carousel
var $wHeight = $(window).height();
$item.eq(0).addClass('active');
$item.height($wHeight);
$item.addClass('full-screen');

$('#carouselExampleIndicators .carousel img').each(function() { // target only the images in the first carousel
  var $src = $(this).attr('src');
  var $color = $(this).attr('data-color');
  $(this).parent().css({
    'background-image' : 'url(' + $src + ')',
    'background-color' : $color
  });
  $(this).remove();
});

$(window).on('resize', function (){
  $wHeight = $(window).height();
  $item.height($wHeight);
});

$('#carouselExampleIndicators').carousel({ // target only the first carousel
  interval: 6000,
  pause: "false"
});