const quiz=[
    {
        question:"Q1:What is the full form of HTML",
        a:"Hey Text Markup Language",
        b:"Hello To My Language",
        c:"Hyper Text mackup Language",
        d:"HyperText Markup Language",
        ans:"ans4"
    },
    {
        question:"Q2: Who is founder of Apple",
        a:"Stev Jobs",
        b:"Sunder Pichai",
        c:"Satya Nadela",
        d:"Naman Bhai",
        ans:"ans1"
    },
    {
        question:"Q3: Who is the Leader of Reaper Team",
        a:"Priyanshi",
        b:"Alok",
        c:"kamal",
        d:"Teja",
        ans:"ans3"
    }
]
const question=document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit=document.querySelector("#submit");
const answers=document.querySelectorAll('.answer');
const showscore=document.querySelector("#showScore");
let qcount=0;
let score=0;
const loadquestion =()=>{
    const questionList=quiz[qcount];
    question.innerText=questionList.question;
    option1.innerText=questionList.a;
    option2.innerText=questionList.b;
    option3.innerText=questionList.c;
    option4.innerText=questionList.d;
}
loadquestion()

const checkans = () => {
    let answer;
    answers.forEach((curAnsElem)=>{
        if (curAnsElem.checked){
            answer=curAnsElem.id;
        }
        
    });
    return answer;
};
submit.addEventListener('click',()=>{
    const checkedAnswer=checkans();
    console.log(checkedAnswer);
    if(checkedAnswer ==quiz[qcount].ans){
        score++;
    };
    qcount++;
    if(qcount<quiz.length){
        loadquestion();
    }
    else{
        showscore.innerHTML=`
        <h3>✌ Congretulation 🥳</h3>
        <h3> You Scored ${score}/${quiz.length}</h3>
        <button class="btn" onclick="location.reload()"> Play Again</button>
        `;
        showscore.classList.remove("scoreArea");
    }
});
      