
// 2nd nav

let navId2 = document.getElementsByClassName('navId2');
let hideNav = document.getElementById('hideNav');

let hideConterdvjb = document.getElementsByClassName('hideConterdvjb')[0]

for (let i = 0; i < navId2.length; i++) {
	navId2[i].addEventListener('click', () => {
		hideNav.classList.toggle('displayNone');
		hideConterdvjb.classList.toggle('displayNone');
	})
}


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



// video play

let bigVideoPlay = document.getElementsByClassName('bigVideoPlay')[0];
let vidoeplayPV = document.getElementsByClassName('vidoeplayPV')[0];
let playV = document.getElementsByClassName('playV')[0];
let pauseV = document.getElementsByClassName('pauseV')[0];

let videoP = true;

bigVideoPlay.addEventListener('click', () => {
	if (videoP) {
		bigVideoPlay.play();
		vidoeplayPV.classList.remove('displayNone');
		playV.classList.remove('displayNone');
		setTimeout(() => {
			vidoeplayPV.classList.add('displayNone');
			playV.classList.add('displayNone');
		}, 1000);
		videoP = false;
	}
	else if (!videoP) {
		bigVideoPlay.pause();
		vidoeplayPV.classList.remove('displayNone');
		pauseV.classList.remove('displayNone');
		setTimeout(() => {
			vidoeplayPV.classList.add('displayNone');
			pauseV.classList.add('displayNone');
		}, 1000);
		videoP = true;
	}
})



// subscribe Button

let subscribeId = document.getElementById('subscribeId');
let subscribedId = document.getElementById('subscribedId');
let bigIc = document.getElementsByClassName('bigIc')[0];
let notiMuteUnCon = document.getElementsByClassName('notiMuteUnCon')[0];
let subsCondjv = document.getElementsByClassName('subsCondjv');

subscribeId.addEventListener('click', () => {
	subscribeId.classList.add('displayNone');
	subscribedId.classList.remove('displayNone');
})

subscribedId.addEventListener('click', () => {
	notiMuteUnCon.classList.toggle('displayNone');
})

