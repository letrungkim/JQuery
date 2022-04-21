var totalImg = document.getElementsByClassName('slider--inside');
var img = document.getElementsByClassName('img');
var imgIndex = 0;
var flag = true;
var check;


$(document).ready(function () {
    imgArr();
    //showImg(imgIndex);
    prevBtn();
    nextBtn();
})

function prevBtn() {
    // $('.prev').on('click', function () {
    //     moveImg(-1, 0);
    // })

    var nextIndex = $('.slider--inside img').length - 1;
    var init = 0, val = 0, cur = 0;
    $('.prev').on('click', function () {
        val = 100;
        init = -100;
        cur = init + val;
        if (flag == true) {
            flag = false;
            if (imgIndex == 0) {
                showImg(nextIndex, imgIndex, val, init, cur);
            } else {
                showImg(imgIndex - 1, imgIndex, val, init, cur);
            }
        }
    })
}

function nextBtn() {
    // $('.next').on('click', function () {
    //     moveImg(1, 0);
    // })
    var init = 0, val = 0, cur = 0;
    $('.next').on('click', function () {
        val = -100;
        init = 100;
        cur = init + val;
        if (flag == true) {
            // Set flag, khi flag = true, thi function prev moi chay, nguoc lai flag = false thi ko
            flag = false;
            // Set flag = false, khi nay bam nut Prev thi function prev se ko hoat dong do function chi hoat dong khi flag = true
            if (imgIndex < $('.slider--inside img').length - 1) {
                showImg(imgIndex + 1, imgIndex, val, init, cur)
            } else {
                showImg(0, imgIndex, val, init, cur)
            }
        }

    })
}

function imgArr() {
    var nextIndex = $('.slider--inside img').length - 1;
    $('.slider--inside img').each(function (index) {
        $(this).attr("imgIndex", index);
        if (index != 0) {
            $(this).css({ "left": `-100%` })
        }
    })
    $('.slider--inside img').css({ "opacity": "1" })
}

function showImg(nextInd, currentInd, val, init, cur) {
    $(`[imgIndex=${nextInd}]`).css({ "left": `${init}%` });
    $(`[imgIndex=${currentInd}]`).animate({ "left": `${val}%` });
    $(`[imgIndex=${nextInd}]`).animate({ "left": `${cur}%` }, function () {
        imgIndex = nextInd;
        flag = true;
        // Sau khi function chay hoan tat thi set flag = true de chay hinh khi an nut Prev, luc nay flag == true nen function moi co the chay tiep
    });
}

// function showPrevImg(prevInd, currentInd) {
//     $(`[imgIndex=${prevInd}]`).css({ "left": "-100%" });
//     $(`[imgIndex=${currentInd}]`).animate({ "left": "+=100%" });
//     $(`[imgIndex=${prevInd}]`).animate({ "left": "+=100%" }, function () {
//         imgIndex = prevInd;
//         flag = true;
//     });
// }

