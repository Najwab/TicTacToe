console.log("is it working!");

//create 2 variables to store two players names
let contentName1 = "Player1";

let contentName2 = "Player2";

//change the value of the vairables
function changeName() {
    let nameinput1 = document.querySelector("#name-input1");
    let nameinput2 = document.querySelector("#name-input2");

    contentName1 = nameinput1.value;
    contentName2 = nameinput2.value;

    console.log(contentName1);
    console.log(contentName2);
    firstPlayer.innerText = contentName1;
    secondPlayer.innerText = contentName2;
}

let items = document.querySelectorAll(".items"); //to select the 9 zones 
let turn = true; //to change turns x then o 
let box = document.querySelector(".buttoncontainer"); //to select the start Over button 
let counter = 0; //to count the clicks if the user clicks 9 times and no if statement excused then it will be a tie
const newParagraph = document.createElement('p'); //to show win and tie messages or turn whom. 
const targetDiv = document.querySelector('.targetP'); //to select the position of the new paragraph
let gameover = false; //to check if it true I will call resetAll function to stop the user from clicking anymore

//player one WIN TIE LOSE 
let player1Wins = 0;
let player1Loses = 0;
let player1Tie = 0;

//player Two WIN TIE LOSE 
let player2Wins = 0;
let player2Loses = 0;
let player2Tie = 0;


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
            newParagraph.innerText = contentName1 + " turn";

        } else if (turn === false) {
            newParagraph.innerText = contentName2 + " turn";
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
            newParagraph.innerText = contentName1 + ' Win!';
            gameover = true;
            player1Wins += 1;
            player2Loses += 1;

            console.log(player1Wins);
            console.log(player2Loses);

            
        } else if (items[1].innerText === "O") {
            newParagraph.innerText = contentName2 + ' Win!';
            gameover = true;
            player2Wins += 1;
            player1Loses += 1;

            console.log(player2Wins);
            console.log(player1Loses);
            
            
        }
    }

    // check second row 
    else if (items[3].innerText === items[4].innerText && items[4].innerText === items[5].innerText) {
        if (items[3].innerText === "X") {
            newParagraph.innerText = contentName1 + ' Win!';
            gameover = true;
            player1Wins += 1;
            player2Loses += 1;
        } else if (items[3].innerText === "O") {
            newParagraph.innerText = contentName2 + ' Win!';
            gameover = true;
            player2Wins += 1;
            player1Loses += 1;
        }


    }
    //check third row 
    else if (items[6].innerText === items[7].innerText && items[7].innerText === items[8].innerText) {
        if (items[6].innerText === "X") {
            newParagraph.innerText = contentName1 + ' Win!';
            gameover = true;
            player1Wins += 1;
            player2Loses += 1;
        } else if (items[6].innerText === "O") {
            newParagraph.innerText = contentName2 + ' Win!';
            gameover = true;
            player2Wins += 1;
            player1Loses += 1;
        }

    }

    //check first column 
    else if (items[0].innerText === items[3].innerText && items[3].innerText === items[6].innerText) {
        if (items[0].innerText === "X") {
            newParagraph.innerText = contentName1 + ' Win!';
            gameover = true;
            player1Wins += 1;
            player2Loses += 1;
        } else if (items[0].innerText === "O") {
            newParagraph.innerText = contentName2 + ' Win!';
            gameover = true;
            player2Wins += 1;
            player1Loses += 1;
        }

    }

    //check second column 
    else if (items[1].innerText === items[4].innerText && items[4].innerText === items[7].innerText) {
        if (items[1].innerText === "X") {
            newParagraph.innerText = contentName1 + ' Win!';
            gameover = true;
            player1Wins += 1;
            player2Loses += 1;
        } else if (items[1].innerText === "O") {
            newParagraph.innerText = contentName2 + ' Win!';
            gameover = true;
            player2Wins += 1;
            player1Loses += 1;
        }

    }

    //check third column 
    else if (items[2].innerText === items[5].innerText && items[5].innerText === items[8].innerText) {

        if (items[2].innerText === "X") {
            newParagraph.innerText = contentName1 + ' Win!';
            winPar.innerText="X Win!"
            gameover = true;
            player1Wins += 1;
            player2Loses += 1;
        } else if (items[2].innerText === "O") {
            newParagraph.innerText = "O column third Win";
            gameover = true;
            player2Wins += 1;
            player1Loses += 1;
        }
    }

    //check the first cross 
    else if (items[0].innerText === items[4].innerText && items[4].innerText === items[8].innerText) {
        if (items[0].innerText === "X") {
            newParagraph.innerText = contentName1 + ' Win!';
            gameover = true;
            player1Wins += 1;
            player2Loses += 1;
        } else if (items[0].innerText === "O") {
            newParagraph.innerText = contentName2 + ' Win!';
            gameover = true;
            player2Wins += 1;
            player1Loses += 1;
        }

    }
    //check the second cross 
    else if (items[2].innerText === items[4].innerText && items[4].innerText === items[6].innerText) {
        if (items[2].innerText === "X") {
            newParagraph.innerText = contentName1 + ' Win!';
            gameover = true;
            player1Wins += 1;
            player2Loses += 1;
        } else if (items[2].innerText === "O") {
            newParagraph.innerText = contentName2 + ' Win!';
            gameover = true;
            player2Wins += 1;
            player1Loses += 1;
        }

    }

    //tie 
    else if (counter === 9) {
        newParagraph.innerText = "Tie";
        player1Tie += 1;
        player2Tie += 1;
    }
    if (gameover) {
        resetAll();
    }
}

//Play Again function
function startOver() {
    for (let i = 0; i < items.length; i++) {
        items[i].innerText = " ";
        items[i].addEventListener('click', clickEvent);
    }
    counter = 0;
    gameover = false;
    newParagraph.innerText = "";

    p1wins.innerText = "Win: "+player1Wins;
    p1lose.innerText = "Lose: "+player1Loses;
    p1tie.innerText ="Tie: "+player1Tie;


  p2wins.innerText = "Win: "+player2Wins;
  p2lose.innerText = "Lose: "+player2Loses;
  p2tie.innerText = "Tie: "+player2Tie;

}

//Stop the user from clicking after win function
function resetAll() {
    for (let i = 0; i < items.length; i++) {
        items[i].removeEventListener('click', clickEvent);
    }
}

//Add Playing function  
for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', clickEvent);
}
//Add startOver function to box so when it's clicked it will allow the user to play again
box.addEventListener('click', startOver);

//to add the new newParagraph in this class 
targetDiv.appendChild(newParagraph);


//css


document.querySelector('.close').addEventListener("click", function () {
    document.querySelector('.modal').style.display = "none";
});



let closeButton = document.querySelector('.button');
let closeButtonWin = document.querySelector('.modal2-content .button');

function close() {
    document.querySelector('.modal').style.display = "none";
    changeName();


}
function closeWin(){
    document.querySelector('.modal2').style.display = "none";
}
closeButtonWin.addEventListener("click",closeWin);
closeButton.addEventListener("click", close);


//
let winPar=document.querySelector(".win-m");


//PlayerOne data 
let firstPlayer = document.querySelector(".player-one-section h3");
let secondPlayer = document.querySelector(".player-two-section h3");

let p1wins = document.querySelector(".player-one-section .p1w");

let p1lose = document.querySelector(".player-one-section .p1L");

let p1tie = document.querySelector(".player-one-section .p1t");


//PlayerTwo data 

let p2wins = document.querySelector(".player-two-section .p2w");

let p2lose = document.querySelector(".player-two-section .p2L");

let p2tie = document.querySelector(".player-two-section .p2t");

