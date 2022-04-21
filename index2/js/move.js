var totalImg = document.getElementsByClassName('slider--inside');
var img = document.getElementsByClassName('img');
var imgIndex = 0;
var flag = true;
var check;


$(document).ready(function () {
    imgArr();
    prevBtn();
    nextBtn();
})

function prevBtn() {
    var nextIndex = $('.slider--inside img').length - 1;
    $('.prev').on('click', function () {
        var move = -100;
        if (flag == true) {
            flag = false;
            if (imgIndex == 0) {
                showImg(nextIndex, imgIndex, move);
            } else {
                showImg(imgIndex - 1, imgIndex, move);
            }
        }
    })
}

function nextBtn() {
    $('.next').on('click', function () {
        var move = 100;
        if (flag == true) {
            // Set flag, khi flag = true, thi function prev moi chay, nguoc lai flag = false thi ko
            flag = false;
            // Set flag = false, khi nay bam nut Prev thi function prev se ko hoat dong do function chi hoat dong khi flag = true
            if (imgIndex < $('.slider--inside img').length - 1) {
                showImg(imgIndex + 1, imgIndex, move)
            } else {
                showImg(0, imgIndex, move)
            }
        }

    })
}

function imgArr() {
    $('.slider--inside img').each(function (index) {
        $(this).attr("imgIndex", index);
        if (index != 0) {
            $(this).css({ "left": `-100%` })
        }
    })
    $('.slider--inside img').css({ "opacity": "1" })
}

function showImg(nextInd, currentInd, val) {
    $(`[imgIndex=${nextInd}]`).css({ "left": `${val}%` });
    $(`[imgIndex=${currentInd}]`).animate({ "left": `${-val}%` });
    $(`[imgIndex=${nextInd}]`).animate({ "left": `${val - val}%` }, function () {
        imgIndex = nextInd;
        flag = true;
        // Sau khi function chay hoan tat thi set flag = true de chay hinh khi an nut Prev, luc nay flag == true nen function moi co the chay tiep
    });
}

