const button=document.querySelector("button");//entire body selection
const body=document.querySelector("body");
const color=["#f2d693","#84b45e","#5bb8d0","#ed6298","#0270ad","#6665ab","#e9e5e1","#151b20","plum","Red","#00c1a9","Green","#8d5fdd"];
document.addEventListener('click',function(){
    body.style.backgroundColor=color[Math.floor(Math.random()*color.length)];
})
