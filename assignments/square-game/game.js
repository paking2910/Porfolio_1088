// =============================================================================
// MDT312 Assignment 7  - Square Game
// Modern JavaScript: DOM, Event, Timer[cite: 1, 3]
// =============================================================================

window.onload = pageLoad;


let timer = null;
let isPlaying = false; 

function pageLoad(){
    const startBtn = document.getElementById("start");
    startBtn.onclick = startGame;

    const stopBtn = document.getElementById("stop");
    stopBtn.onclick = stopGame;

    const gameLayer = document.getElementById("layer");
    gameLayer.onclick = function(event) {
        if (!isPlaying) return; 

        if (event.target.classList.contains("square")) {
            event.target.remove(); 
        }
    };
}

function startGame(){
    isPlaying = true; 
    clearScreen(); 
    addBox();
    timeStart();
}

function stopGame() {
    isPlaying = false; 
    
    if (timer !== null) {
        clearInterval(timer); 
        timer = null;
    }
   
    document.getElementById('clock').textContent = "0";


    clearScreen(); 
}

function timeStart(){
    const TIMER_TICK = 1000;// 1 sc
    
    if (timer !== null) {
        clearInterval(timer); 
        timer = null;
    }

   
    const timeValue = parseInt(document.getElementById("time").value);
    let second = timeValue; 
    
    const clockDisplay = document.getElementById('clock');
    clockDisplay.textContent = second;
    
    timer = setInterval(timeCount, TIMER_TICK);
    
    function timeCount(){
        const allbox = document.querySelectorAll("#layer .square");
        
        if (allbox.length === 0 && second > 0) {
            alert("You win!");
            clearInterval(timer); 
            timer = null;
            isPlaying = false; 
        }
        else if (second === 0 && allbox.length > 0) {
            alert("Game over");
            clearInterval(timer); 
            timer = null;
            isPlaying = false; 
            clearScreen();
        }
        else {
            second--;
            clockDisplay.textContent = second;
        }
    }
}




function addBox(){
    const numbox = parseInt(document.getElementById("numbox").value) || 0;
    const gameLayer = document.getElementById("layer");
    const colorDrop = document.getElementById("color").value;
    
    const boxSize = 30; 
    const maxPos = 500 - boxSize; 
    const placedPositions = []; 
    
    for (let i = 0; i < numbox; i++){ //วนตามที่กรอก
        const tempbox = document.createElement("div");
        

        tempbox.className = "square " + colorDrop;   
        tempbox.id = "box" + i;
        
        let leftPos, topPos;
        let isOverlapping = true;
        let attempts = 0;
        const maxAttempts = 200; 
        
        while (isOverlapping && attempts < maxAttempts) {
            leftPos = Math.random() * maxPos;
            topPos = Math.random() * maxPos;
            isOverlapping = false;
            
            for (let j = 0; j < placedPositions.length; j++) {
                const existing = placedPositions[j];
                
                if (leftPos < existing.left + boxSize &&
                    leftPos + boxSize > existing.left &&
                    topPos < existing.top + boxSize &&
                    topPos + boxSize > existing.top) {
                    
                    isOverlapping = true;
                    break; 
                }
            }
            attempts++;
        }
        
        placedPositions.push({ left: leftPos, top: topPos });
        
        tempbox.style.left = leftPos + "px";
        tempbox.style.top = topPos + "px";
        
        gameLayer.appendChild(tempbox); 
    }
}

function clearScreen(){
    const allbox = document.querySelectorAll("#layer .square"); 
    for (let i = 0; i < allbox.length; i++) {
        allbox[i].remove(); 
    }
}