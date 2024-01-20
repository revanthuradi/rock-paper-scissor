const rps = document.querySelectorAll(".rps-images")
const choosingContainer = document.querySelector(".container")
const resultContainer = document.querySelector(".result")

const won = document.querySelector(".won")
const lost = document.querySelector(".lost")
const draw = document.querySelector(".draw")


const wonInfo = document.querySelector(".result-info-h1")


const winSound = new Audio("sounds/winner.m4a")
const drawSound = new Audio("sounds/draw.m4a")
const lostSound = new Audio("sounds/lost.m4a")

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

function setImages(comp,user){
    document.querySelector(".user-choice-img").src=`./images/${comp}.webp`
    document.querySelector(".comp-choice-img").src=`./images/${user}.webp`
}

function playAudio(audio){
    audio.play()
}

rps.forEach((e)=>{

    e.addEventListener("click",()=>{

        const compChoiceArr = ["rock","paper","scissor"]

        const userChoice = e.id
        const compChoice = compChoiceArr[randomNum()]
        
        setImages(compChoice,userChoice)

        choosingContainer.style.display="none"
        resultContainer.style.display="block"


        if(userChoice===compChoice){
            drawCount++;
            wonInfo.textContent="Draw"
            playAudio(drawSound)

        }else{
            const win = checkForWin(userChoice,compChoice)
            if(win){
                wonCount++;
                wonInfo.textContent="You won"
                playAudio(winSound)
            }else{
                lostCount++;
                wonInfo.textContent="You Lose"
                playAudio(lostSound)
            }
        }

        updateScoreBoard();
    })

})