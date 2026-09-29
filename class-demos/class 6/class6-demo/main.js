//this is comment
// syntax

alert('javascript')
console.log('log this ifo to the console')
// all code should go inside of window.onload
window.onload = () => {
    console.log('page has loaded')
    // webpage needs to load to see it
    let mainElement = document.getElementById('main')
    mainElement.style.color = "white"
    console.log(mainElement)

    //global variables
    let colors = ['#360568, #5b2a86, #7785ac, #9ac6c5']
//query selector retrieves a single element using thw CSS selector
// using this only grabs the first element in html that matches
    document.querySelector('p')
    document.querySelector('.blue')
    document.querySelector('#main')
    firstParagraph.textContent = 'i have updated the text with js'
    blueParagraph.style.backgroundColor = 'navy'
    //quert sleector for id works same as getelementbyid
    let containerDiv = document.querySelector('#blue-div')
    for (let i = 0; i <60; i++) {
         //modify that ekement/content
    let newSpan = document.createElement('span');
    newSpan.textContent = 'new span';
    let c = Math.floor(Math.random()* colors.length);
    newSpan.style.backgroundColor = colors[c];
    //add created element to the page
    //anywhere on the bottom of the html and in a specific 
    //container select that element
    containerDiv.appendChild(newSpan);
}
 //set interval is built in to js
 //2 params:
 //1 callback
 //2 amount of time in ms
 setInterval(()=>{
    console.log('two seconds have passed')
 },2000);
    };

//helper functions go after window.onload {}
function intervalFunction(){

}
};


