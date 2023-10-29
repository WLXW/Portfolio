let $slider = $('#slider');
let containerWidth = $slider.parent().width();

let autoplayInterval = setInterval(slideRight, 10000);
const indicatorParents = $('.pagination ul');
var sectionIndex = 0;

function slideRight() {
    $slider.animate({
        left: -containerWidth,
    }, 'slow', () => {
        $('#slider :first-child').appendTo($slider);
        $slider.css('left', '0');
    });
    if (sectionIndex == 3) {
        sectionIndex = 0;
    } else {
        ++sectionIndex
    }
    $('.pagination ul li').removeClass('active');
    indicatorParents.children().eq(sectionIndex).addClass('active');
}

function slideLeft() {
    $('#slider :last-child').prependTo($slider);
    $slider.css('left', -containerWidth);
    $slider.animate({
        left: 0,
    }, 'slow');
    if (sectionIndex == 0) {
        sectionIndex = 3;
    } else {
        --sectionIndex
    }
    $('.pagination ul li').removeClass('active');
    indicatorParents.children().eq(sectionIndex).addClass('active');
}

function resetAutoplay() {
    clearInterval(autoplayInterval);
    autoplayInterval = setInterval(slideRight, 10000);
}

$('.right').click(() => {
    slideRight();
    resetAutoplay();
});

$('.left').click(() => {
    slideLeft();
    resetAutoplay();
});

$(window).resize(() => {
    containerWidth = $slider.parent().width();
});

document.querySelectorAll('.pagination ul li').forEach((pagination, ind) => {
    pagination.addEventListener('click', () => {
        let diff = sectionIndex - ind;
        if (diff < 0) {
            diff = Math.abs(diff)
            for (let index = 0; index < diff; index++) {
                slideRight();
            }
            sectionIndex = ind;
        } else {
            for (let index = 0; index < diff; index++) {
               $('#slider :last-child').prependTo($slider);
            }
            $slider.css('left', -containerWidth*diff);
            $slider.animate({
                left: 0,
            }, 'slow');
            if (sectionIndex == 0) {
                sectionIndex = 3;
            } else {
                --sectionIndex
            }
            $('.pagination ul li').removeClass('active');
            indicatorParents.children().eq(sectionIndex).addClass('active');
            sectionIndex = ind
        }
        document.querySelector('.pagination .active').classList.remove('active');
        pagination.classList.add('active');
        resetAutoplay();
    });
});

