var infoButton = document.getElementById("infoButton");
var elementInPanel = document.querySelectorAll('#panel .toHide');
var infoShowed = false;

const newText = document.createElement('div');
newText.textContent = 'Hi. I\'m Konstantin Grin. You may also know me as justkostya_ in Discord or Steam or konstgrin on GitHub. I\'m silly 2nd year Computer Science student in Francysk Skaryna Gomel State University. Learning Java.';    
newText.classList.add('newText');

infoButton.onclick = showInfo;
function showInfo(){
    infoShowed = !infoShowed;
    
    if(infoShowed == true){
        elementInPanel.forEach(element => {
            element.classList.add('hidden');
        });
        document.getElementById('panel').classList.add("newSize");
        document.getElementById('logo').classList.add("newLogo-container");
        document.getElementById('infoButton').classList.add("newButton");
        document.getElementById('smth').classList.add("smthHuh");

        document.getElementById('panel').appendChild(newText);
    } else {
        elementInPanel.forEach(element => {
            element.classList.remove('hidden');
        });
        document.getElementById('panel').classList.remove("newSize");
        document.getElementById('logo').classList.remove("newLogo-container");
        infoButton.classList.remove("newButton");
        document.getElementById('smth').classList.remove("smthHuh");
        document.getElementById('panel').removeChild(newText);
    }
}