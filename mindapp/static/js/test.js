var 정답=['보기','보기','보기','보기','보기','보기','보기','보기','보기','보기'];
var 보기=[['보기','보기','보기','보기'],['보기','보기','보기','보기'],['보기','보기','보기','보기'],['보기','보기','보기','보기'],['보기','보기','보기','보기'],['보기','보기','보기','보기'],['보기','보기','보기','보기'],['보기','보기','보기','보기'],['보기','보기','보기','보기']];
var 사진=['angry1','bored1','happy1','pain1','sad1','scary1','surprise1','pain2','bored2','surprise2'];
var count=0;
var 점수=0;
var li = document.getElementsByTagName('li');
var 퀴즈번호=document.getElementsByTagName('h1');

퀴즈번호.innerText="Quiz"+String(count+1);
console.log(li)

for(var i=0;i<4;i+=1){
    li[i].innerText=보기[count][i];
    console.log(li[i].innerText)
}

function click(e,num){

    if(보기[count][num]===정답[count]) {
        점수+=1;
    }
    if(count==10){
        doucument.getElementById('결과창').innerText=점수;
        return;
    }
    퀴즈번호.innerText="Quiz"+str(count);
    for(var i=0;i<4;i+=1){
        li[i].innerText=보기[count][i];
    }
}

