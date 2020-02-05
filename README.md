#List technologies used: 
* HTML 
* CSS 
* Javascript  
* DOM 


#Link to wireframes and user stories.
[wireframe](https://wireframe.cc/PMR30q)


#Describe how you solved for the winner.

the function started by an if statement that checks the first row of the zones by checking array index of the **first row [0,1,2]** it will check if index[0] inner text equal to index [1] **AND** IF index[1] equal to index[2].And if it's true it will check if the inner text equals X then it will print player one name Win else if it O it will print player two name win!. and will check second, third row, first, second, third column, and first,second cross as well

and I initialize two global variables at the beginning the first one called counter and the second one gameover its boolean variable and I assigned to it **false**. the counter variable will count the number of clicks and gameover variable value will be changed to true in each if condition, means if this condition true it will change the game over variable value to true

In the end, there is else if to check tie situation if counter equal to 9 AND game over is false it will print it's a Tie.  


##Describe how some of your favorite functions work

`function whoWin(who) {
    document.querySelector(".modal2").style.display = 'flex';
    document.querySelector(".modal2 .win-m").innerText = who + ' Win!';
}`

* who Win function will be called in each (if win) situation it will select the first element that has moda12 as a class then it will change the property display from 'none' to be 'flex'. to make the pop window appears then it will select the text inside that window and change the text to (whatever it pass to it +" Win!").







