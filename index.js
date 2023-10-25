// video box

let video = document.getElementsByTagName('video')
let mouseCheck = false;

for (let i = 0; i < video.length; i++) {
    video[i].muted = true
    video[i].addEventListener('mouseover',()=>{
        mouseCheck = true
        var time = new Date();
        while(mouseCheck == true){
            var time2 = new Date();
            if (time2.getSeconds() - time.getSeconds() == 2) {
                video[i].play()
                break
            }
        }

        // video[i].play()
        if (video[i].offsetHeight <= 200) {
            video[i].classList.add('borderRadius')
        }
    })

    video[i].addEventListener('mouseout',()=>{
        mouseCheck = false
    	video[i].pause()
         if (video[i].offsetHeight <= 200) {
            video[i].classList.remove('borderRadius')
        }
    })

    video[i].addEventListener('click',()=>{
        alert()
    })
}

// short div
let shortCon = document.getElementsByClassName('shortCon')
let crosIcon = document.getElementsByClassName('crosIcon ')

for (let i = 0; i < shortCon.length; i++) {
    crosIcon[i].addEventListener('click',()=>{
       shortCon[i].classList.remove('displayBlock')
    })
}

// 3rd nav
let allId = document.getElementById('AllId');
let rightBtn = document.getElementById('rightBtn');
let leftBtn = document.getElementById('leftBtn');

let navigateBox2 = document.getElementsByClassName('navigateBox')[0]


navigateBox2.addEventListener('scroll',()=>{
    if (navigateBox2.scrollLeft == 0) {
        leftBtn.classList.add('displayNone')
        allId.classList.remove('displayNone')
    }
    else {
        leftBtn.classList.remove('displayNone')
        allId.classList.add('displayNone')
    }
})

rightBtn.addEventListener('click',()=>{
    // alert(navigateBox2.scrollLeft)
    navigateBox2.scrollLeft += 90;
    leftBtn.classList.remove('displayNone')
})

leftBtn.addEventListener('click',()=>{
    navigateBox2.scrollLeft -= 90;
    if (navigateBox2.scrollLeft == 0) {
        leftBtn.classList.add('displayNone')
        allId.classList.remove('displayNone')
    }
    // alert()
})