const movieList = document.querySelector('.movie-lists');
const rightBtn = document.querySelector('.rightBtn');
const leftBtn = document.querySelector('.leftBtn');

const answer1 = document.getElementById('answer1');
const answer2 = document.getElementById('answer2');
const answer3 = document.getElementById('answer3');
const answer4 = document.getElementById('answer4');
const answer5 = document.getElementById('answer5');
const answer6 = document.getElementById('answer6');

const questionBtn1 = document.getElementById('questionBtn1');
const questionBtn2 = document.getElementById('questionBtn2');
const questionBtn3 = document.getElementById('questionBtn3');
const questionBtn4 = document.getElementById('questionBtn4');
const questionBtn5 = document.getElementById('questionBtn5');
const questionBtn6 = document.getElementById('questionBtn6');

function rightScroll() {
    movieList.scrollBy(680, 0);
    leftBtn.style.display = 'block';
    if(movieList.scrollLeft + movieList.clientWidth >= movieList.scrollWidth) {
        rightBtn.style.display = 'none';
    }
}

function leftScroll() {
    movieList.scrollBy(-680, 0);
    rightBtn.style.display = 'block';
    if(movieList.scrollLeft === 0) {
        leftBtn.style.display = 'none';
    }
}


function question1() {
    questionBtn1.classList.toggle("rotateX")
    if(answer1.style.display === 'block') {
        answer1.style.display = 'none';
    } else {
        answer1.style.display = 'block';
    }
}
function question2() {
    questionBtn2.classList.toggle("rotateX")
    if(answer2.style.display === 'block') {
        answer2.style.display = 'none';
    } else {
        answer2.style.display = 'block';
    }
}
function question3() {
    questionBtn3.classList.toggle("rotateX")
    if(answer3.style.display === 'block') {
        answer3.style.display = 'none';
    } else {
        answer3.style.display = 'block';
    }
}
function question4() {
    questionBtn4.classList.toggle("rotateX")
    if(answer4.style.display === 'block') {
        answer4.style.display = 'none';
    } else {
        answer4.style.display = 'block';
    }
}
function question5() {
    questionBtn5.classList.toggle("rotateX")
    if(answer5.style.display === 'block') {
        answer5.style.display = 'none';
    } else {
        answer5.style.display = 'block';
    }
}
function question6() {
    questionBtn6.classList.toggle("rotateX")
    if(answer6.style.display === 'block') {
        answer6.style.display = 'none';
    } else {
        answer6.style.display = 'block';
    }
}

