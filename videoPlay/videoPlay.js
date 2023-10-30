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