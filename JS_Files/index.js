let loginText;
function init(){
    loginText = document.getElementById("loginText");
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
    if(password == confirmPassword){
        window.location = "linkPage.html";
    }else{
        alert("Password does not match.");
    }
}
 function checkUsr(){
    const confirmUsr = "Loomis"
    const username = document.getElementById("usrname").value;
    if(username == confirmUsr){
        window.location = "linkPage.html";
    }else{
        alert("You must look deeper");
    }
}


