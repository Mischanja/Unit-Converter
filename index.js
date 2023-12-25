//PARAGRAPHS
let LenghtText = document.getElementById('Length')
let VolumeText = document.getElementById('Volume')
let MassText = document.getElementById('Mass')

//INPUT VALUE START
let inputValue = ''

//CONVERT BTN, RENDER FUNCTION TRIGGER
let renderBTN = document.getElementById("convert-btn")
renderBTN.addEventListener('click',render)


//RENDER VALUES
function render(){
    inputValue = document.getElementById('input-el').value
    
    //LENGTH
    const convertedFeet = (inputValue * 3.281).toFixed(3)
    const convertedMeters = (inputValue * 0.3048).toFixed(3)

    //VOLUME
    const convertedGallons = (inputValue * 0.264).toFixed(3)
    const convertedLiters = (inputValue * 3.78541).toFixed(3)

    //MASS
    const convertedPounds = (inputValue * 2.204).toFixed(3)
    const convertedKilos = (inputValue / 2.20462).toFixed(3)
    
    //DOM
    
    //LENGTH
    LenghtText.innerHTML = `${inputValue} meters = ${convertedFeet} feet | ${inputValue} feet = ${convertedMeters} meters`
    
     //VOLUME
    VolumeText.innerHTML = `${inputValue} liters = ${convertedGallons} gallons | ${inputValue} gallons = ${convertedLiters} liters`
    
     //MASS
    MassText.innerHTML = `${inputValue} kilo = ${convertedPounds} pounds | ${inputValue} pounds = ${convertedKilos} kilos`
}