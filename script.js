
var questions = [
    {
    numb=1,
    question="Are Javascript and Java the same?",
    option1="Yes", 
    option2:"No", 
    option3:"Sometimes", 
    option4:"Dont Know",
    correct:"No"
    },
{
    numb=2,
    question="Unlike html and css, Javascript cannot store numbers??",
    option1="Yes", 
    option2:"No", 
    option3:"Sometimes", 
    option4:"Dont Know",
    correct:"No"
    },
    {
    numb=3,
    question="Does Javascript have its own grammar or rules?",
    option1="Yes", 
    option2:"No", 
    option3:"Sometimes", 
    option4:"Dont Know",
    correct:"Yes"
    },
    {
    numb=4,
    question="In Javascript, an opening braces/parantheses does not have a closing braces parantheses?",
    option1="Yes", 
    option2:"No", 
    option3:"Sometimes", 
    option4:"Dont Know",
    correct:"No"
    },
    {
    numb=5,
    question="In if-else statements in Javascript, there should be no condition after the else?",
    option1="Yes", 
    option2:"No", 
    option3:"Sometimes", 
    option4:"Dont Know",
    correct:"Yes"
    },
];

const begin_btn=document.getElementById("begin_btn");
const question = document.getElementById("question");
const option1=document.getElementById("Yes");
const option2=document.getElementById("No");
const option3=document.getElementById("Sometimes");
const option4=document.getElementById("Dont Know");

Start.addEventListner("click",begin_bth);

for (let i=0; i<6; i++) {
    text +="question", "option1","option2";
}