let loginText,K430,timeImg;
function init(){
    loginText = document.getElementById("loginText");
    K430 = document.getElementById("K430");
    timeImg = document.getElementById("buildingIMG");

    const element = document.getElementById("K430");

    element.addEventListener("mouseover", function() {
        element.innerText = "K4:30";
    });

    element.addEventListener("mouseout", function() {
        element.innerText = "K430";
    });
}

function loadTextFile(path) {
    fetch('../textfiles/FirstRiddle.txt')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load the file');
            }
            return response.text();
        })
        .then(content => {
            const textContainer = document.getElementById('riddleDiv');
            textContainer.innerHTML = content;
        })
        .catch(error => {
            console.error('Error loading file:', error);
        });
}
window.onload = loadTextFile;

function checkPswd(){
    const confirmPassword = "DontTrustNewman"
    const password = document.getElementById("pswd").value;
    const confirmUsr = "Loomis"
    const username = document.getElementById("usrname").value;
    if(password === confirmPassword && username === confirmUsr){
        window.location = "linkPage.html";
    }else{
        alert("Inspect further");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    funK430();
});


function funK430(){
    const timeText = document.getElementById('timeText');
    const timeImg = document.getElementById('giantMusicMan');
    console.log("called")
    const now = new Date();
    const later = new Date(now.getFullYear(), now.getMonth(), now.getDate(),16,30,0,0);

    if(now > later){
        later.setDate(later.getDate()+1);
        timeText.innerText = "You're a little late. This page is still work a in progress, come back tomorrow." +
            " In the meantime, enjoy this video of Music Man"
        timeImg.src="../imgs/music-man-dj-music-man.gif";
    }else{
        timeText.innerText = "You're a little early. This page is still work a in progress, check again soon." +
            " In the meantime, enjoy this video of Music Man"
        timeImg.src="../imgs/music-man-dj-music-man.gif";
    }

    const timeToWait = later - now;
    setTimeout(() => {
        timeText.innerText = "Tick Tock around the clock the tiny hands do go." +
            " Tick Tock behind the mask, is where the hands shall go." +
            " Tick Tock the wretched hands slither up your spine." +
            " Tick Tock the springs will lock on your bone and mind." +
            " Tick Tock the angel plots against all of humankind.";
    }, timeToWait);
}
