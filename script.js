// all tabes
let homeId = document.getElementById('homeId');
let shortsId = document.getElementById('shortsId');
let subscriptionsId = document.getElementById('subscriptionsId');
let libraryId = document.getElementById('libraryId');

homeId.addEventListener('click', () => {
	location.href = '../home/index.html';
})
shortsId.addEventListener('click', () => {
	location.href = '../shorts/shorts.html';
})
subscriptionsId.addEventListener('click', () => {
	location.href = '../subscriptions/subscriptions.html';
})
libraryId.addEventListener('click', () => {
	location.href = '../library/library.html';
})


// NavBar
let navId = document.getElementById('navId');
let fullNav = document.getElementById('fullNav');
let smallNav = document.getElementById('smallNav');
let leftNav = document.getElementsByClassName('leftNav')[0];
let contentBox = document.getElementsByClassName('contentBox')[0];
let navigateBox = document.getElementsByClassName('navigateBox')[0];
let checkNavL = true;

if (navId != null) {
	navId.addEventListener('click', () => {
		if (checkNavL) {
			leftNav.classList.add('width_5');
			leftNav.classList.remove('width_18');

			fullNav.classList.remove('displayBlock');
			smallNav.classList.add('displayBlock');

			contentBox.classList.remove('width_82');
			contentBox.classList.add('width_95');

			if (navigateBox != null) {
				if (navigateBox.classList.contains('position_fixed')) {
					navigateBox.classList.add('width_94');
					navigateBox.classList.remove('width_79');
					navigateBox.classList.remove('left_19');
					navigateBox.classList.add('left_5');
				}
				else if (navigateBox.classList.contains('position_absolute')) {
					navigateBox.classList.add('width_97');
					navigateBox.classList.remove('width_79');
					navigateBox.classList.remove('left_19');
					navigateBox.classList.add('left_1rem');
				}
			}

			checkNavL = false;
		}
		else if (!checkNavL) {
			leftNav.classList.remove('width_5');
			leftNav.classList.add('width_18');

			fullNav.classList.add('displayBlock');
			smallNav.classList.remove('displayBlock');

			contentBox.classList.add('width_82');
			contentBox.classList.remove('width_95');

			if (navigateBox != null) {
				if (navigateBox.classList.contains('position_fixed')) {
					navigateBox.classList.remove('width_94');
					navigateBox.classList.add('width_79');
					navigateBox.classList.add('left_19');
					navigateBox.classList.remove('left_5');
				}
				else if (navigateBox.classList.contains('position_absolute')) {
					navigateBox.classList.add('width_97');
					// navigateBox.classList.remove('width_97');
					navigateBox.classList.remove('left_1rem');
					navigateBox.classList.add('left_1rem');
				}
			}

			checkNavL = true;
		}
	})
}

let uploadId = document.getElementById('uploadId');
let notificationId = document.getElementById('notificationId');
let userId = document.getElementById('userId');

let check = true;

// upload
let uploadVideo = document.getElementsByClassName('uploadVideo')[0];
uploadId.addEventListener('click', () => {

	if (check) {
		uploadId.innerHTML = `
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false" style="pointer-events: none; display: block; width: 24px; height: 24px;">
		  <path d="M18,8.83V5H2v14h16v-5.83L22,15V7L18,8.83z M14,13h-3v3H9v-3H6v-2h3V8h2v3h3V13z"></path>
		</svg>
		`
		notificationId.innerHTML = `
		<svg enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: block; width: 80%; height: 70%;">
			<path d="M10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm10-2.65V19H4v-1.65l2-1.88v-5.15C6 7.4 7.56 5.1 10 4.34v-.38c0-1.42 1.49-2.5 2.99-1.76.65.32 1.01 1.03 1.01 1.76v.39c2.44.75 4 3.06 4 5.98v5.15l2 1.87zm-1 .42-2-1.88v-5.47c0-2.47-1.19-4.36-3.13-5.1-1.26-.53-2.64-.5-3.84.03C8.15 6.11 7 7.99 7 10.42v5.47l-2 1.88V18h14v-.23z">
			</path>
		</svg>
		`
		check = false;
	}
	else if (!check) {
		uploadId.innerHTML = `
		<svg height="24" style="pointer-events: none; display: block; width: 80%; height: 70%;" viewBox="0 0 24 24" width="24" focusable="false">
			<path d="M14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2zm3-7H3v12h14v-6.39l4 1.83V8.56l-4 1.83V6m1-1v3.83L22 7v8l-4-1.83V19H2V5h16z">
			</path>
		</svg>
		`
		check = true;
	}

	uploadVideo.classList.toggle('displayBlock');

	notificationContaner.classList.remove('displayBlock');
	profileContaner.classList.remove('displayBlock');
});

