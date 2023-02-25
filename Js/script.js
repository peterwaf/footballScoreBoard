//grab the scores display buttons
let score_home = document.getElementById("score_home");
let score_guest = document.getElementById("score_guest");

//grab the score counter buttons

let addOnePoint = document.getElementById("add_1");
let addTwoPoint = document.getElementById("add_2");
let addThreePoint = document.getElementById("add_3");

//set the default score values to 0
let homeDefaultScore = 0
let guestDefaultScore = 0

score_home.innerText = homeDefaultScore;
score_guest.innerText = guestDefaultScore;

// functions to increment the home team scores based on the button clicked

function add_1_point_home() {
    homeDefaultScore += 1;
    score_home.innerText = homeDefaultScore;
}

function add_2_point_home() {
    homeDefaultScore += 2;
    score_home.innerText = homeDefaultScore;
}

function add_3_point_home() {
    homeDefaultScore += 3;
    score_home.innerText = homeDefaultScore;
}

// functions to increment the guest team scores based on the button clicked

function add_1_point_guest() {
    guestDefaultScore += 1;
    score_guest.innerText = guestDefaultScore;
}

function add_2_point_guest() {
    guestDefaultScore += 2;
    score_guest.innerText = guestDefaultScore;
}

function add_3_point_guest() {
    guestDefaultScore += 3;
    score_guest.innerText = guestDefaultScore;
}

// function to reset scores

function reset_scores() {
    homeDefaultScore = 0;
    guestDefaultScore = 0;
    score_home.innerText = homeDefaultScore;
    score_guest.innerText = guestDefaultScore;
}