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
const startDate = new Date("2025-06-11T00:00:00");
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






// const countdownEl = document.getElementById("countdown"); // ID가 'countdown'인 요소 선택
// const startDate = new Date("2025-06-01T00:00:00"); // 시작 날짜 설정 (2025년 6월 1일 0시 0분 0초)
// const endDate = new Date(startDate.getTime() + 7 * 24 * 60 * 60 * 1000); // 시작 날짜로부터 7일 후를 종료 날짜로 설정

// // 숫자를 두 자릿수로 만드는 함수 (예: 5 -> "05")
// function pad(n) {
//     return String(n).padStart(2, "0");
// }

// // 카운트다운을 업데이트하는 함수
// function updateCountdown() {
//     const now = new Date(); // 현재 시간 가져오기
//     const diff = endDate - now; // 종료 시간과 현재 시간의 차이 (밀리초)

//     // 만약 차이가 0보다 작거나 같으면 (종료 시간이 지났으면)
//     if (diff <= 0) {
//         countdownEl.innerText = "세일이 종료되었습니다."; // 카운트다운 요소에 종료 메시지 표시
//         clearInterval(timer); // 타이머 중지
//         return; // 함수 종료
//     }

//     // 남은 시간을 일, 시, 분, 초로 계산
//     const days = Math.floor(diff / (1000 * 60 * 60 * 24)); // 밀리초를 일로 변환
//     const hours = Math.floor((diff / (1000 * 60 * 60)) % 24); // 남은 시간 중 시 계산
//     const minutes = Math.floor((diff / (1000 * 60)) % 60); // 남은 시간 중 분 계산
//     const seconds = Math.floor((diff / 1000) % 60); // 남은 시간 중 초 계산

//     // 계산된 시간을 '일 : 시 : 분 : 초' 형식으로 표시 (pad 함수로 두 자릿수 유지)
//     countdownEl.innerText = `${pad(days)} : ${pad(hours)} : ${pad(minutes)} : ${pad(seconds)}`;
// }

// updateCountdown(); // 페이지 로드 시 바로 카운트다운 업데이트
// const timer = setInterval(updateCountdown, 1000); // 1초(1000ms)마다 updateCountdown 함수 실행 (타이머 시작)
// //count_down


// 이 부분은 순수 JavaScript를 사용하여 특정 종료 날짜까지 남은 시간을 계산하고, ID가 countdown인 요소에 '일 : 시 : 분 : 초' 형식으로 표시하는 카운트다운 타이머를 구현합니다.

// startDate와 endDate를 설정하여 카운트다운의 시작과 끝을 정의합니다. 종료 날짜는 시작 날짜로부터 7일 후로 설정되어 있습니다.
// pad 함수는 숫자를 받아 항상 두 자릿수 문자열로 만들어 줍니다 (예: 5 -> "05").
// updateCountdown 함수는 현재 시간과 종료 시간의 차이를 계산하여 남은 일, 시, 분, 초를 구하고, 이를 countdownEl 요소에 표시합니다. 만약 종료 시간이 지났으면 "세일이 종료되었습니다." 메시지를 표시하고 타이머를 멈춥니다.
// updateCountdown() 호출로 페이지 로드 시 즉시 카운트다운을 표시합니다.
// setInterval(updateCountdown, 1000)는 updateCountdown 함수를 1초(1000밀리초) 간격으로 반복 실행하여 카운트다운이 실시간으로 줄어들게 합니다.




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