for (let i = 0; i < subsCondjv.length; i++) {

	subsCondjv[0].addEventListener('click', () => {
		subsCondjv[0].classList.add('navbvfrBoxover');

		subsCondjv[1].classList.remove('navbvfrBoxover');
		subsCondjv[2].classList.remove('navbvfrBoxover');
		subsCondjv[3].classList.remove('navbvfrBoxover');

		bigIc.innerHTML = `
		<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
			<path d="M21.5 9h-2v-.19c0-1.91-1.11-3.62-2.9-4.48l.87-1.8c2.49 1.19 4.03 3.6 4.03 6.28V9zm-17-.19c0-1.91 1.11-3.62 2.9-4.48l-.87-1.8C4.04 3.72 2.5 6.13 2.5 8.81V9h2v-.19zM12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm8-4.65V19H4v-1.65l2-1.88v-5.15C6 7.4 7.56 5.1 10 4.34v-.38c0-1.42 1.49-2.5 2.99-1.76.65.32 1.01 1.03 1.01 1.76v.39c2.44.75 4 3.06 4 5.98v5.15l2 1.87z">
			</path>
		</svg>
		`
		notiMuteUnCon.classList.add('displayNone');
	})
	subsCondjv[1].addEventListener('click', () => {
		subsCondjv[1].classList.add('navbvfrBoxover');

		subsCondjv[0].classList.remove('navbvfrBoxover');
		subsCondjv[2].classList.remove('navbvfrBoxover');
		subsCondjv[3].classList.remove('navbvfrBoxover');

		bigIc.innerHTML = `
		<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
			<path d="M10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm10-2.65V19H4v-1.65l2-1.88v-5.15C6 7.4 7.56 5.1 10 4.34v-.38c0-1.42 1.49-2.5 2.99-1.76.65.32 1.01 1.03 1.01 1.76v.39c2.44.75 4 3.06 4 5.98v5.15l2 1.87zm-1 .42-2-1.88v-5.47c0-2.47-1.19-4.36-3.13-5.1-1.26-.53-2.64-.5-3.84.03C8.15 6.11 7 7.99 7 10.42v5.47l-2 1.88V18h14v-.23z">
			</path>
		</svg>
		`
		notiMuteUnCon.classList.add('displayNone');
	})
	subsCondjv[2].addEventListener('click', () => {
		subsCondjv[2].classList.add('navbvfrBoxover');

		subsCondjv[1].classList.remove('navbvfrBoxover');
		subsCondjv[0].classList.remove('navbvfrBoxover');
		subsCondjv[3].classList.remove('navbvfrBoxover');

		bigIc.innerHTML = `
		<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
			<path d="m3.85 3.15-.7.7 3.48 3.48C6.22 8.21 6 9.22 6 10.32v5.15l-2 1.88V19h14.29l1.85 1.85.71-.71-17-16.99zM5 18v-.23l2-1.88v-5.47c0-.85.15-1.62.41-2.3L17.29 18H5zm5 2h4c0 1.1-.9 2-2 2s-2-.9-2-2zM9.28 5.75l-.7-.7c.43-.29.9-.54 1.42-.7v-.39c0-1.42 1.49-2.5 2.99-1.76.65.32 1.01 1.03 1.01 1.76v.39c2.44.75 4 3.06 4 5.98v4.14l-1-1v-3.05c0-2.47-1.19-4.36-3.13-5.1-1.26-.53-2.64-.5-3.84.03-.27.11-.51.24-.75.4z">
			</path>
		</svg>
		`
		notiMuteUnCon.classList.add('displayNone');
	})
	subsCondjv[3].addEventListener('click', () => {
		subsCondjv[3].classList.add('navbvfrBoxover');

		subsCondjv[1].classList.remove('navbvfrBoxover');
		subsCondjv[2].classList.remove('navbvfrBoxover');
		subsCondjv[0].classList.remove('navbvfrBoxover');

		notiMuteUnCon.classList.add('displayNone');
		subscribedId.classList.add('displayNone');
		subscribeId.classList.remove('displayNone');

		subsCondjv[3].classList.remove('navbvfrBoxover');
		subsCondjv[1].classList.add('navbvfrBoxover');
	})
}



// video like button

let videoLikeBtn = document.getElementsByClassName('videoLikeBtn')[0];
let videoUnLikeBtn = document.getElementsByClassName('videoUnLikeBtn')[0];
let videoLike = document.getElementById('videoLike');
let videoUnLike = document.getElementById('videoUnLike');

let like = true;

videoLikeBtn.addEventListener('click', () => {
	if (like) {
		videoLike.innerHTML = `<i class="fa-solid fa-thumbs-up"></i>`;
		videoUnLike.innerHTML = `<i class="fa-regular fa-thumbs-up fa-rotate-180"></i>`;
		like = false;
	}
	else if (!like) {
		videoLike.innerHTML = `<i class="fa-regular fa-thumbs-up"></i>`;
		like = true;
	}
})

videoUnLikeBtn.addEventListener('click', () => {
	if (like) {
		videoUnLike.innerHTML = `<i class="fa-solid fa-thumbs-up fa-rotate-180"></i>`;
		videoLike.innerHTML = `<i class="fa-regular fa-thumbs-up"></i>`;
		like = false;
	}
	else if (!like) {
		videoUnLike.innerHTML = `<i class="fa-regular fa-thumbs-up fa-rotate-180"></i>`;
		like = true;
	}
})



// description box
let descripsanBOX = document.getElementsByClassName('descripsanBOX')[0];

let moreDis = document.getElementById('moreDis');
let lessDis = document.getElementById('lessDis');

let desBox = document.getElementsByClassName('desBox')[0];
let profil_conjb = document.getElementsByClassName('profil_conjb')[0];

