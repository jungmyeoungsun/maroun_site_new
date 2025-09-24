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

    $(window).scroll(function () {
        if ($(window).scrollTop() >= 1600) {
            $('.detail_lab').addClass('fixed');

        } else {
            $('.detail_lab').removeClass('fixed');
        };

    });
}) //gnb_outer_fixed



document.addEventListener('DOMContentLoaded', function () {
    const mainImg = document.querySelector('.main_img img');
    const thumbnailImg = document.querySelectorAll('.sub_img img');

    thumbnailImg.forEach(function (thumbnail) {
        thumbnail.addEventListener('click', function () {
            mainImg.src = this.src;
        });
    });
}); //thumbnail_img_click



document.addEventListener('DOMContentLoaded', function () {

    $(function () {
        const Price = 437000;
        const numberInput = $('.number');
        const Total = $('.total');

        function updateTotal() {
            const quantity = numberInput.val();
            const totalPrice = quantity * Price;

            Total.text(totalPrice.toLocaleString() + '원');
        }

        numberInput.on('input', updateTotal);
        updateTotal();
    });
}); //total_price



function cart() {
    alert('장바구니에 상품을 담았습니다.')
}
function wishlist() {
    alert('관심상품이 등록되었습니다')
}



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
