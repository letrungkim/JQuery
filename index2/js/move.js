var totalImg = document.getElementsByClassName('slider--inside');
var img = document.getElementsByClassName('img');
var imgIndex = 0;
var c, val;
var flag = true;


$(document).ready(function () {
    imgArr(100);
    prevBtn();
    nextBtn();
})

function prevBtn() {
    $('.prev').on('click', function () {
        if (flag == true) {
            // Set flag, khi flag = true, thi function prev moi chay, nguoc lai flag = false thi ko
            flag = false;
            // Set flag = false, khi nay bam nut Prev thi function prev se ko hoat dong do function chi hoat dong khi flag = true

            $('.slider--init img').css({ "opacity": "1" });
            if (imgIndex < $('.slider--inside img').length - 1) {
                $(`[imgIndex=${imgIndex + 1}]`).css({ "left": "100%" });
                $(`[imgIndex=${imgIndex}]`).animate({ "left": "-=100%" });
                $(`[imgIndex=${imgIndex + 1}]`).animate({ "left": "-=100%" }, function () {
                    imgIndex++;
                    flag = true;
                    // Sau khi function chay hoan tat thi set flag = true de chay hinh khi an nut Prev, luc nay flag == true nen function moi co the chay tiep
                });
            } else {
                $(`[imgIndex=${0}]`).css({ "left": "100%" });
                $(`[imgIndex=${imgIndex}]`).animate({ "left": "-=100%" });
                $(`[imgIndex=${0}]`).animate({ "left": "-=100%" }, function () {
                    imgIndex = 0;
                    flag = true;
                });
            }
        }
    })
}

function nextBtn() {
    var nextIndex = $('.slider--inside img').length - 1;
    $('.next').on('click', function () {
        if (flag == true) {
            flag = false;
            $('.slider--init img').css({ "opacity": "1" });
            if (imgIndex == 0) {
                $(`[imgIndex=${nextIndex}]`).css({ "left": "-100%" });
                $(`[imgIndex=${imgIndex}]`).animate({ "left": "+=100%" });
                $(`[imgIndex=${nextIndex}]`).animate({ "left": "+=100%" }, function () {
                    imgIndex = nextIndex;
                    flag = true;
                });
            } else {
                $(`[imgIndex=${imgIndex - 1}]`).css({ "left": "-100%" });
                // Cho hinh so 2 vi tri left = -100%
                $(`[imgIndex=${imgIndex}]`).animate({ "left": "+=100%" });
                // Animate hinh hien tai (hinh so 3) sang phai voi left += 100% -> left: 100%
                $(`[imgIndex=${imgIndex - 1}]`).animate({ "left": "+=100%" }, function () {
                    imgIndex--;
                    flag = true;
                });
                // Animate hinh so 2 sang phai voi left += 100% -> left: 0
            }
        }
    })
}


function imgArr(val) {
    $('.slider--inside img').each(function (index) {
        $(this).attr("imgIndex", index);
        if (index != 0) {
            $(this).css({ "left": `-100%` })
        }
    })
    // $('.slider--inside img').css({ "opacity": "1" })
}

