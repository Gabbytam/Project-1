console.log('here we goooooo');

let colors= ['red', 'purple', 'yellow', 'blue', 'orange', 'green' ]; //an array of colors for the board 

document.addEventListener('DOMContentLoaded', ()=> {
    //initialize outside of loop so they can be accessed later 
    let boardRows;
    let boardSquares;
    let colorIndex= 0; //initialize colorIndex to 0 so it starts off at the 0 index in the colors array
    let boardID= 1; //initialize a boardID starting a 1

    for(let i= 0; i<13; i++){
        boardRows= document.createElement('div');
        boardRows.classList.add('row');
        container.append(boardRows);
        for(let j=0; j<14; j++){
            boardSquares= document.createElement('div');
            boardSquares.classList.add('square');
            boardSquares.id= boardID; //give the squares an ID of whatever number square they are 
            boardID++; //incriment the boardID number
            if(boardSquares.id>= 15 && boardSquares.id<= 27 //checks if the square is in a place that shouldnt appear
                || boardSquares.id>= 29 && boardSquares.id<= 41
                || boardSquares.id>= 58 && boardSquares.id<= 70
                || boardSquares.id>= 72 && boardSquares.id<= 84
                || boardSquares.id>= 99 && boardSquares.id<= 111
                || boardSquares.id>= 113 && boardSquares.id<= 125
                || boardSquares.id>= 142 && boardSquares.id<= 154
                || boardSquares.id>= 156 && boardSquares.id<= 168
                ){
                boardSquares.style.backgroundColor= ''; //gives it a styling of blank
            } else {
                boardSquares.style.backgroundColor= colors[colorIndex]; // if not, give it a color from the color array
            }
            if(colorIndex< colors.length-1){ //checks to make sure we have not hit the end of the colors array and then incriments the colorIndex
                colorIndex++;
            } else { //if it has reached the end of the array, reset the index to 0 so it can loop through again 
                colorIndex= 0;
            }
            
            boardRows.append(boardSquares);
        }
    }
})


//these are the squares that need to be empty: 15-27, 29-41, 58-70, 72-84, 99-111, 113-125, 142-154, 156-168
//alternatively...try if(i=2/3/5/6/8/9/11) or something like that, then only create one div inside 
//if boardSquare has color.....


//background img src: https://st2.depositphotos.com/1719108/10510/i/950/depositphotos_105102728-stock-photo-cartoon-background-of-a-grass.jpg