// notification
let notificationContaner = document.getElementsByClassName('notificationContaner')[0];
notificationId.addEventListener('click', () => {

	if (check) {
		notificationId.innerHTML = `
		<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: block; width: 24px; height: 24px;"><path d="M10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm10-2.65V19H4v-1.65l2-1.88v-5.15C6 7.4 7.56 5.1 10 4.34v-.38c0-1.42 1.49-2.5 2.99-1.76.65.32 1.01 1.03 1.01 1.76v.39c2.44.75 4 3.06 4 5.98v5.15l2 1.87z"></path></svg>
		`
		uploadId.innerHTML = `
		<svg height="24" style="pointer-events: none; display: block; width: 80%; height: 70%;" viewBox="0 0 24 24" width="24" focusable="false">
			<path d="M14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2zm3-7H3v12h14v-6.39l4 1.83V8.56l-4 1.83V6m1-1v3.83L22 7v8l-4-1.83V19H2V5h16z">
			</path>
		</svg>
		`
		check = false;
	}
	else if (!check) {
		notificationId.innerHTML = `
		<svg enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: block; width: 80%; height: 70%;">
			<path d="M10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm10-2.65V19H4v-1.65l2-1.88v-5.15C6 7.4 7.56 5.1 10 4.34v-.38c0-1.42 1.49-2.5 2.99-1.76.65.32 1.01 1.03 1.01 1.76v.39c2.44.75 4 3.06 4 5.98v5.15l2 1.87zm-1 .42-2-1.88v-5.47c0-2.47-1.19-4.36-3.13-5.1-1.26-.53-2.64-.5-3.84.03C8.15 6.11 7 7.99 7 10.42v5.47l-2 1.88V18h14v-.23z">
			</path>
		</svg>
		`
		check = true;
	}

	notificationContaner.classList.toggle('displayBlock');

	uploadVideo.classList.remove('displayBlock');
	profileContaner.classList.remove('displayBlock');
});

let notifiShow = document.getElementsByClassName('notifiShow');
let threeDot = document.getElementsByClassName('threeDot');
for (let i = 0; i < notifiShow.length; i++) {

	notifiShow[i].addEventListener('mouseover', () => {
		threeDot[i].classList.add('opacity1');
		threeDot[i].classList.remove('opacity0');
	});

	notifiShow[i].addEventListener('mouseout', () => {
		threeDot[i].classList.remove('opacity1');
		threeDot[i].classList.add('opacity0');
	});
}

// profile
let profileContaner = document.getElementsByClassName('profileContaner')[0];
userId.addEventListener('click', () => {
	profileContaner.classList.toggle('displayBlock');

	notificationContaner.classList.remove('displayBlock');
	uploadVideo.classList.remove('displayBlock');
});

// serch div
let input = document.getElementsByTagName('input')[0];
let serchNav = document.getElementsByClassName('serchNav')[0];
let historyDiv = document.getElementById('historyDiv');
let serchDiv = document.getElementById('serchDiv');
let valuId;
let checkWindow = true;

input.addEventListener('click', () => {
	serchNav.classList.add('displayBlock');
	checkWindow = false;
})

input.addEventListener('input', () => {
	valuId = document.getElementById('valuId').value;
	if (valuId == "") {
		serchDiv.classList.remove('displayBlock');
		historyDiv.classList.add('displayBlock');
	}
	else {
		serchDiv.classList.add('displayBlock');
		historyDiv.classList.remove('displayBlock');
	}
});

serchNav.addEventListener('click', () => {
	checkWindow = false;
})

window.addEventListener('click', () => {
	if (checkWindow) {
		serchNav.classList.remove('displayBlock');
		checkWindow = false;
	}
	else if (!checkWindow) {
		checkWindow = true;
	}
})

// home
let navTCenter = document.getElementsByClassName('navTCenter')[0]

let serchAdd = document.getElementById('serchAdd')
let leftSerchL = document.getElementById('leftSerchL')

// shorts
let shortsL = document.getElementById('shortsL')
setTimeout(()=>{
	if (screen.width > 900) {

	}
	else if (screen.width < 900) {
		navTCenter.classList.add('displayNone')
	}
},1000)
setInterval(()=>{
	if (screen.width > 900) {

	}
	else if (screen.width <= 900) {

		if (serchAdd != null) {
			serchAdd.addEventListener('click',()=>{
				navTCenter.classList.remove('displayNone')
			})
		}
		if (leftSerchL != null) {
			leftSerchL.addEventListener('click',()=>{
				navTCenter.classList.add('displayNone')
			})
		}
		if (shortsL != null) {
			shortsL.addEventListener('click',()=>{
				location.href = '../home/index.html';
			})
		}
		
	}
},1000)
