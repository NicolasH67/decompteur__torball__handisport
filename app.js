let chronoPrincipalTimer = document.getElementById('chronoPrincipalTimer');
let resetBtnPrincipalTimer = document.getElementById('resetPrincipalTimer');
let stopBtnPrincipalTimer = document.getElementById('stopPrincipalTimer');
let startBtnPrincipalTimer = document.getElementById('startPrincipalTimer');

let departMinutesPrincipal = 5
let tempsPrincipal = departMinutesPrincipal * 60

let timeoutPrincipalTimer; 

let estArretePrincipalTimer = true; 

const demarrerPrincipalTimer = () => {
    if(estArretePrincipalTimer){
        estArretePrincipalTimer = false; 
        defilerTempsPrincipalTimer(); 
    }
}; 

const arreterPrincipalTimer = () => {
    if(!estArretePrincipalTimer){
        estArretePrincipalTimer = true; 
        clearTimeout(timeoutPrincipalTimer)
    }
}

const defilerTempsPrincipalTimer = () => {
    if(estArretePrincipalTimer) return; 

    let minutesPrincipal = parseInt(tempsPrincipal / 60, 10)
    let secondesPrincipal = parseInt(tempsPrincipal % 60, 10)
  
    minutesPrincipal = minutesPrincipal < 10 ? "0" + minutesPrincipal : minutesPrincipal
    secondesPrincipal = secondesPrincipal < 10 ? "0" + secondesPrincipal : secondesPrincipal
  
    chronoPrincipalTimer.innerText = `${minutesPrincipal}:${secondesPrincipal}`

    tempsPrincipal = tempsPrincipal <= 0 ? 0 : tempsPrincipal - 1

    timeoutPrincipalTimer = setTimeout(defilerTempsPrincipalTimer, 1000); 
}

const resetPrincipalTimer = () => {
    chronoPrincipalTimer.textContent = "05:00"; 
    estArretePrincipalTimer = true; 
    departMinutesPrincipal = 5;
    tempsPrincipal = departMinutesPrincipal * 60;
    clearTimeout(timeoutPrincipalTimer)
}

startBtnPrincipalTimer.addEventListener('click', demarrerPrincipalTimer);
stopBtnPrincipalTimer.addEventListener('click', arreterPrincipalTimer);
resetBtnPrincipalTimer.addEventListener('click', resetPrincipalTimer);

let chronoHalfTimeTimer = document.getElementById('chronoHalfTimeTimer');
let resetBtnHalfTimeTimer = document.getElementById('resetHalfTimeTimer');
let stopBtnHalfTimeTimer = document.getElementById('stopHalfTimeTimer');
let startBtnHalfTimeTimer = document.getElementById('startHalfTimeTimer');

let departMinutesHalfTime = 2
let tempsHalfTime = departMinutesHalfTime * 60

let timeoutHalfTimeTimer; 

let estArreteHalfTimeTimer = true; 

const demarrerHalfTimeTimer = () => {
    if(estArreteHalfTimeTimer){
        estArreteHalfTimeTimer = false; 
        defilerTempsHalfTimeTimer(); 
    }
}; 

const arreterHalfTimeTimer = () => {
    if(!estArreteHalfTimeTimer){
        estArreteHalfTimeTimer = true; 
        clearTimeout(timeoutHalfTimeTimer)
    }
}

const defilerTempsHalfTimeTimer = () => {
    if(estArreteHalfTimeTimer) return; 

    let minutesHalfTime = parseInt(tempsHalfTime / 60, 10)
    let secondesHalfTime = parseInt(tempsHalfTime % 60, 10)
  
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
    tempsHalfTime = departMinutesHalfTime * 60;
    clearTimeout(timeoutHalfTimeTimer)
}

startBtnHalfTimeTimer.addEventListener('click', demarrerHalfTimeTimer);
stopBtnHalfTimeTimer.addEventListener('click', arreterHalfTimeTimer);
resetBtnHalfTimeTimer.addEventListener('click', resetHalfTimeTimer);

let chronoTimeoutTimer = document.getElementById('chronoTimeoutTimer');
let resetBtnTimeoutTimer = document.getElementById('resetTimeoutTimer');
let stopBtnTimeoutTimer = document.getElementById('stopTimeoutTimer');
let startBtnTimeoutTimer = document.getElementById('startTimeoutTimer');

let departMinutesTimeout = 0.5
let tempsTimeout = departMinutesTimeout * 60

let timeoutTimeoutTimer; 

let estArreteTimeoutTimer = true; 

const demarrerTimeoutTimer = () => {
    if(estArreteTimeoutTimer){
        estArreteTimeoutTimer = false; 
        defilerTempsTimeoutTimer(); 
    }
}; 

const arreterTimeoutTimer = () => {
    if(!estArreteTimeoutTimer){
        estArreteTimeoutTimer = true; 
        clearTimeout(timeoutTimeoutTimer)
    }
}

const defilerTempsTimeoutTimer = () => {
    if(estArreteTimeoutTimer) return; 

    let minutesTimeout = parseInt(tempsTimeout / 60, 10)
    let secondesTimeout = parseInt(tempsTimeout % 60, 10)
  
    minutesTimeout = minutesTimeout < 10 ? "0" + minutesTimeout : minutesTimeout
    secondesTimeout = secondesTimeout < 10 ? "0" + secondesTimeout : secondesTimeout
  
    chronoTimeoutTimer.innerText = `${minutesTimeout}:${secondesTimeout}`

    tempsTimeout = tempsTimeout <= 0 ? 0 : tempsTimeout - 1

    timeoutTimeoutTimer = setTimeout(defilerTempsTimeoutTimer, 1000); 
}

const resetTimeoutTimer = () => {
    chronoTimeoutTimer.textContent = "00:30"; 
    estArreteTimeoutTimer = true; 
    departMinutesTimeout = 0.5;
    tempsTimeout = departMinutesTimeout * 60;
    clearTimeout(timeoutTimeoutTimer)
}

startBtnTimeoutTimer.addEventListener('click', demarrerTimeoutTimer);
stopBtnTimeoutTimer.addEventListener('click', arreterTimeoutTimer);
resetBtnTimeoutTimer.addEventListener('click', resetTimeoutTimer);