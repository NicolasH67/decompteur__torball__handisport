let chronoPrincipalTimer = document.getElementById('chronoPrincipalTimer');
let resetBtnPrincipalTimer = document.getElementById('resetPrincipalTimer');
let stopBtnPrincipalTimer = document.getElementById('stopPrincipalTimer');
let startBtnPrincipalTimer = document.getElementById('startPrincipalTimer');
let sounds1Minute = [75, 74, 73, 72, 71];
let soundsEnd5seconds = [5, 4, 3, 2, 1];
let soundsEnd = 0;
let soundsStartMatch = 300;
let sounds30second = [31, 32, 33, 34, 35]
let sounds10second = [15, 14, 13, 12 , 11]

let tempsPrincipal = 300 ;

let timeoutPrincipalTimer; 

let estArretePrincipalTimer = true; 

const demarrerPrincipalTimer = () => {
    if(estArretePrincipalTimer){
        estArretePrincipalTimer = false; 
        defilerTempsPrincipalTimer(); 
    }
    const audio = new Audio('bruit/start.wav')
    audio.play();
}; 

const arreterPrincipalTimer = () => {
    if(!estArretePrincipalTimer){
        estArretePrincipalTimer = true; 
        clearTimeout(timeoutPrincipalTimer)
    }
    const audio = new Audio('bruit/break.ogg')
    audio.play()
}

const defilerTempsPrincipalTimer = () => {
    if(estArretePrincipalTimer) return; 

    let minutesPrincipal = parseInt(tempsPrincipal / 60, 10)
    let secondesPrincipal = parseInt(tempsPrincipal % 60, 10)
    if(sounds1Minute.includes(tempsPrincipal)) {
        const audio = new Audio('bruit/bip2.wav')
        audio.play();
    }else if (soundsEnd5seconds.includes(tempsPrincipal)) {
        const audio = new Audio('bruit/bip.mp3');
        audio.play();
    } else if (tempsPrincipal === soundsEnd) {
        estArretePrincipalTimer = true; 
        const audio = new Audio('bruit/end.mp3');
        audio.play(); 
        tempsPrincipal = 300; 
    }
    minutesPrincipal = minutesPrincipal < 10 ? "0" + minutesPrincipal : minutesPrincipal
    secondesPrincipal = secondesPrincipal < 10 ? "0" + secondesPrincipal : secondesPrincipal
  
    chronoPrincipalTimer.innerText = `${minutesPrincipal}:${secondesPrincipal}`

    tempsPrincipal = tempsPrincipal <= 0 ? 0 : tempsPrincipal - 1

    timeoutPrincipalTimer = setTimeout(defilerTempsPrincipalTimer, 1000); 
    
}

const resetPrincipalTimer = () => {
    chronoPrincipalTimer.textContent = "05:00"; 
    estArretePrincipalTimer = true; 
    tempsPrincipal = 300 ;
    clearTimeout(timeoutPrincipalTimer)
}

startBtnPrincipalTimer.addEventListener('click', demarrerPrincipalTimer);
stopBtnPrincipalTimer.addEventListener('click', arreterPrincipalTimer);
resetBtnPrincipalTimer.addEventListener('click', resetPrincipalTimer);

let chronoHalfTimeTimer = document.getElementById('chronoHalfTimeTimer');
let resetBtnHalfTimeTimer = document.getElementById('resetHalfTimeTimer');
let stopBtnHalfTimeTimer = document.getElementById('stopHalfTimeTimer');
let startBtnHalfTimeTimer = document.getElementById('startHalfTimeTimer');

let tempsHalfTime = 120;

let timeoutHalfTimeTimer; 

let estArreteHalfTimeTimer = true; 

const demarrerHalfTimeTimer = () => {
    if(estArreteHalfTimeTimer){
        estArreteHalfTimeTimer = false; 
        defilerTempsHalfTimeTimer(); 
    }
    const audio = new Audio('bruit/start.wav')
    audio.play();
}; 

const arreterHalfTimeTimer = () => {
    if(!estArreteHalfTimeTimer){
        estArreteHalfTimeTimer = true; 
        clearTimeout(timeoutHalfTimeTimer)
    }
    const audio = new Audio('bruit/break.ogg')
    audio.play()
}

