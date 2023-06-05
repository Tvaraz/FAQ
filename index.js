let questions=document.querySelectorAll(".questionsdiv")
console.log(questions)
for(let a=0; a<questions.length; a++){
    questions[a].addEventListener("click",function(){
        if(questions [a].classList.contains("active")){
            questions [a].classList.remove("active")
        }
        else{
            questions [a].classList.add("active")
        }
    })
    
}