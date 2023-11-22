const solve = (char) =>{
    var sound = document.getElementById("solve");
    sound.play();

    let display = document.getElementById("display")
    display.value +=char
}

const clearr = () =>{
    let display2 = document.getElementById("error").innerText = ''
    let display = document.getElementById("display")
    display.value = ''
}

const backspace = () =>{
    let display2 = document.getElementById("error").innerText = ''
    let display = document.getElementById("display")
    display.value = display.value.slice(0,-1)
}

const result = () => {
    var sound = document.getElementById("result");
    sound.play();

    let display = document.getElementById("display")
    let expression = display.value
    try{
        display.value = eval(expression)
    } catch(error){
        let display = document.getElementById("error").innerText = 'Please enter a valid string'
    }

    
}