moreDis.addEventListener('click', () => {
	lessDis.classList.remove('displayNone');
	moreDis.classList.add('displayNone');

	desBox.classList.remove('displayNone');
	profil_conjb.classList.remove('displayNone');

	descripsanBOX.classList.remove('navLeftIconHover');
})

lessDis.addEventListener('click', () => {
	lessDis.classList.add('displayNone');
	moreDis.classList.remove('displayNone');

	desBox.classList.add('displayNone');
	profil_conjb.classList.add('displayNone');

	descripsanBOX.classList.add('navLeftIconHover');
})


// Add comment Box

let inputId;
let inputClass = document.getElementsByClassName('inputClass')[0];
let inputComDiv = document.getElementsByClassName('inputComDiv')[0];
let cancelBtn = document.getElementsByClassName('cancelBtn')[0];
let commentBtn = document.getElementsByClassName('commentBtn')[0];

inputClass.addEventListener('click', () => {
	inputComDiv.classList.remove('bottm-border-1');
	inputComDiv.classList.add('bottm-border-3');
	cancelBtn.classList.remove('displayNone');
	commentBtn.classList.remove('displayNone');
	inputClass.addEventListener('input', () => {
		inputId = document.getElementById('inputId').value;
		if (inputId == "") {
			commentBtn.classList.remove('displayNone');
			commentBtn.classList.remove('colorW-backB');
			commentBtn.classList.remove('cursor_pointer');
			commentBtn.disabled = true;
		}
		else {
			commentBtn.disabled = false;
			commentBtn.classList.add('colorW-backB');
			commentBtn.classList.add('cursor_pointer');
		}
	})
})

cancelBtn.addEventListener('click', () => {
	cancelBtn.classList.add('displayNone');
	commentBtn.classList.add('displayNone');
	document.getElementById('inputId').value = "";
	inputComDiv.classList.add('bottm-border-1');
	inputComDiv.classList.remove('bottm-border-3');
	commentBtn.disabled = true;
	commentBtn.classList.remove('colorW-backB');
	commentBtn.classList.remove('cursor_pointer');
})



// comment Box

const coomentAdd = () => {
	let commentBox = document.getElementsByClassName('commentBox');
	let commentBox_Right = document.getElementsByClassName('commentBox_Right');
	let likeComment = document.getElementsByClassName('likeComment');
	let unLikeComment = document.getElementsByClassName('unLikeComment');

	for (let i = 0; i < commentBox.length; i++) {
		commentBox_Right[i].classList.add('cursor_pointer');
		commentBox[i].addEventListener('mouseover', () => {
			commentBox_Right[i].classList.remove('opacity0');
			commentBox_Right[i].classList.add('opacity1');
		})

		commentBox[i].addEventListener('mouseout', () => {
			commentBox_Right[i].classList.add('opacity0');
			commentBox_Right[i].classList.remove('opacity1');
		})

		likeComment[i].addEventListener('click', () => {
			if (like) {
				likeComment[i].innerHTML = `<i class="fa-solid fa-thumbs-up"></i>`;
				unLikeComment[i].innerHTML = `<i class="fa-regular fa-thumbs-up fa-rotate-180"></i>`;
				like = false;
			}
			else if (!like) {
				likeComment[i].innerHTML = `<i class="fa-regular fa-thumbs-up"></i>`;
				like = true;
			}
		})

		unLikeComment[i].addEventListener('click', () => {
			if (like) {
				unLikeComment[i].innerHTML = `<i class="fa-solid fa-thumbs-up fa-rotate-180"></i>`;
				likeComment[i].innerHTML = `<i class="fa-regular fa-thumbs-up"></i>`;
				like = false;
			}
			else if (!like) {
				unLikeComment[i].innerHTML = `<i class="fa-regular fa-thumbs-up fa-rotate-180"></i>`;
				like = true;
			}
		});
	}
}
coomentAdd()

let seeCommentBox = document.getElementsByClassName('seeCommentBox')[0];

