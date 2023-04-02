const quizDB=[
    {
        question:"Q1:Which of the following is a valid type of function javascript supports?",
        a:"named function",
        b:"Anynomous function",
        c:" Both of the above.",
        d:" None of the above.",
        ans:"ans1"
    },
    {
        question:"Q2:Which of the following function of Array object adds one or more elements to the front of an array and returns the new length of the array?",
        a:"unshift()",
        b:" sort()",
        c:"splice()",
        d:"toString()",
        ans:"ans1"
    },
    {
        question:"Q3:Javascript is an _______ language?",
        a:"Object-Oriented",
        b:"Object-Based",
        c:"Procedural",
        d:"None of the above",
        ans:"ans1"
    },
    {
        question:"Q4:Which of the following methods is used to access HTML elements using Javascript?",
        a:"getElementById()",
        b:"getElementByClassName()",
        c:"Both A and B",
        d:"None of the above",
        ans:"ans1"
    },
    {
        question:"Q5:Which of the following methods can be used to display data in some form using Javascript?",
        a:"document.write()",
        b:"console.log()",
        c:"window.alert()",
        d:"All of the above",
        ans:"ans4"
    },
    {
        question:"Q6:How can a datatype be declared to be a constant type?",
        a:"let",
        b:"var",
        c:"const",
        d:"constant",
        ans:"ans3"
    },
    {
        question:"Q7:What keyword is used to check whether a given property is valid or not?",
        a:"in",
        b:"is in",
        c:"exists",
        d:"lies",
        ans:"ans1"
    },
    {
        question:"Q8: Which function is used to serialize an object into a JSON string in Javascript?",
        a:"stringify()",
        b:"parse()",
        c:"convert",
        d:"None of the above",
        ans:"ans1"
    },
    {
        question:"Q9:Which of the following are closures in Javascript?",
        a:"Variables",
        b:"Functions",
        c:"Objects",
        d:"All of the above",
        ans:"ans4"
    },
    {
        question:"Q10:How to stop an interval timer in Javascript?",
        a:"clearInterval",
        b:"clearTimer",
        c:"intervalOver",
        d:"stopInterval",
        ans:"ans1"
    } 
];

let question=document.querySelector(".question");
let option1=document.querySelector("#option1");
let option2=document.querySelector("#option2");
let option3=document.querySelector("#option3");
let option4=document.querySelector("#option4");
let submit=document.querySelector("#submit");

let answers=document.querySelectorAll(".answer");
let showScore=document.querySelector("#showScore");

let questionCount=0;
let score=0;
const loadQuestion=()=>{
    const questionList= quizDB[questionCount];
    question.innerText = questionList.question;
    option1.innerText=questionList.a;
    option2.innerText=questionList.b;
    option3.innerText=questionList.c;
    option4.innerText=questionList.d;
}
loadQuestion();
const getcheckAnswer=()=>{
    let answer;
    answers.forEach((curAnsElem)=>{
          if(curAnsElem.checked){
            answer = curAnsElem.id;
          }
    });
    return answer;
};

const deselectAll = () =>{
    answers.forEach((curAnsElem)=> curAnsElem.checked=false )
}
submit.addEventListener("click",()=>{
    const checkedAnswer=getcheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    };
    questionCount++;
    deselectAll();
    if(questionCount<quizDB.length){
        loadQuestion();
    }
    else{
        showScore.innerHTML=
        `<h3> You scored ${score} /${quizDB.length}</h3>
        <button class="btn" onClick="location.reload()"> Play Again</button>`
        showScore.classList.remove("scoreArea")
    }
});