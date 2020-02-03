/*let items =document.querySelectorAll(".items");//to select the 9 zone 
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
   /*for(let i=0;i<firstrow.length;i++){
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
     }*/
     
     if(items[0].innerText===items[1].innerText && items[1].innerText===items[2].innerText){
        if(items[1].innerText==="X"){
            console.log("x first row Win")
        }else if(items[1].innerText==="O"){
            console.log("O first row is WIN");
        }
    }
     
// check second row 
     /*for(let i=0;i<secondrow.length;i++){
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

         if(items[3].innerText===items[4].innerText && items[4].innerText===items[5].innerText){
            if(items[3].innerText==="X"){
                console.log("x second row Win")
            }else if(items[3].innerText==="O"){
                console.log("O second row is WIN");
            }
        }
//check third row 
       /*for(let i=0;i<thirdrow.length;i++){
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
         }*//*
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

    */
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
 
    else if(items[6].innerText===items[7].innerText && items[7].innerText===items[8].innerText){
          if(items[6].innerText==="X"){
                 console.log("x third row TWO Win")
         }else if(items[6].innerText==="O"){
                 console.log("O third row is WIN");
         }
     }
 
          //check first column 
 
             else if(items[0].innerText===items[3].innerText && items[3].innerText===items[6].innerText){
                 if(items[0].innerText==="X"){
                     console.log("x column Win")
                 }else if(items[0].innerText==="O"){
                     console.log("O column is WIN");
                 }
           }
 
         //check second column 
            else if(items[1].innerText===items[4].innerText && items[4].innerText===items[7].innerText){
                 if(items[1].innerText==="X"){
                     console.log("x column TWO Win")
                 }else if(items[1].innerText==="O"){
                     console.log("O column Two is WIN");
                 }
             }
 
               //check third column 
             else if(items[2].innerText===items[5].innerText && items[5].innerText===items[8].innerText){
                 if(items[2].innerText==="X"){
                     console.log("x column third Win")
                 }else if(items[2].innerText==="O"){
                     console.log("O column thrid is WIN");
                 }
             }
    
             //check the first cross 
            else if(items[0].innerText===items[4].innerText && items[4].innerText===items[8].innerText){
                 if(items[0].innerText==="X"){
                     console.log("x first cross Win")
                 }else if(items[0].innerText==="O"){
                     console.log("O second cross is WIN");
                 }
             }
              //check the second cross 
             else if(items[2].innerText===items[4].innerText && items[4].innerText===items[6].innerText){
                 if(items[2].innerText==="X"){
                     console.log("x second cross Win")
                 }else if(items[2].innerText==="O"){
                     console.log("O second cross is WIN");
                 }
             }
 
             //tie 
             else {
                 console.log("Tie");
             }
 
 
 
 
 }
















