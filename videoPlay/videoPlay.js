// const chEck = () => {
// 	try{
// 		throw new Error('Param required');
// 	}
// 	catch (err) {
// 		console.error(err.message)
// 	}
// }

// const show = (name = chEck()) => {
// 	console.log(name);
// }

// show();

let navId2 = document.getElementById('navId2');
let hideNav = document.getElementById('hideNav')

navId2.addEventListener('click',()=>{
	hideNav.classList.toggle('displayNone')
})

// 3re nav

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
