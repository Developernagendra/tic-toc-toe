const  boxes= document.querySelectorAll(".box");
const gameInfo=document.querySelector(".game-info");
const newGameBtn=document.querySelector(".btn");

let currentPlayer;
let gameGrid;

const winningPositions=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

// let create a function to initializea a game 

function initGame(){
    currentPlayer="x";
    gameGrid=["","","","","","","","",""];
    newGameBtn.classList.remove("active");
    gameInfo.innerText=`current Player - ${currentPlayer}`;


}
initGame();

boxes.forEach((box,index)=>{
    box.addEventListener("click",()=>{
        handleClick(index);
    }
    );
}
);

function handleClick(index){
    if(gameGrid[index]!==""){
        return;
    }
    gameGrid[index]=currentPlayer;
    boxes[index].innerText=currentPlayer;
    if(checkWinner()){
        gameInfo.innerText=`Player ${currentPlayer} wins!`;
        newGameBtn.classList.add("active");
        return;
    }
    if(checkDraw()){
        gameInfo.innerText="Draw!";
        newGameBtn.classList.add("active");
        return;
    }
    currentPlayer= currentPlayer==="x"?"o":"x";
    gameInfo.innerText=`current Player - ${currentPlayer}`;
}

function checkWinner(){
    return winningPositions.some((winningPosition)=>{
        return winningPosition.every((index)=>{
            return gameGrid[index]===currentPlayer;
        });
    });
}

function checkDraw(){
    return gameGrid.every((cell)=>{
        return cell!=="";
    });
}

newGameBtn.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerText="";
    });
    initGame();
}
);

 