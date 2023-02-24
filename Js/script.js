//grab the scores display buttons
let score_home = document.getElementById("score_home");
let score_guest = document.getElementById("score_guest");

//grab the score counter buttons

let addOnePoint = document.getElementById("add_1");
let addTwoPoint = document.getElementById("add_2");
let addThreePoint = document.getElementById("add_3");

//set the default score values to 0
let default_score = 0
score_home.innerText = default_score;
score_guest.innerText = default_score;

// functions to increment the scores based on the button clicked

function add_1_point(){
    default_score +=1
    score_home.innerText = default_score;
}

function add_2_point(){
    default_score +=2
    score_home.innerText = default_score;
}

function add_3_point(){
    default_score +=3
    score_home.innerText = default_score;
}
