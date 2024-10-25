const quizData = [
    {
        question : "which language runs in browser? ",
        a: "java ",
        b:"python",
        c:"javascript ",
        d:"php ",
        correct:"c"
    },
    {
        question : "what does HTML stands for? ",
        a: "Hypertext Markup language",
        b:"Hypertext Markdown language",
        c:"Hyperloop markup language ",
        d:"Hyperloop mark down language ",
        correct:"a"
    },
    {
        question : " which of the form control desen't use input element ?",
        a: "checkbox ",
        b:"radio",
        c:"search ",
        d:" multiline text",
        correct:"d"
    },
    {
        question : " In HTML page if background image is smaller then screen what will happen",
        a: "cannot be load ",
        b:"it repeats multiple times",
        c:"image will dispaly in blurr ",
        d:"it will leave a blank space",
        correct:"b"
    },
    {
        question : " which attribute will tags display the text if the image cannot be loaded ? ",
        a: "src ",
        b:"href ",
        c:"alt",
        d:"title",
        correct:"c"
    }
    
]
//target the dom properties
let quiz = document.getElementById("quiz")
let ansEle = document.querySelectorAll(".answer")

let questionEle = document.getElementById("question")
let a_txt = document.getElementById("a_txt")
let b_txt = document.getElementById("b_txt")
let c_txt = document.getElementById("c_txt")
let d_txt = document.getElementById("d_txt")

let subBtn = document.getElementById("submit")

//score

let currentQuiz = 0  //index of questions
let score = 0   //score

//all answers must be clear
function deselectAns(){
  ansEle.forEach(item => (item.checked = false ))
}

//method to load question and answers
function loadQuiz(data){
     deselectAns()
    let curQuizData = data[currentQuiz]
    questionEle.innerText = curQuizData.question
    a_txt.innerText = curQuizData.a
    b_txt.innerText = curQuizData.b
    c_txt.innerText = curQuizData.c
    d_txt.innerText = curQuizData.d

}
loadQuiz(quizData)
//selectedAns
function selectedAns(){
    let ans;
    ansEle.forEach(item => {
        if(item.checked === true){
            ans = item.id
        }
    })
    return ans
}
//submitHandler
subBtn.addEventListener("click",function(){
    console.log(`btn clicked`)
    let answer = selectedAns()
    console.log(answer)
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++
        }
        currentQuiz++
        if(currentQuiz < quizData.length){
            loadQuiz(quizData)
        }else{
            quiz.innerHTML = `<div><h1 class="result">  you have scored ${score} / ${quizData.length}</h1>
            <button onclick="history.go(0)" class="btn">play Again</button> </div>`
        }
    } 
})