const defilerTempsHalfTimeTimer = () => {
    if(estArreteHalfTimeTimer) return; 

    let minutesHalfTime = parseInt(tempsHalfTime / 60, 10)
    let secondesHalfTime = parseInt(tempsHalfTime % 60, 10)

    if (sounds30second.includes(tempsHalfTime)) {
        const audio = new Audio('bruit/bip2.wav');
        audio.play();
    } else if (soundsEnd5seconds.includes(tempsHalfTime)){ 
        const audio = new Audio('bruit/bip.mp3');
        audio.play();
    } else if (tempsHalfTime === soundsEnd) {
        estArreteHalfTimeTimer = true; 
        const audio = new Audio('bruit/end.mp3');
        audio.play(); 
        tempsPrincipal = 120; 
    }
  
    minutesHalfTime = minutesHalfTime < 10 ? "0" + minutesHalfTime : minutesHalfTime
    secondesHalfTime = secondesHalfTime < 10 ? "0" + secondesHalfTime : secondesHalfTime
  
    chronoHalfTimeTimer.innerText = `${minutesHalfTime}:${secondesHalfTime}`

    tempsHalfTime = tempsHalfTime <= 0 ? 0 : tempsHalfTime - 1

    timeoutHalfTimeTimer = setTimeout(defilerTempsHalfTimeTimer, 1000); 
}

const resetHalfTimeTimer = () => {
    chronoHalfTimeTimer.textContent = "02:00"; 
    estArreteHalfTimeTimer = true; 
    departMinutesHalfTime = 2;
    tempsHalfTime = 120;
    clearTimeout(timeoutHalfTimeTimer)
}

startBtnHalfTimeTimer.addEventListener('click', demarrerHalfTimeTimer);
stopBtnHalfTimeTimer.addEventListener('click', arreterHalfTimeTimer);
resetBtnHalfTimeTimer.addEventListener('click', resetHalfTimeTimer);

let chronoTimeoutTimer = document.getElementById('chronoTimeoutTimer');
let resetBtnTimeoutTimer = document.getElementById('resetTimeoutTimer');
let stopBtnTimeoutTimer = document.getElementById('stopTimeoutTimer');
let startBtnTimeoutTimer = document.getElementById('startTimeoutTimer');

let tempsTimeout = 30 ;

let timeoutTimeoutTimer; 

let estArreteTimeoutTimer = true; 

const demarrerTimeoutTimer = () => {
    if(estArreteTimeoutTimer){
        estArreteTimeoutTimer = false; 
        defilerTempsTimeoutTimer(); 
    }
    const audio = new Audio('bruit/start.wav')
    audio.play();
}; 

const arreterTimeoutTimer = () => {
    if(!estArreteTimeoutTimer){
        estArreteTimeoutTimer = true; 
        clearTimeout(timeoutTimeoutTimer)
    }
    const audio = new Audio('bruit/break.ogg')
    audio.play()
}

const defilerTempsTimeoutTimer = () => {
    estArretePrincipalTimer = true;
    if(estArreteTimeoutTimer) return; 

    let minutesTimeout = parseInt(tempsTimeout / 60, 10)
    let secondesTimeout = parseInt(tempsTimeout % 60, 10)

    if (sounds10second.includes(tempsTimeout)) {
        const audio = new Audio('bruit/bip2.wav');
        audio.play();
    } else if (soundsEnd5seconds.includes(tempsTimeout)){ 
        const audio = new Audio('bruit/bip.mp3');
        audio.play();
    } else if (tempsTimeout === soundsEnd) {
        estArreteTimeoutTimer = true; 
        const audio = new Audio('bruit/end.mp3');
        audio.play(); 
        tempsTimeout = 30; 
    }
  
    minutesTimeout = minutesTimeout < 10 ? "0" + minutesTimeout : minutesTimeout
    secondesTimeout = secondesTimeout < 10 ? "0" + secondesTimeout : secondesTimeout
  
    chronoTimeoutTimer.innerText = `${minutesTimeout}:${secondesTimeout}`

    tempsTimeout = tempsTimeout <= 0 ? 0 : tempsTimeout - 1

    timeoutTimeoutTimer = setTimeout(defilerTempsTimeoutTimer, 1000); 
}

const resetTimeoutTimer = () => {
    chronoTimeoutTimer.textContent = "00:30"; 
    estArreteTimeoutTimer = true; 
    tempsTimeout = 30;
    clearTimeout(timeoutTimeoutTimer)
}

startBtnTimeoutTimer.addEventListener('click', demarrerTimeoutTimer);
stopBtnTimeoutTimer.addEventListener('click', arreterTimeoutTimer);
resetBtnTimeoutTimer.addEventListener('click', resetTimeoutTimer);
