//Question bank
var questionBank= [
    {
        question : 'Eritrea, which became the 182nd member of the UN in 1993, is in the continent of',
        option : ['Asia','Africa','Europe','Australia'],
        answer : 'Africa'
    },
    {
        question : 'Garampani sanctuary is located at',
        option : ['Junagarh, Gujarat','Diphu, Assam','Kohima, Nagaland','Gangtok, Sikkim'],
        answer : 'Diphu, Assam'
    },
    {
        question : 'For which of the following disciplines is Nobel Prize awarded?',
        option : ['Physics and Chemistry','Physiology or Medicine','Literature, Peace and Economics','All of the above'],
        answer : 'All of the above'
    },
    {
        question : 'Hitler party which came into power in 1933 is known as',
        option : ['Labour Party','Nazi Party','Ku-Klux-Klan','Democratic Party'],
        answer : 'Nazi Party'
    },
    {
        question : 'First human heart transplant operation conducted by Dr. Christiaan Barnard on Louis Washkansky, was conducted in',
        option : ['1967','1968','1958','1922'],
        answer : '1967'
    },
    {
        question : 'Fathometer is used to measure',
        option : ['Earthquakes','Rainfall','Ocean depth','Sound Inensity'],
        answer : 'Ocean depth'
    }
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var previous= document.querySelector('.previous');
var submit= document.querySelector('.submit');
var one= document.querySelector('.one');
one.addEventListener('click', () => one.style.backgroundColor='#d1426d')
var two= document.querySelector('.two');
two.addEventListener('click', () => two.style.backgroundColor='#d1426d')
var three= document.querySelector('.three');
three.addEventListener('click', () => three.style.backgroundColor='#d1426d')
var four= document.querySelector('.four');
four.addEventListener('click', () => four.style.backgroundColor='#d1426d')
var five= document.querySelector('.five');
five.addEventListener('click', () => five.style.backgroundColor='#d1426d')
var six= document.querySelector('.six');
six.addEventListener('click', () => six.style.backgroundColor='#d1426d')
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var user_time = sessionStorage.getItem("time");
document.querySelector("span.time_taken").innerHTML = user_time;
var i=0;
var score= 0;



//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;

}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score = score+1;
        document.getElementById(e.id).style.background='rgba(0, 136, 169, 1)';


    }else{
        score = score -1;
        document.getElementById(e.id).style.background='rgba(0, 136, 169, 1)';

    }
    //setTimeout(nextQuestion,300);
}




//timer
let timeSecond = 60;
const timeH = document.querySelector('h3');

displayTime(60);

const countDown = setInterval(()=>{
  timeSecond--;
  displayTime(timeSecond);
  if(timeSecond == 0 || timeSecond < 1){
    endCount();
    clearInterval(countDown);
  }
}, 1000);

function displayTime(second){
  const min = Math.floor(second / 60);
  const sec = Math.floor(second % 60);
  timeH.innerHTML = `Time Left: 
  ${(min < 10) ? '0' : ''}${min} mins : ${(sec < 10) ? '0' : ''}${sec} secs
  `; 
}

function endCount(){
    timeH.innerHTML = 'Time out';
    points.innerHTML= score+ '/'+ questionBank.length;
    quizContainer.style.display= 'none';
    scoreboard.style.display= 'block';
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
}

 
    
//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {       
        i=i+1;
        displayQuestion();
        
        if(i==1) {
            next.addEventListener('click', () => three.style.backgroundColor='#d1426d')
        } else if(i==2) {
            next.addEventListener('click', () => four.style.backgroundColor='#d1426d')
        } else if(i==3) {
            next.addEventListener('click', () => five.style.backgroundColor='#d1426d')
        } else if(i==4) {
            next.addEventListener('click', () => six.style.backgroundColor='#d1426d')
        }

        
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block';
        sessionStorage.setItem("time", time);
        clearInterval(mytime);
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);
next.addEventListener('click', () => two.style.backgroundColor='#d1426d')

//function to previous page
function prvQuestion(){
    if(i<questionBank.length)
    {
        i=i-1;
        displayQuestion();
        if(i==4) {
            next.addEventListener('click', () => six.style.backgroundColor='#d1426d')            
        } else if(i==3) {
            next.addEventListener('click', () => five.style.backgroundColor='#d1426d')
        } else if(i==2) {
            next.addEventListener('click', () => four.style.backgroundColor='#d1426d')
        } else if(i==1) {
            next.addEventListener('click', () => three.style.backgroundColor='#d1426d')
        }
    }
}
//click to previous page
previous.addEventListener('click',prvQuestion);

//function to display submit question
function submitPaper(){
    points.innerHTML= score+ '/'+ questionBank.length;
    quizContainer.style.display= 'none';
    scoreboard.style.display= 'block';
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
}

//click events to submit button
submit.addEventListener('click',submitPaper);

//function to 1st page
function firstQuestion(){
    i=0;
    displayQuestion();
}
//click to 1st page
one.addEventListener('click',firstQuestion);

//function to 2nd page
function secondQuestion(){
    i=1;
    displayQuestion();
}
//click to 2nd page
two.addEventListener('click',secondQuestion);

function thirdQuestion(){
    i=2;
    displayQuestion();
}

three.addEventListener('click',thirdQuestion);

function fourthQuestion(){
    i=3;
    displayQuestion();
}

four.addEventListener('click',fourthQuestion);

function fifthQuestion(){
    i=4;
    displayQuestion();
}

five.addEventListener('click',fifthQuestion);

function sixthQuestion(){
    i=5;
    displayQuestion();
}

six.addEventListener('click',sixthQuestion);


//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}

function goToQuestion(){

}

displayQuestion();

