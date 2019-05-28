






function check(){
    let che = document.getElementsByClassName("checkb");
    let checkResult=chekChek(che);
    console.log(checkResult);
}
function chekChek(che){
    console.log(che);
    for(let i = 0;i<che.length;i++){
        if(che[i].checked) return i;
    }
    return -1;
}