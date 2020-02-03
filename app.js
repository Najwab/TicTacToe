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




let items = document.querySelectorAll(".items"); //to select the 9 zones 
let turn = true; //to change turns x then o 
let box = document.querySelector(".buttoncontainer"); //to select the start Over button 
let counter = 0; //to count the clicks if the user clicks 9 times and no if statement excused then it will be a tie
const newParagraph = document.createElement('p'); //to show win and tie messages or turn whom. 
const targetDiv = document.querySelector('.targetP'); //to select the position of the new paragraph
let gameover=false;


function clickEvent() {
    if (this.innerText === "") { //to check if it's empty it will allow him to click else it  will print this place is not available   
        counter += 1;
        console.log(counter);
        if (turn === true) {
            this.innerText = "X";
            turn = false;
        } else {
            this.innerText = "O";
            turn = true;
        }
//after clicking, it will print whose turn is
        if (turn === true) {
            newParagraph.innerText = "X turn";

        } else if (turn === false) {
            newParagraph.innerText = "O turn";
        }
        winLose() 
    } else {
        console.log("this place is not available");
    }
}

function winLose() {
    //check first row 

    if (items[0].innerText === items[1].innerText && items[1].innerText === items[2].innerText) {
        if (items[1].innerText === "X") {
            newParagraph.innerText = 'x first row Win';
            gameover=true;
        } else if (items[1].innerText === "O") {
            newParagraph.innerText = 'O first row is WIN';
            gameover=true;
        }
    }

    // check second row 
    else if (items[3].innerText === items[4].innerText && items[4].innerText === items[5].innerText) {
        if (items[3].innerText === "X") {
            newParagraph.innerText = 'x second row Win';
            gameover=true;
        } else if (items[3].innerText === "O") {
            newParagraph.innerText = "O second row is WIN";
            gameover=true;
        }
        
        
    }
    //check third row 
    else if (items[6].innerText === items[7].innerText && items[7].innerText === items[8].innerText) {
        if (items[6].innerText === "X") {
            newParagraph.innerText = 'x third row Win';
            gameover=true;
        } else if (items[6].innerText === "O") {
            newParagraph.innerText = 'O third row is WIN';
            gameover=true;
        }
      
    }

    //check first column 
    else if (items[0].innerText === items[3].innerText && items[3].innerText === items[6].innerText) {
        if (items[0].innerText === "X") {
            newParagraph.innerText = "x column is WIN";
            gameover=true;
        } else if (items[0].innerText === "O") {
            newParagraph.innerText = "O column is WIN";
            gameover=true;
        }
     
    }

    //check second column 
    else if (items[1].innerText === items[4].innerText && items[4].innerText === items[7].innerText) {
        if (items[1].innerText === "X") {
            newParagraph.innerText = "x column TWO Win";
            gameover=true;
        } else if (items[1].innerText === "O") {
            newParagraph.innerText = "O column Two is WIN";
            gameover=true;
        }
       
    }

    //check third column 
    else if (items[2].innerText === items[5].innerText && items[5].innerText === items[8].innerText) {

        if (items[2].innerText === "X") {
            newParagraph.innerText = "X column third Win";
            gameover=true;
        } else if (items[2].innerText === "O") {
            newParagraph.innerText = "O column third Win";
            gameover=true;
        }
    }

    //check the first cross 
    else if (items[0].innerText === items[4].innerText && items[4].innerText === items[8].innerText) {
        if (items[0].innerText === "X") {
            newParagraph.innerText = "x first cross Win";
            gameover=true;
        } else if (items[0].innerText === "O") {
            newParagraph.innerText = "O second cross is WIN";
            gameover=true;
        }
      
    }
    //check the second cross 
    else if (items[2].innerText === items[4].innerText && items[4].innerText === items[6].innerText) {
        if (items[2].innerText === "X") {
            newParagraph.innerText = "x second cross Win";
            gameover=true;
        } else if (items[2].innerText === "O") {
            newParagraph.innerText = "O second cross is WIN";
            gameover=true;
        }
    
    }

    //tie 
    else if (counter === 9) {
        newParagraph.innerText = "Tie";
    }
    if(gameover){
        resetAll();
    }
}


function startOver() {
    for (let i = 0; i < items.length; i++) {
        items[i].innerText = " ";
        items[i].addEventListener('click', clickEvent);
        console.log(i)
    }
    counter = 0;
    gameover=false;
   /* newParagraph.innerText = "";*/

}


function resetAll(){
    for (let i = 0; i < items.length; i++) {
        items[i].removeEventListener('click', clickEvent);
    }
}


for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', clickEvent);
}

box.addEventListener('click', startOver);
targetDiv.appendChild(newParagraph);