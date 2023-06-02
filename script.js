let capitalbutton = document.querySelector(".capital-button");

 console.log("Greater than 10");

capitalbutton.onclick=function(){
   console.log("colick")
  let Capital= document.querySelector (".Capital");
  if ("springfeld"===Capital.value) {
     let majeed=document.querySelector(".majeed");
    majeed.innerHTML="correct";
  } else { let majeed=document.querySelector(".majeed");
          majeed.innerHTML="Incorrect";
     }
}








let pbutton= document.querySelector (".president-button");




 pbutton.onclick=function(){
   console.log("colick")
  let name= document.querySelector (".president");
  if ("biden"===name.value) {
     let majeed=document.querySelector(".dipesh");
    majeed.innerHTML="correct";
  } else { let majeed=document.querySelector(".dipesh");
     majeed.innerHTML="Not correct";
  }
 }