let user=0;
let comp=0;
const USER = document.querySelector("#userScore");
const COMP = document.querySelector("#compScore");
const newMessage = document.querySelector(".message > p");
const paper_div= document.getElementById("p");
const rock_div= document.getElementById("r");
const scissor_div= document.getElementById("s");

const change= document.getElementById("board");

function getcompChoice(){
    const ch = ['p','r','s'];
    const rand = Math.floor(Math.random() * 3);
    return ch[rand];
}

function game(userchoice){
    const compChoice = getcompChoice();

    switch(userchoice+compChoice){
        case 'sp':
        case 'pr':
        case 'rs':
            user++;
            newMessage.innerHTML = "YOU WIN!"
            USER.innerHTML = user;
            newMessage.classList.add('green-text');
            change.classList.add('green');
            document.getElementById(userchoice).classList.add('green');
            setTimeout(function() {document.getElementById(userchoice).classList.remove('green') , newMessage.classList.remove('green-text'), change.classList.remove('green')},500);

            if(user===5){
                newMessage.innerHTML = "CONGRATULATION!"
                user=0;
                comp=0;
                USER.innerHTML = user;
                COMP.innerHTML = comp;
            }

            break;
        case 'ps':
        case 'rp':
        case 'sr':
            comp++;
            newMessage.innerHTML = "YOU LOSE!"
            COMP.innerHTML = comp;
            newMessage.classList.add('red-text');
            change.classList.add('red');
            document.getElementById(userchoice).classList.add('red');
            setTimeout(function() {document.getElementById(userchoice).classList.remove('red') , newMessage.classList.remove('red-text'), change.classList.remove('red')},500);

            if(comp===5){
                newMessage.innerHTML = "GAME OVER!"
                user=0;
                comp=0;
                USER.innerHTML = user;
                COMP.innerHTML = comp;
            }
            break;
        case 'pp':
        case 'rr':
        case 'ss':
            newMessage.innerHTML = "DRAW!"
            newMessage.classList.add('gray-text');
            change.classList.add('gray');
            document.getElementById(userchoice).classList.add('gray');
            setTimeout(function() {document.getElementById(userchoice).classList.remove('gray'), newMessage.classList.remove('gray-text'), change.classList.remove('gray')},500);
            break;
    }
}

function main(){
    paper_div.addEventListener('click', function(){
        game("p");
    });

    rock_div.addEventListener('click', function(){
        game("r");
    })

    scissor_div.addEventListener('click', function(){
        game("s");
    })
}
main();