commentBtn.addEventListener('click', () => {
	document.getElementById('inputId').value = "";
	commentBtn.classList.remove('displayNone');
	commentBtn.classList.remove('colorW-backB');
	commentBtn.classList.remove('cursor_pointer');
	commentBtn.disabled = true;

	let mm3 = `
		<div class="commentBox">
			<div class="commentBox_Left">
				<div class="commentBox_Left_left">
					<div class="profil_d_ComB cursor_pointer">
						<img src="../images/user.png">
					</div>
				</div>
				<div class="commentBox_Left_right">
					<div class="com_sdjjd jbsdvj">
						<p class="bold">@codeWithRakesh</p>
						<span>1 seconds ago</span>
					</div>
					<div class="com_sdjjd mknl">
						${inputId}
					</div>
					<div class="com_sdjjd_bo">
						<div class="likeUn_enbj cursor_pointer navLeftIconHover likeComment">
							<i class="fa-regular fa-thumbs-up"></i>
						</div>
						<div class="likeUn_enbj cursor_pointer navLeftIconHover unLikeComment">
							<i class="fa-regular fa-thumbs-up fa-rotate-180"></i>
						</div>
						<div class="likeUn_enbj_jbjbdsv bold cursor_pointer navLeftIconHover">
							Reply
						</div>
					</div>
				</div>
			</div>
			<div class="commentBox_Right opacity0">
				<i class="fa-solid fa-ellipsis-vertical"></i>
			</div>
		</div>
	`

	seeCommentBox.innerHTML = mm3 + seeCommentBox.innerHTML;

	coomentAdd()
})



// Right vidoe player

let rightVideoPlayer = document.getElementsByClassName('rightVideoPlayer');
let videorbjjb_2 = document.getElementsByClassName('videorbjjb_2');
let videoRight = document.getElementsByClassName('videoRight');
let imageRight = document.getElementsByClassName('imageRight');

for (let i = 0; i < rightVideoPlayer.length; i++) {
	rightVideoPlayer[i].addEventListener('mouseover', () => {
		videorbjjb_2[i].classList.remove('opacity0');
		videorbjjb_2[i].classList.add('opacity1');

		imageRight[i].classList.add('displayNone');
		videoRight[i].play();
		videoRight[i].muted = true;
	})

	rightVideoPlayer[i].addEventListener('mouseout', () => {
		videorbjjb_2[i].classList.add('opacity0');
		videorbjjb_2[i].classList.remove('opacity1');

		imageRight[i].classList.remove('displayNone');
		videoRight[i].pause();
		videoRight[i].muted = true;
	})

	videoRight[i].addEventListener('click', () => {
		location.href = '../videoPlay/videoPlay.html';
	})
}



// video Downlode Button

let downCon = document.getElementsByClassName('downCon')[0]
let downlodeCl = document.getElementsByClassName('downlodeCl')[0]

downCon.addEventListener('click', () => {
	var xhr = new XMLHttpRequest();
    xhr.open('GET', 'bigVideoPlay.lastElementChild.src', true);
    xhr.responseType = 'blob';
    xhr.onload = function() {
	    var urlCreator = window.URL || window.webkitURL;
	    var imageUrl = urlCreator.createObjectURL(this.response);
	    var tag = document.createElement('a');
	    tag.href = imageUrl;
	    tag.target = '_blank';
	    tag.download = 'sample.mp4';
	    document.body.appendChild(tag);
	    tag.click();
	    document.body.removeChild(tag);
    };
    xhr.onerror = err => {
    	downlodeCl.innerText = 'Faild'
    	setTimeout(()=>{
    		downlodeCl.innerText = 'Downlode'
    	},2000)
    	console.log(err.message)
    };
  xhr.send();
})


// shar Box
let sharCon = document.getElementsByClassName('sharCon')[0]
sharCon.addEventListener('click',()=>{
    navigator.share({
        text:'shar this video'
    })
})