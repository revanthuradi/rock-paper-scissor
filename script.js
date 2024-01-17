const rps = document.querySelectorAll(".rps-images")
const choosingContainer = document.querySelector(".container")
const resultContainer = document.querySelector(".result")

const won = document.querySelector(".won")
const lost = document.querySelector(".lost")
const draw = document.querySelector(".draw")


const wonInfo = document.querySelector(".result-info-h1")


const userChoiceImg = document.querySelector(".use-choice-img")
const compChoiceImg = document.querySelector(".comp-choice-img")


let winSound = new Audio("sounds/winner.m4a")
let drawSound = new Audio("sounds/draw.m4a")
let lostSound = new Audio("sounds/lost.m4a")

let wonCount = 0
let lostCount = 0
let drawCount = 0

function initializeGame(){
    wonCount = 0
    lostCount = 0
    drawCount = 0

    won.textContent=`Won : ${0}`
    lost.textContent=`Lost : ${0}`
    draw.textContent=`Draw : ${0}`

    resultContainer.style.display="none"
    choosingContainer.style.display="block"


}

initializeGame()

function updateScoreBoard(){
    won.textContent=`Won : ${wonCount}`
    lost.textContent=`Lost : ${lostCount}`
    draw.textContent=`Draw : ${drawCount}`
}


resultContainer.addEventListener("click",() =>{
    resultContainer.style.display="none"
    choosingContainer.style.display="block"
})

const compChoiceArr = ["rock","paper","scissor"]
const randomNum = () => Math.floor(Math.random()*3)


const checkForWin = (userChoice,compChoice) => {

    if(userChoice==="rock" && compChoice==="paper"){
        return false
    }else if(userChoice==="paper" && compChoice==="rock"){
        return true
    }else if(userChoice==="rock" && compChoice==="scissor"){
        return true
    }else if(userChoice==="scissor" && compChoice==="rock"){
        return false
    }else if(userChoice==="paper" && compChoice==="scissor"){
        return false
    }else if(userChoice==="scissor" && compChoice==="paper"){
        return true
    }

}

function playAudio(audio){
    audio.play()
}

rps.forEach((e)=>{

    e.addEventListener("click",()=>{
        const userChoice = e.id
        const compChoice = compChoiceArr[randomNum()]
        console.log(userChoice,compChoice);

        choosingContainer.style.display="none"
        resultContainer.style.display="block"

        userChoiceImg.src=`/images/${userChoice}.png`
        compChoiceImg.src=`/images/${compChoice}.png`

        if(userChoice===compChoice){
            drawCount++;
            console.log("draw",drawCount);
            wonInfo.textContent="Draw"
            playAudio(drawSound)

        }else{
            const win = checkForWin(userChoice,compChoice)
            if(win){
                wonCount++;
                console.log("you won",wonCount);
                wonInfo.textContent="You won"
                playAudio(winSound)
            }else{
                lostCount++;
                console.log("you lost",lostCount);
                wonInfo.textContent="You Lose"
                playAudio(lostSound)
            }
        }

        updateScoreBoard();
    })

})