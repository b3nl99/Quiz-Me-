const start_button = document.querySelector(".start_button");
const quiz_section = document.querySelector(".quiz_section");
const submit_btn = document.querySelector(".submit_btn button");
const timeCount = document.querySelector(".timer .timer_sec");
const last = document.querySelector(".finished");
// const start_btn = document.querySelector(".start_btn button");

start_btn.onclick = ()=> {
    quiz_section.classList.add("activeInfo");
    showQuestions(0);
    startTimer(3);
}

let que_count = 0;
let counter;


function showQuestions(index){
    const que_text = document.querySelector(".que_text");
    const option_list = document.querySelector(".option_list");
    let que_tag = "<span>"+ questions[index].question +"</span>";
    let option_tag = '<section class="option">' + questions[index].options[0] + '<span></span></section>'
                        +'<section class="option">' + questions[index].options[1] + '<span></span></section>'
                        +'<section class="option">' + questions[index].options[2] + '<span></span></section>'
                        +'<section class="option">' + questions[index].options[3] + '<span></span></section>'
    
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    const option = option_list.querySelectorAll(".option");

    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionsSelected(this)");
    }
}

function optionsSelected(answer){
    let userAns = answer.textContent;
    let correctAns = questions[que_count].answer;
    if(userAns == correctAns) {
        console.log("Answer is Correct");
    } else {
        console.log("Answer is Wrong")
    }
    
}

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time;
        time--;
        if (time < 0){
            clearInterval(counter);
            lastPage();
            
        }
    }
    
}

function lastPage(){
    last.classList.add("gameOver");
}