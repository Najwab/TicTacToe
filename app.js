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
let box =document.querySelector(".buttoncontainer");//to select the start Over button 



function clickEvent() {
    if(turn===true){
      this.innerText="X";
      turn =false;
    }else {
        this.innerText="O";
        turn =true;
    }
        winLose() 
        console.log('he moved');
}
      
function winLose(){
   //check first row 
     
     if(items[0].innerText===items[1].innerText && items[1].innerText===items[2].innerText){
        if(items[1].innerText==="X"){
            console.log("x first row Win")
        }else if(items[1].innerText==="O"){
            console.log("O first row is WIN");
        }
    }
     
// check second row 

   if(items[3].innerText===items[4].innerText && items[4].innerText===items[5].innerText){
        if(items[3].innerText==="X"){
                console.log("x second row Win")
        }else if(items[3].innerText==="O"){
                console.log("O second row is WIN");
        }
    }
//check third row 

    if(items[6].innerText===items[7].innerText && items[7].innerText===items[8].innerText){
         if(items[6].innerText==="X"){
                console.log("x third row TWO Win")
        }else if(items[6].innerText==="O"){
                console.log("O third row is WIN");
        }
    }

         //check first column 

            if(items[0].innerText===items[3].innerText && items[3].innerText===items[6].innerText){
                if(items[0].innerText==="X"){
                    console.log("x column Win")
                }else if(items[0].innerText==="O"){
                    console.log("O column is WIN");
                }
            }

        //check second column 
            if(items[1].innerText===items[4].innerText && items[4].innerText===items[7].innerText){
                if(items[1].innerText==="X"){
                    console.log("x column TWO Win")
                }else if(items[1].innerText==="O"){
                    console.log("O column Two is WIN");
                }
            }

              //check third column 
              if(items[2].innerText===items[5].innerText && items[5].innerText===items[8].innerText){
                if(items[2].innerText==="X"){
                    console.log("x column third Win")
                }else if(items[2].innerText==="O"){
                    console.log("O column thrid is WIN");
                }
            }
   
            //check the first cross 
            if(items[0].innerText===items[4].innerText && items[4].innerText===items[8].innerText){
                if(items[0].innerText==="X"){
                    console.log("x first cross Win")
                }else if(items[0].innerText==="O"){
                    console.log("O second cross is WIN");
                }
            }
             //check the second cross 
             if(items[2].innerText===items[4].innerText && items[4].innerText===items[6].innerText){
                if(items[2].innerText==="X"){
                    console.log("x second cross Win")
                }else if(items[2].innerText==="O"){
                    console.log("O second cross is WIN");
                }
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