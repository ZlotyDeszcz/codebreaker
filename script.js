const guessGrid = document.querySelector("[data-guess-grid]")
const colours = ["Grey","White","Yellow","Orange","Red","Pink","Purple","Blue","Green","Brown"]

function beginGame(){
    let ourCode = "";
for (let i = 0; i < 4; i++) {

    ourCode += colours[Math.floor(Math.random() * colours.length)]; +i;
}
}

startInteraction()

function startInteraction(){
    document.addEventListener("click",handleMouseClick)
    document.addEventListener("keydown",handleKeyClick)
}

function stopInteraction(){
    document.removeEventListener("click",handleMouseClick)
    document.removeEventListener("keydown",handleKeyClick)
}

function handleMouseClick(e){
    if(e.target.matches("[data-key]")){
        pressKey(e.target.dataset.key)
    return
}
    if(e.target.matches("[data-enter")){
    submitGuess()
    return

}
    if(e.target.matches("[data-delete]")){
    deleteKey()
    return
}
}

function handleKeyClick(e){
    console.log(e)
    if(e.key=== "Enter"){
        submitGuess()
        return
    }
    if(e.key ==="Backspace" || e.key === "Delete"){
        deleteKey()
        return
    }
}

function pressKey(key){
    if(getActiveTiles.length >=5) return
    
const nextTile = guessGrid.querySelector(":not([data-colour]")
nextTile.dataset.state = active
}

function deleteKey(){
    const activeTiles = getActiveTiles()
    const lastTile = activeTiles[activeTiles.length -1]
    if(lastTile == null) return
    delete lastTile.dataset.state
}

function getActiveTiles(){
return guessGrid.querySelectorAll('[data-state="active"]')
}

function submitGuess(){

}