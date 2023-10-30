let videohsvd = document.getElementsByClassName('videohsvd')
let imagevie = document.getElementsByClassName('imagevie')
let shorIma = document.getElementsByClassName('shorIma')

let videoImage12 = document.getElementsByClassName('videoImage12')
let shortImage12 = document.getElementsByClassName('shortImage12')

let short = document.getElementsByClassName('short')
let video = document.getElementsByClassName('video')

let fwtgdfw = document.getElementsByClassName('fwtgdfw')
let videoLibry = document.getElementsByClassName('videoLibry')

for (let i = 0; i < videohsvd.length; i++) {
    videohsvd[i].addEventListener('mouseover', () => {
        fwtgdfw[i].classList.add('opacity1')
        fwtgdfw[i].classList.remove('opacity0')
    })
    videohsvd[i].addEventListener('mouseout', () => {
        fwtgdfw[i].classList.remove('opacity1')
        fwtgdfw[i].classList.add('opacity0')
    })
}

for (let i = 0; i < videoImage12.length; i++) {

    videoImage12[i].addEventListener('mouseover', () => {
        imagevie[i].classList.remove('displayBlock')
        video[i].play()
    })

    video[i].addEventListener('mouseout', () => {
        video[i].pause()
        imagevie[i].classList.add('displayBlock')
    })

    video[i].addEventListener('click',()=>{
        location.href = '../videoPlay/videoPlay.html';
    })
}

for (let i = 0; i < shortImage12.length; i++) {

    shortImage12[i].addEventListener('mouseover', () => {
        shorIma[i].classList.remove('displayBlock');
        short[i].play()
    })

    short[i].addEventListener('mouseout', () => {
        shorIma[i].classList.add('displayBlock');
        short[i].pause()
    })

    short[i].addEventListener('click',()=>{
        location.href = '../shorts/shorts.html';
    })
}