const quizData=[
      {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correctAns: "a"
    },
    {
        question:"Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correctAns: "d"

    },
    {
        question:"What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correctAns: "b"

    }
];


const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const que1 = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submit = document.getElementById('submit');


let score = 0;
let currentQuiz = 0;


Loadquiz();

function Loadquiz(){

    deselectAnswer();
    const currentQuizData = quizData[currentQuiz]
    que1.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;

}

function deselectAnswer(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
   let answer;
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id;
            // console.log(answer)
        }
    })
    return answer;
}


submit.addEventListener('click',()=>{
    const answerck = getSelected();
    // console.log(answerck)
    // console.log(quizData[currentQuiz].correctAns)
    if(answerck === quizData[currentQuiz].correctAns){
    score++;
        // console.log(score)
    }
    currentQuiz++;
    if(currentQuiz < quizData.length){
        Loadquiz();
    }
    else{
       quiz.innerHTML = `
       <h2>You answered ${score}/${quizData.length} questions correctly</h2>

       <button onclick="location.reload()">Play again</button>
       `

    }
})