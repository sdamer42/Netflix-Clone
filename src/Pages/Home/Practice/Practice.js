

// const fruits = ["Mango", "Banana", "Apple", "Orange" ]

// document.getElementById("demo1").innerHTML = fruits;

// console.log(fruits)

// const remove = fruits.slice(1);
// document.getElementById("demo2").innerHTML = fruits +  "<br>" + remove;

// console.log(fruits)


let progressBar = document.querySelector("circular-progress");

let containerValue = document.querySelector("container-value");

let progressValue = 0;
let progressEndValue = 60;
let speed = 200;

let progress = setInterval(() => {
    progressValue++;

    containerValue.textContent = `${progressValue}%`;
    progressBar.style.background = `conic-gradient(
        #4d5bf9 ${progressValue * 3.6}deg,
        #cadcff ${progressValue * 3.6}deg
        )`;

    if(progressValue == progressEndValue){
        clearInterval(progress);
    }
}, speed);