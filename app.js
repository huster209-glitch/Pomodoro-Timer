const minut = document.getElementById("min");
const second = document.getElementById("sec");
const firstBtn = document.getElementById("first");
const secondBtn = document.getElementById("second");
const thirdBtn = document.getElementById("third");

function startCount() {
    console.log("start count");
    let min = parseInt(minut.innerText);
    let sec = parseInt(second.innerText);
    const ID = setInterval(() => {
        if(min === 0 && sec === 0) {
            clearInterval(ID);
            return;
        }
        
        if(sec === 0) {
            min--;
            sec = 59;
            minut.innerText = min;
        } else {
            sec--;
        }
        second.innerText = sec;
    }, 1000);
}

function time1() {
    let min = parseInt(minut.innerText);
    let sec = parseInt(second.innerText);
    min = 25;
    sec = 0;
    minut.innerText = min;
    second.innerText = sec;
}

function time2() {
    let min = parseInt(minut.innerText);
    let sec = parseInt(second.innerText);
    min = 5;
    sec = 0;
    minut.innerText = min;
    second.innerText = sec;
}

function time3() {
    let min = parseInt(minut.innerText);
    let sec = parseInt(second.innerText);
    min = 15;
    sec = 0;
    minut.innerText = min;
    second.innerText = sec;
}

function colorChange1() {
    firstBtn.style.backgroundColor = "rgb(156, 78, 78)";
    secondBtn.style.backgroundColor = "rgb(183, 92, 92)";
    thirdBtn.style.backgroundColor = "rgb(183, 92, 92)";
}

function colorChange2() {
    firstBtn.style.backgroundColor = "";
    secondBtn.style.backgroundColor = "skyblue";
    thirdBtn.style.backgroundColor = "";
}

function colorChange3() {
    firstBtn.style.backgroundColor = "";
    secondBtn.style.backgroundColor = "";
    thirdBtn.style.backgroundColor = "lightpink";
}