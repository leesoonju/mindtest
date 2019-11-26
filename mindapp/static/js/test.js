var 정답=['화남','지루함','행복함','아픔','슬픔','무서움','놀람','아픔','지루함','놀람'];
var 보기=[['화남','지루함','짜증','힘듦'],['졸림','지루함','즐거움','행복함'],
        ['그리움','지루함','어이없음','행복함'],['연민','아픔','지겨움','놀람'],
        ['슬픔','혐오','아픔','신남'],['무서움','화남','아픔','편안함'],
        ['감격스러움','즐거움','공포','놀람'],['아픔','우울','불편함','즐거움'],
        ['멍때림','짜증','졸림','지루함'],['신남','화남','놀람','혐오']];
var 사진=['angry1','bored1','happy1','pain1','sad1','scary1','surprise','pain2','bored2','surprise2'];
const 설명=['공감능력 매우부족 ㅠㅠ','공감능력 다소 부족ㅠ ','공감능력 우수!','공감능력 만점!']
var count=0;
var 점수=0;
var li = document.getElementsByTagName('li');
var 퀴즈번호=document.getElementsByTagName('h1')[0];
var image=document.getElementsByTagName('img')[0];
reset(0);
function reset(n){
    if(n>9) return;
    console.log(n);
    image.src= `static/${사진[n]}.jpg`;
    퀴즈번호.textContent="Quiz"+String(n+1);
    for(var i=0;i<4;i+=1){
        li[i].innerText=보기[n][i];    
    }
}

function f(e){
    if(보기[count][Number(e)]===정답[count]) {
        점수+=1;        
    }
    count+=1;
    console.log(count,점수);
    if(count===10){
        document.getElementById('test').style.display="none";
        document.getElementById('결과창').innerText=점수+'점 / 10점!!';
        if(점수<=3) document.getElementById('설명').innerText=설명[0];
        else if(점수<=5) document.getElementById('설명').innerText=설명[1];
        else if(점수<=8) document.getElementById('설명').innerText=설명[2];
        else document.getElementById('설명').innerText=설명[3];
        return;
    }
    reset(count);
    
}