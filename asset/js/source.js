
// slide-flash
$('.slide-flash').slick({
    centerPadding: '60px',
    slidesToShow: 4,
    dots: true,
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style=""><i class="fa-solid fa-angle-left"></i></button>',
    nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""><i class="fa-solid fa-angle-right"></i></button>',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2
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
// slide-feedback
$('.slide-feedback').slick({
    centerPadding: '60px',
    slidesToShow: 3,
    dots: true,
    centerMode: true,
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style=""><i class="fa-solid fa-angle-left"></i></button>',
    nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""><i class="fa-solid fa-angle-right"></i></button>',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2
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




// countdown
$('[data-countdown]').each(function () {
    var $this = $(this), finalDate = $(this).data('countdown');
    $this.countdown(finalDate, function (event) {
        $this.html(event.strftime(`
        <ul class="cd-result">
          <li><span class="count-value">%D</span><span class="name">Ngày</span></li>
          <li><span class="count-value">%H</span><span class="name">Giờ</span></li>
          <li><span class="count-value">%M</span><span class="name">Phút</span></li>
          <li><span class="count-value">%S</span><span class="name">Giây</span></li>
        </ul>
        `));
    });
});