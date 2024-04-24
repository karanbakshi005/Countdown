
const endDate="17 May 2028,12:00 AM"
document.getElementById("end-Date").innerText= endDate;
const input=document.querySelectorAll("input")
  



function clock(){
    const end= new Date(endDate);
    const now= new Date();
    const diff=(end-now)/1000;

    input[0].value=Math.floor(diff/3600/24);

    input[1].value=Math.floor(diff/3600)%24; 

    input[2].value=(Math.floor(diff/60)%60);

    input[3].value=Math.floor(diff)%60;

    // console.log(diff);
    // console.log(Math.floor(diff/3600/24));
    // console.log(Math.floor(diff/3600)%24);  
    // console.log(Math.floor(diff/60/60));
    // console.log(Math.floor(diff/60) %60);
}
clock()
/*1 days=24hr,
  1 hr=60min,
  60 min=3600 sec,
*/

setInterval(
  ()=>{
    clock()
  },
  1000
)





