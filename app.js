console.log("is it working!");

/*let nameinput =document.querySelector("#name-input");
const content = nameinput.value;

let nameinput2 =document.querySelector("#name-input2");
const content2 = nameinput2.value;

//create an object to save user info 

const player= {
    playerone:{
        id:101,
        name:content,
        gameVariable:"x"
    },
    playertwo:{
        id:102,
        name:content2,
        gameVariable:"o"
    }
}


function clickEvent() {

    for(let key in player){
        if(player[key]==="playerone"){
         this.innerText=player.playerone.gameVariable; 
        }else{
            this.innerText=player.playertwo.gameVariable; 
        }
    }
   // this.innerText=player.playerone.gameVariable;  
  }
    
  
  for(let i =0;i<items.length;i++){
    items[i].addEventListener('click',clickEvent);
    }*/




let items =document.querySelectorAll(".items");//to select the 9 zone 
let turn=true;//to change turns x then o 
let counter=0; // to call winlose function win it's 3 
let box =document.querySelector(".buttoncontainer");//to select the start Over button 
let firstrow=document.querySelectorAll(".first-row .items");//to select the first row ;
let secondrow=document.querySelectorAll(".second-row .items");//to select the second row ;
let thirdrow=document.querySelectorAll(".third-row .items");//to select the third row ;



function clickEvent() {
    counter+=1;
    if(turn===true){
      this.innerText="X";
      turn =false;
    }else {
        this.innerText="O";
        turn =true;
    }
        winLose() 
        console.log('he moved')
    console.log(counter);
}
      
function winLose(){
/*for(let i =0;i<items.length;i+=3){
 if(items[i].innerText==='X'){
    wincounter+=1;
     console.log('x win');
 }
}for(let i =0;i<items.length;i++){
    if(items[i].innerText==='X'){
        console.log('x win');
    }
   }*/
   let firstcounter=0;
   let secondcounter=0;
   let thirdcounter=0;
   //check first row 
   for(let i=0;i<firstrow.length;i++){
      if(firstrow[i].innerText===firstrow[1].innerText && firstrow[1].innerText===firstrow[2].innerText){
        if(firstrow[i].innerText==="X"){
            firstcounter+=1;
        }else if(firstrow[i].innerText==="O"){
            firstcounter=1;
        }
    }
 }
    if(firstcounter ===3){
    console.log("X WIN");
     }else if (firstcounter ===1){
        console.log("O is WIN");
     }
// check second row 
     for(let i=0;i<secondrow.length;i++){
        if(secondrow[i].innerText===secondrow[1].innerText && secondrow[1].innerText===secondrow[2].innerText){
            if(secondrow[i].innerText==="X"){
                secondcounter+=1;
            }else if(secondrow[i].innerText==="O"){
                secondcounter=1;
            }
        }
     }
        if(secondcounter ===3){
        console.log("XX WIN");
         }else if (secondcounter ===1){
            console.log("OO is WIN");
         }
//check third row 
       for(let i=0;i<thirdrow.length;i++){
        if(thirdrow[i].innerText===thirdrow[1].innerText && thirdrow[1].innerText===thirdrow[2].innerText){
            if(thirdrow[i].innerText==="X"){
                thirdcounter+=1;
            }else if(thirdrow[i].innerText==="O"){
                thirdcounter=1;
            }
        }
     }
        if(thirdcounter ===3){
        console.log("XXX WIN");
         }else if (thirdcounter ===1){
            console.log("OOO is WIN");
         }

       

}

function startOver(){
    for(let i =0;i<items.length;i++){
    items[i].innerText=" ";
    }
}

  for(let i =0;i<items.length;i++){
    items[i].addEventListener('click',clickEvent);
    }

    box.addEventListener('click',startOver);