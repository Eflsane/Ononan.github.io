
var spanQuestion = document.getElementById("span-question");
var counter = 0;
var che = document.getElementsByClassName("checkb");
var spanAnswer = document.getElementsByClassName("span-answer");
var questionArr=[
    "Question1",
    "Question2",
    "Question3",
    "Question4",
    "Question5",
];
var questionAnswerArr=[
    [ "answer11", "answer12", "answer13", "answer14",],
    [ "answer21", "answer22", "answer23", "answer24",],
    [ "answer31", "answer32", "answer33", "answer34",],
    [ "answer41", "answer42", "answer43", "answer44",],
    [ "answer51", "answer52", "answer53", "answer54",],
];
var correctAnsver=[2,3,1,3,2];
replacementQuestion(counter);


function check(){
    let checkResult=chekChek(che);
    counter++;
    replacementQuestion(counter);
}
function replacementQuestion(count){
    spanQuestion.innerHTML=questionArr[count];
    for(let i = 0;i<4;i++){
        spanAnswer[i].innerHTML=questionAnswerArr[count][i];
    }
}

function chekChek(che){
    for(let i = 0;i<che.length;i++){
        if(che[i].checked) return i;
    }
    return -1;
}