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



var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
}); //visual_main_swiper



const countdownEl = document.getElementById("countdown");
const startDate = new Date("2025-09-12T00:00:00");
const endDate = new Date(startDate.getTime() + 7 * 24 * 60 * 60 * 1000);

function pad(n) {
    return String(n).padStart(2, "0");
}

function updateCountdown() {
    const now = new Date();
    const diff = endDate - now;

    if (diff <= 0) {
        countdownEl.innerText = "세일이 종료되었습니다.";
        clearInterval(timer);
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    countdownEl.innerText = `${pad(days)} : ${pad(hours)} : ${pad(minutes)} : ${pad(seconds)}`;
}
updateCountdown();
const timer = setInterval(updateCountdown, 1000); //count_down





$(function () {

    $(window).scroll(function () {
        if ($(window).scrollTop() >= 500) {
            $('.gnb_outer').addClass('fixed');

        } else {
            $('.gnb_outer').removeClass('fixed');
        };
    });
}) //gnb_outer_fixed

