// video box

let video = document.getElementsByTagName('video');
let allVideo = document.getElementsByClassName('allVideo');
let videoThumnel = document.getElementsByClassName('videoThumnel');
// let mouseCheck = false;

for (let i = 0; i < video.length; i++) {
    video[i].muted = true;
    // var mouseout = new Date()
    allVideo[i].addEventListener('mouseover', () => {
        // first try

        // mouseCheck = true;
        // var time = new Date();
        // while(mouseCheck == true){
        //     setTimeout(()=>{
        //         var time2 = new Date();
        //         if (time2.getSeconds() - time.getSeconds() == 1) {
        //             videoThumnel[i].classList.remove('displayBlock');
        //             video[i].play();
        //             break
        //         }
        //     })
        // }

        // second try

        // setTimeout(()=>{
        //     var cTime = new Date()
        //     if (cTime.getSeconds() - mouseout.getSeconds() >= 1) {
        //         videoThumnel[i].classList.remove('displayBlock');
        //         video[i].play();
        //     }
        // },100)

        videoThumnel[i].classList.remove('displayBlock');
        video[i].play();


        if (video[i].offsetHeight <= 200) {
            video[i].classList.add('borderRadius');
        }
    })

    video[i].addEventListener('mouseout', () => {
        // mouseout = new Date();
        video[i].pause();

        videoThumnel[i].classList.add('displayBlock');
        if (video[i].offsetHeight <= 200) {
            video[i].classList.remove('borderRadius');
        }
    })

    video[i].addEventListener('click', () => {
        if (video[i].offsetHeight <= 200) {
            location.href = '../videoPlay/videoPlay.html';
        }
        else if (video[i].offsetHeight >= 200) {
            location.href = '../shorts/shorts.html';
        }
    })
}

// short div
let shortCon = document.getElementsByClassName('shortCon');
let crosIcon = document.getElementsByClassName('crosIcon ');

for (let i = 0; i < shortCon.length; i++) {
    crosIcon[i].addEventListener('click', () => {
        shortCon[i].classList.remove('displayBlock');
    })
}

// 3rd nav
let allId = document.getElementById('AllId');
let rightBtn = document.getElementById('rightBtn');
let leftBtn = document.getElementById('leftBtn');

let navigateBox2 = document.getElementsByClassName('navigateBox')[0];

navigateBox2.addEventListener('scroll', () => {
    if (navigateBox2.scrollLeft == 0) {
        leftBtn.classList.add('displayNone');
        allId.classList.remove('displayNone');
    }
    else {
        leftBtn.classList.remove('displayNone');
        allId.classList.add('displayNone');
    }
})

rightBtn.addEventListener('click', () => {
    navigateBox2.scrollLeft += 90;
    leftBtn.classList.remove('displayNone');
})

leftBtn.addEventListener('click', () => {
    navigateBox2.scrollLeft -= 90;
    if (navigateBox2.scrollLeft == 0) {
        leftBtn.classList.add('displayNone');
        allId.classList.remove('displayNone');
    }
})

// let navigateBox = document.getElementsByClassName('navigateBox')[0];
// const widthNav94 = () =>{
//     navigateBox.classList.add('width_94');
//     navigateBox.classList.remove('width_79');
//     navigateBox.classList.remove('left_19');
//     navigateBox.classList.add('left_5');
// }

// const widthNav79 = () =>{
//     navigateBox.classList.remove('width_94');
//     navigateBox.classList.add('width_79');
//     navigateBox.classList.add('left_19');
//     navigateBox.classList.remove('left_5');
// }
