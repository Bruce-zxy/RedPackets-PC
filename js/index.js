(function ($) {
    setInterval(MouseWheel, 50);
    $('.login').click(function () {
        $('.login_mask').removeClass('d_none');
        $('.login_body').removeClass('d_none');
    })
    $('.signin').click(function () {
        $('.login_mask').removeClass('d_none');
        $('.signin_body').removeClass('d_none');
    })
    $('.loginclose').click(function () {
        $('.login_mask').addClass('d_none');
    })
    $('.orderdetail').click(function () {
        $('.tips_mask').addClass('d_none');
    })
    $('.log_change').click(function () {
        if (this.innerHTML === '注册账号') {
            $('.login_body').addClass('d_none');
            $('.signin_body').removeClass('d_none');
        } else if (this.innerHTML === '登录') {
            $('.signin_body').addClass('d_none');
            $('.login_body').removeClass('d_none');
        }
    })
})(jQuery);

function MouseWheel(e) {
    // if (!$('.login_mask').hasClass('d_none')) {
    // 	document.documentElement.style.overflow='hidden';
    // } else {
    // 	document.documentElement.style.overflow='visible';
    // }
    if (!$('.nav-menu').hasClass('nav-navicon')) {
        $('.nav-menu').addClass('nav_background');
        $('.nav-menu li').addClass('nav_background');
    } else {
        $('.nav-menu').removeClass('nav_background');
    }
}

