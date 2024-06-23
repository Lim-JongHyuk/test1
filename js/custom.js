$(document).ready(function () {
    var $mousePointer = $('#mouse-pointer'),
        $clickElements = $('a, button, input');

    // 업데이트 커서 포지션
    function moveCursor(e) {
        $mousePointer.css({
            "left": e.pageX,
            "top": e.pageY
        });
    }

    // 호버 이펙트
    $clickElements.mouseenter(function () {
        $mousePointer.addClass('hover');
    });

    $clickElements.mouseleave(function () {
        $mousePointer.removeClass('hover');
    });

    // 움직임에 따른 커서 포지션
    $(window).on('mousemove', moveCursor);
});
