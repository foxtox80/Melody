$(document).ready(function () {
    let currentFloor = 2;
    let floorPath = $(".home-image path");
    let counterUp = $('.counter-up');
    let counterDown = $('.counter-down');
    floorPath.on("mouseover", function () {
        floorPath.removeClass('current-floor');
        currentFloor = $(this).attr('data-floor');
        $('.counter__number').text(currentFloor);
    });
    counterUp.on("click", function () {
        if (currentFloor < 17) {
            currentFloor++;
            usCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
            $('.counter__number').text(usCurrentFloor);
            floorPath.removeClass('current-floor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        };
    });
    counterDown.on("click", function () {
        if (currentFloor > 1) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
            $('.counter__number').text(usCurrentFloor);
            floorPath.removeClass('current-floor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        };
    });
});