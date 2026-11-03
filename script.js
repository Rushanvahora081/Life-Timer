const settingcogEl=document.querySelector(".setting-wheel");
const ContentElement=document.querySelector(".settingContent");
const intialTextElement=document.querySelector("#intialText");
const afterTextElement=document.querySelector("#afterText");
const DoBElement=document.querySelector("#DoB");
const btnAddElement=document.querySelector("#btnAdd");

const yearElement=document.querySelector("#Year");
const monthElement=document.querySelector("#Month");
const dayElement=document.querySelector("#Day");
const hourElement=document.querySelector("#Hour");
const minuteElement=document.querySelector("#Minute");
const secElement=document.querySelector("#Second");

let isCurrCog=false;
let DateOfBirth;

const toggleDoB=()=>{
   if(isCurrCog)
   {
    ContentElement.classList.add('hide');
    isCurrCog=false;
   }
   else
   {
    ContentElement.classList.remove('hide');
    isCurrCog=true;
   }
}
const setDateHandler=()=>{

   const currentDate= new Date();
   console.log({currentDate});
   const dateDiff=currentDate-DateOfBirth;
   const year=Math.floor(dateDiff/(1000*60*60*24*365))
   const month=Math.floor(dateDiff/(1000*60*60*24*365)%12)
   const day=Math.floor(dateDiff/(1000*60*60*24))%30
   const hour=Math.floor(dateDiff/(1000*60*60))%24
   const minute=Math.floor(dateDiff/(1000*60))%60
   const sec=Math.floor(dateDiff/1000)%60
   yearElement.innerHTML=year;
   monthElement.innerHTML=month;
   dayElement.innerHTML=day;
   hourElement.innerHTML=hour;
   minuteElement.innerHTML=minute;
   secElement.innerHTML=sec;
}
const setDoBHandler=()=>{
   dateString=DoBElement.value;
   if (!dateString) return;
   const [year, month, day] = dateString.split("-").map(Number);
   DateOfBirth = new Date(year, month - 1, day);
   if (Number.isNaN(DateOfBirth.getTime())) return;  
    if(DateOfBirth)
    {
       intialTextElement.classList.add('hide');
       afterTextElement.classList.remove('hide');
       setInterval(()=>setDateHandler(),1000);
    }
    else
    {
      intialTextElement.classList.remove('hide');
      afterTextElement.classList.add('hide');
    }
}
setDoBHandler()

settingcogEl.addEventListener('click',toggleDoB);
btnAddElement.addEventListener('click',setDoBHandler);
