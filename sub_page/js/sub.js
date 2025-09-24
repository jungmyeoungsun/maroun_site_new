$(function () {
    $('.ban_close').on('click', function () {
        $('#popupBanner').slideUp(200);
    });

    const catOpen = $('.cat_open');
    const catClose = $('.cat_close');
    const category = $('#categoryMenu');

    catClose.hide();
    category.hide();

    catOpen.on('click', function () {
        category.slideDown(200);
        catOpen.hide();
        catClose.show();
    });

    catClose.on('click', function () {
        category.slideUp(200);
        catClose.hide();
        catOpen.show();
    })
}) //popup_banner, category_menu



$(function () {

    $(window).scroll(function () {
        if ($(window).scrollTop() >= 500) {
            $('.gnb_outer').addClass('fixed');

        } else {
            $('.gnb_outer').removeClass('fixed');
        };
    });
}) //gnb_outer_fixed


$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 500) {
            $('.btn_top').fadeIn(500);
        } else {
            $('.btn_top').fadeOut(500);
        }
    });

    $('.btn_top').click(function (e) {
        e.preventDefault();
        $(window).scrollTo(this.hash || 0, 500);
    })
}); // aside_btn_top



$(function () {
    const wingOpen = $('.wing_btn.open');
    const wingClose = $('.wing_btn.close');
    const wingBanner = $('.wing_banner');

    wingOpen.on('click', function () {
        wingBanner.show(200);
        wingOpen.hide();
        wingClose.show();
    });

    wingClose.on('click', function () {
        wingBanner.hide(200);
        wingClose.hide();
        wingOpen.show();
    });
}); // wing_box