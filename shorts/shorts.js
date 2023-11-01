
// short video play
let shortsMain = document.getElementsByClassName('shortsMain');
let shortBox = document.getElementsByClassName('shortBox');
let video = document.getElementsByTagName('video');
let checkVideo = true;
let checkSUbs = false;

let videoTop = document.getElementsByClassName('videoTop');
let topIconLeft = document.getElementsByClassName('topIconLeft');
let topIconRight = document.getElementsByClassName('topIconRight');

let playPuC = document.getElementsByClassName('playPuC');
let videoMiddle = document.getElementsByClassName('videoMiddle');

let allSubBtn = document.getElementsByClassName('allSubBtn');

let likeBTN = document.getElementsByClassName('likeBTN');
let unLikeBTN = document.getElementsByClassName('unLikeBTN');
let lb = document.getElementsByClassName('lb');
let ub = document.getElementsByClassName('ub');

for (let i = 0; i < shortBox.length; i++) {
	video[i].autoplay = false;
	video[i].loop = true
	video[i].addEventListener('click', () => {
		if (checkVideo) {
			video[i].play();
			topIconLeft[i].innerHTML = `<i class="fa-solid fa-play"></i>`;
			playPuC[i].innerHTML = `<i class="fa-solid fa-pause fa-2xl"></i>`;
			playB();
			checkVideo = false;
		}
		else if (!checkVideo) {
			video[i].pause();
			topIconLeft[i].innerHTML = `<i class="fa-solid fa-pause"></i>`;
			playPuC[i].innerHTML = `<i class="fa-solid fa-play fa-2xl"></i>`;
			playB();
			checkVideo = true;
		}
	})
	topIconLeft[i].addEventListener('click', () => {
		if (checkVideo) {
			video[i].play();
			topIconLeft[i].innerHTML = `<i class="fa-solid fa-play"></i>`;
			playPuC[i].innerHTML = `<i class="fa-solid fa-pause fa-2xl"></i>`;
			playB();
			checkVideo = false;
		}
		else if (!checkVideo) {
			video[i].pause();
			topIconLeft[i].innerHTML = `<i class="fa-solid fa-pause"></i>`;
			playPuC[i].innerHTML = `<i class="fa-solid fa-play fa-2xl"></i>`;
			playB();
			checkVideo = true;
		}
	})
	videoMiddle[i].addEventListener('click', () => {
		if (checkVideo) {
			video[i].play();
			topIconLeft[i].innerHTML = `<i class="fa-solid fa-play"></i>`;
			playPuC[i].innerHTML = `<i class="fa-solid fa-pause fa-2xl"></i>`;
			playB();
			checkVideo = false;
		}
		else if (!checkVideo) {
			video[i].pause();
			topIconLeft[i].innerHTML = `<i class="fa-solid fa-pause"></i>`;
			playPuC[i].innerHTML = `<i class="fa-solid fa-play fa-2xl"></i>`;
			playB();
			checkVideo = true;
		}
	})
	topIconRight[i].addEventListener('click', () => {
		if (checkVideo) {
			video[i].muted = true;
			topIconRight[i].innerHTML = `<i class="fa-solid fa-volume-xmark"></i>`;
			checkVideo = false;
		}
		else if (!checkVideo) {
			video[i].muted = false;
			topIconRight[i].innerHTML = `<i class="fa-solid fa-volume-high"></i>`;
			checkVideo = true;
		}
	})
	const playB = () => {
		playPuC[i].classList.remove('displayNone');
		setTimeout(() => {
			playPuC[i].classList.add('displayNone');
		}, 1000)
	}
	allSubBtn[i].addEventListener('click', () => {
		if (checkSUbs) {
			allSubBtn[i].classList.add('subscribe');
			allSubBtn[i].classList.remove('subscribed');
			allSubBtn[i].innerHTML = 'Subscribe';
			allSubBtn[i].classList.add('bold');
			checkSUbs = false;
		}
		else if (!checkSUbs) {
			allSubBtn[i].classList.remove('subscribe');
			allSubBtn[i].classList.add('subscribed');
			allSubBtn[i].innerHTML = 'Subscribed';
			allSubBtn[i].classList.remove('bold');
			checkSUbs = true;
		}
	})
	likeBTN[i].addEventListener('click', () => {
		lb[i].classList.toggle('like');
		lb[i].classList.toggle('navLeftIconHover');

		ub[i].classList.remove('like');
		ub[i].classList.add('navLeftIconHover');
	})
	unLikeBTN[i].addEventListener('click', () => {
		ub[i].classList.toggle('like');
		ub[i].classList.toggle('navLeftIconHover');

		lb[i].classList.remove('like');
		lb[i].classList.add('navLeftIconHover');
	})
	shortsMain[i].addEventListener('mouseenter', () => {
		console.log(this)
		video[i].play()
		video[i].loop = true
		if (i != 0) {
			video[i].muted = false 
		}
		topIconRight[i].innerHTML = `<i class="fa-solid fa-volume-high"></i>`
	})
	shortsMain[i].addEventListener('mouseout', () => {
		console.log(this)
		video[i].pause()
	})
}

