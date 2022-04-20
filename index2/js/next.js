const totalImg = document.getElementsByClassName('slider--inside');
const img = document.getElementsByClassName('slider--inside img');



let imgIndex = 1;
var c;

console.log(totalImg)

$(document).ready(function () {
    showImg();
    clickNext();
    //clickPrev();
    // dragImg();
})

function clickNext() {
    showImg();
    console.log($('.next'))
    $('.next').on('click', function () {
        imgIndex++;
        $('img').css({ "transform": `translateX(${-100 * imgIndex}%)`, "transition": "0.2s ease transform" });
    })
}

function clickPrev() {
    const prevBtn = document.querySelector('.prev');
    showImg();
    prevBtn.on('click', function () {
        c.style.transition = '0.2s ease transform';
        imgIndex--;
        c.style.transform = `translateX(${-100 * imgIndex}%)`;
    })
}

// function moveImg(n) {
//     showImg(imgIndex += n);
// }

function showImg() {
    var i, j;
    // var nextIndex = n;

    //totalImg.style.transform = `translateX(${-100}%)`;
    for (i = 0; i < totalImg.length; i++) {
        return c = totalImg[i].children;
    }

    // for (i = 0; i < totalImg.length; i++) {
    //     let c = totalImg[i].children;
    //     if (nextIndex >= c.length) {
    //         imgIndex = 0;
    //         nextIndex = 0;
    //     }

    //     if (n < 0) {
    //         imgIndex = c.length - 1;
    //         nextIndex = c.length - 1;
    //     }

    //     for (j = 0; j < c.length; j++) {
    //         if (j < nextIndex) {
    //             c[j].style.transform = `translateX(-${(nextIndex - j) * 100}%)`;
    //         } else {
    //             c[j].style.transform = `translateX(${(j - nextIndex) * 100}%)`;
    //         }
    //         if (j == nextIndex) {
    //             c[j].style.transform = `translateX(0)`;
    //         }
    //     }
    // }
}