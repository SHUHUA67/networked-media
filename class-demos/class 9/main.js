//window.onload is shorthand for this
window.addEventListener("load", ()=>{
    //document.body is selector to retrieve the body html element

    // this is function mouse pressed
    // e is the parameter that exactly where the mouse is or could be any symbol i want its a reference to an event
    document.body.addEventListener("click", (e)=>{
        console.log('document.body was clicked')
        console.log(e.clientX)
        
    })
    //use id when making an interaction
    let textDiv = document.getElementById('text')
    //key presses neede t be on ducment
    textDiv.addEventListener ('keydown',(e)=>{
        console.log('key pressed!')
        console.log(e.key)
        textDiv.textContent += e.key
    })
})