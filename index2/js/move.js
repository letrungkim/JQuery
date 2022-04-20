var totalImg = document.getElementsByClassName('slider--inside');
var img = document.getElementsByClassName('img');
var imgIndex = 0;
var c, val;
var arr = ['1', '2', '3'];


$(document).ready(function () {
    imgArr(100);
    prevBtn();
    nextBtn();
})

function prevBtn() {
    //imgIndex = 1;
    $('.prev').on('click', function () {
        //imgIndex++;
        // if (imgIndex == 1) {
        //     $(`[imgIndex]:nth-child(${3})`).css({ "transform": `translateX(${100}%)`, "opacity": "" })
        // } else {

        // }
        $(`[imgIndex=${imgIndex + 1}]`).animate({ left: "100%", opacity: "0" }, 1000, function () {
            $(`[imgIndex=${imgIndex}]`).animate({ "left": '-100%', "opacity": "0" }, 500);
            $(`[imgIndex=${imgIndex + 1}]`).animate({ "left": '0%', "opacity": "1" }, 1000);
        });

    })
}

function nextBtn() {
    //imgIndex = 1;

    $('.next').on('click', function () {
        //imgArr(100);
        console.log(imgIndex)
        //imgIndex++;
        // if (imgIndex > 3) {
        //     $(`[imgIndex]:nth-child(${3})`).css({ "transform": `translateX(${100}%)`, "opacity": "0" })
        //     $(`[imgIndex]:nth-child(${2})`).css({ "transform": `translateX(-${100}%)`, "opacity": "0" })
        //     $(`[imgIndex]:nth-child(${1})`).css({ "transform": `translateX(${0}%)`, "opacity": "1" })
        //     imgIndex = 1;
        // } else {
        //     $(`[imgIndex]:nth-child(${3})`).css({ "transform": `translateX(-${100}%)`, "opacity": "0" })
        //     $(`[imgIndex]:nth-child(${imgIndex - 2})`).css({ "opacity": "0", "transform": `translateX(-${100}%)` })
        //     $(`[imgIndex]:nth-child(${imgIndex - 1})`).css({ "transform": `translateX(${100}%)`, "opacity": "0" })
        //     $(`[imgIndex]:nth-child(${imgIndex})`).css({ "transform": `translateX(${0}%)`, "opacity": "1" })
        // }
        console.log($(`[imgIndex=${imgIndex + 1}]`))
        $(`[imgIndex=${imgIndex + 1}]`).css({ "transform": `translateX(${0}%)`, "opacity": "1" });
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

